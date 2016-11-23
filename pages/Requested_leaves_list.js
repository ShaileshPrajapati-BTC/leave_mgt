import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail,Header, Title, Button, Icon} from 'native-base';

import {
  Text,
  View,
  Image,StatusBar,ToolbarAndroid,
  TouchableOpacity,StyleSheet,BackAndroid
} from 'react-native';



export default class Notification extends Component {
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
              <Content>
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
                <ListItem button onPress={() => this._navigate('LeaveDetail')}>
                    <Thumbnail square size={50} source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} />
                    <Text>Personal Reason</Text>
                    <Text note>23-11-2016</Text>
                </ListItem>
            </Content>
        </Container>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#FAFAFA'
  },
  text: {
    marginLeft: 2,
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius:30
  },
  user_container:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  container:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:10,
  },
  map_container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    top:100
  },
  card_container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_container:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
   dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   login_botton:{
    margin: 10,
    padding:10,
    height:45,
    width:300,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#ff6f00',
  },
  cancel_botton:{
    height:30,
    width:100,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#ff6f00',
  },
  button_style:{
    fontSize: 15,
    color: 'white'
  }
});
