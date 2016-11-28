import React,{Component} from 'react';
import FCM from 'react-native-fcm';
import { Container, Content,Header, Title, Button, Icon, Tabs, Spinner} from 'native-base';

import {
  AsyncStorage,
  StatusBar,
  RefreshControl
} from 'react-native';

import OwnNotification from './OwnNotification.js';
import OtherNotification from './OtherNotification.js';

export default class Notification extends Component {

  componentDidMount() {
      // FCM.requestPermissions(); // for iOS
      // FCM.getFCMToken().then(token => {
      //     console.log(token)
      //     // store fcm token in your server
      // });
      this.notificationUnsubscribe = FCM.on('notification', (notif) => {
          // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
          if(notif.local_notification){
            //this is a local notification
          }
          if(notif.opened_from_tray){
            //app is open/resumed because user clicked banner
          }
      });
      this.refreshUnsubscribe = FCM.on('refreshToken', (token) => {
          console.log(token)
          // fcm token may not be available on first load, catch it here
      });
  }

  componentWillUnmount() {
      // prevent leaking
      this.refreshUnsubscribe();
      this.notificationUnsubscribe();
  }

  otherMethods(){
        FCM.subscribeToTopic('/topics/foo-bar');
        FCM.unsubscribeFromTopic('/topics/foo-bar');
        FCM.getInitialNotification().then(notif=>console.log(notif));
        FCM.presentLocalNotification({
            id: "UNIQ_ID_STRING",                               // (optional for instant notification)
            title: "My Notification Title",                     // as FCM payload
            body: "My Notification Message",                    // as FCM payload (required)
            sound: "default",                                   // as FCM payload
            priority: "high",                                   // as FCM payload
            click_action: "ACTION",                             // as FCM payload
            badge: 10,                                          // as FCM payload IOS only, set 0 to clear badges
            number: 10,                                         // Android only
            ticker: "My Notification Ticker",                   // Android only
            auto_cancel: true,                                  // Android only (default true)
            large_icon: "ic_launcher",                           // Android only
            icon: "ic_notification",                            // as FCM payload
            big_text: "Show when notification is expanded",     // Android only
            sub_text: "This is a subText",                      // Android only
            color: "red",                                       // Android only
            vibrate: 300,                                       // Android only default: 300, no vibration if you pass null
            tag: 'some_tag',                                    // Android only
            group: "group",                                     // Android only
            my_custom_data:'my_custom_field_value',             // extra data you want to throw
            lights: true,                                       // Android only, LED blinking (default false)
            show_in_foreground                                  // notification when app is in foreground (local & remote)
        })
      }

    constructor(props) {
      super(props);
      this.state = {
        access_token:'',
        refreshing: false,
        own_notification:{},
        other_notification:{},
      };
    }

    componentWillMount () {
      this.getToken();
    }

    async getToken(){

      AsyncStorage.getItem('current_user', (err, result) => {
       current_user= JSON.parse(result)
       if (result!=null){
          this.setState({access_token:current_user.user.access_token});
          this.getNotifications();
       }
      });
    }

    async getNotifications(){
      this.setState({
         loading: true
     });
     fetch('http://192.168.0.105:3000/fetch_new_notifications.json/?access_token='+this.state.access_token, {method: "GET"})
      .then((response) => response.json())
      .then((responseData) =>
      {
         this.setState({ own_notification: responseData.own_requests_notifications,
                         other_notification: responseData.others_requests_notifications,
                         loading: false,refreshing: false});
      })
      .catch((error) => {
        this.setState({
            loading: false
        });
        console.error(error);
        });
     }

    _navigate(name) {
      this.props.navigator.push({
        name: name,
        passProps: {
          name: name
        }
      })
    }
    render() {
      return(
        <Container>
          <Header backgroundColor="#2196F3">
               <Button transparent onPress={() => {this.props.navigator.pop()}}>
                   <Icon name='ios-arrow-back' />
               </Button>
               <Title>Notification</Title>
          </Header>
          <StatusBar
            backgroundColor="#2196F3"
            barStyle="light-content"
          />
          <Content
            refreshControl={
                          <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.getNotifications.bind(this)}
                          />}>
            {(this.state.loading) ? <Spinner color='#2196F3'/> :
              <Tabs>
                  <OwnNotification tabLabel='Own' navigator={this.props.navigator} data={this.state.own_notification}/>
                  <OtherNotification tabLabel='Other' navigator={this.props.navigator} data={this.state.other_notification} />
              </Tabs>
            }
          </Content>
       </Container>
        );
    }
}
