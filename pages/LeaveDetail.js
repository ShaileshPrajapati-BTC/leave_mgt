import React,{Component} from 'react';
import { Footer,FooterTab, Header, Title, Button, Icon,
          Container, Content, List, ListItem, Thumbnail, 
          Text, Badge, Card, CardItem, Spinner } from 'native-base';

import {
  AsyncStorage,
  StatusBar,View,ToastAndroid
} from 'react-native';
export default class LeaveDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      access_token:'',
      results:{
        Leave:[]
      }
    };
  }

  _navigate(name) {
    this.props.navigator.push({
      name: name,
      passProps: {
        id: this.props.id
      }
    })
  }

  componentWillMount () {
    this.getToken();
  }

  async getToken(){
     AsyncStorage.getItem('current_user', (err, result) => {
       current_user= JSON.parse(result)

       if (result!=null){
          this.setState({access_token:current_user.user.access_token});
          this.getLeaveDetails();
       }
     });
  }

  async getLeaveDetails(){
    this.setState({
      loading: true
    });
   fetch('http://192.168.0.105:3000/sign_offs/'+this.props.id+'.json/?access_token='+this.state.access_token, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) =>
    {
        console.log(responseData);
       this.setState({ results: responseData, loading: false});
    })
    .catch((error) => {
        console.error(error);
    });
  }

  changeStatusColor(status)
  {
    if(status=='approved')
      return '#4CAF50';
    else if(status=='pendding')
      return '#FFEB3B'
    else if(status=='rejected')
      return '#D32F2F'
  }

  async changeStatus(sign_off_status){
    this.setState({
      loading: true
    });
    let response = await fetch('http://192.168.0.105:3000/sign_offs/'+this.props.id+'/change_status', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',

       },
       body: JSON.stringify({
         sign_off:{
           status: sign_off_status
         },
         'access_token': this.state.access_token,
       })
      });
    ToastAndroid.show('Leave '+sign_off_status+' Successfully...',ToastAndroid.LONG,ToastAndroid.CENTER,)
    this.getLeaveDetails()
  }

  render() {
    return (
        <Container>
          <Header backgroundColor="#2196F3">
              <Button transparent onPress={() => {this.props.navigator.pop()}}>
                  <Icon name='ios-arrow-back' />
              </Button>
              <Title>Leave Details</Title>
              <Button transparent onPress={() => {this._navigate('LeaveChat')}}>
                <Icon name='ios-chatbubbles' />
              </Button>
          </Header>
          <StatusBar
           backgroundColor="#2196F3"
           barStyle="light-content"
          />
           <Content>
            {(this.state.loading) ? <Spinner color='#2196F3'/> : <View>
              <List>
                  <ListItem>
                    <Thumbnail circle size={80} source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} />
                    <Text>{this.state.results.user_name}</Text>
                    <Text note>{this.state.results.designation}</Text>
                  </ListItem>
                  <Card>
                    <CardItem header>
                      <Text>Requested To</Text>
                    </CardItem>
                    <CardItem>
                      <Text>
                      {this.state.results.requestee_name}
                      </Text>
                    </CardItem>
                  </Card>
                  <ListItem>
                    <Text>Status</Text>
                    <Badge style={{ backgroundColor: this.changeStatusColor(this.state.results.leave_status) }}>{this.state.results.leave_status}</Badge>
                  </ListItem>
                  <ListItem>
                    <Text>Date</Text>
                    <Text note>{this.state.results.date_from} To {this.state.results.date_to}</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Leave Days</Text>
                    <Text note>{this.state.results.leave_days}</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Leave Type</Text>
                    <Text note>{this.state.results.leave_type}</Text>
                  </ListItem>
              </List>
              <Card>
                <CardItem header>
                  <Text>Leave Reason</Text>
                </CardItem>
                <CardItem>
                  <Text>
                  {this.state.results.reason}
                  </Text>
                </CardItem>
              </Card>
              <Card>
                <CardItem header>
                  <Text>Description</Text>
                </CardItem>
                <CardItem>
                  <Text>
                  {this.state.results.description}
                  </Text>
                </CardItem>
              </Card>
            </View>
            }
           </Content>
           { (this.props.status) ?
              (this.state.results.leave_status=='pending')?
              <Footer >
                <FooterTab>
                    <Button onPress={() => this.changeStatus('approved')}>
                        Approved
                        <Icon name='md-checkmark-circle' />
                    </Button>
                    <Button onPress={() => this.changeStatus('rejected')}>
                        Rejected
                        <Icon name='md-close-circle' />
                    </Button>
                </FooterTab>
              </Footer>: <Text/> :<Text/>
           }
         </Container>
    );
  }
}
