import React,{Component} from 'react';
import { Container, Content,Header, Title, Button, Icon, Tabs, Spinner} from 'native-base';

import {
  AsyncStorage,
  StatusBar
} from 'react-native';

import Approved from './Approved.js'
import Pendding from './Pendding.js'
import Rejected from './Rejected.js'


export default class Notification extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        access_token:'',
        approved_requests:{},
        pendding_requests:{},
        rejected_requests:{}
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
          this.getLeaveDetails();
       }
      });
    }

    async getLeaveDetails(){
      this.setState({
         loading: true
     });
     fetch('http://192.168.0.105:3000/sign_offs.json/?access_token='+this.state.access_token, {method: "GET"})
      .then((response) => response.json())
      .then((responseData) =>
      {
         this.setState({ approved_requests: responseData.approved_requests,
                         pending_requests: responseData.pending_requests,
                         rejected_requests: responseData.rejected_requests,
                         loading: false});
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
                   <Title>Requested Leaves</Title>
               </Header>
               <StatusBar
                backgroundColor="#2196F3"
                barStyle="light-content"
              />
              <Content>
              {(this.state.loading) ? <Spinner color='#2196F3'/> :
                    <Tabs >
                        <Approved tabLabel='Approved' navigator={this.props.navigator} data={this.state.approved_requests}/>
                        <Pendding tabLabel='Pendding' navigator={this.props.navigator} data={this.state.pending_requests} />
                        <Rejected tabLabel='Rejected' navigator={this.props.navigator} data={this.state.rejected_requests}/>
                    </Tabs>
                      }
            </Content>
        
        </Container>
        );
    }
}
