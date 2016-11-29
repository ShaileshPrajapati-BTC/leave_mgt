import React,{Component} from 'react';

import { Container, Content, List, ListItem, Text, Icon, Badge, Thumbnail } from 'native-base';

import {
  View,Image,TouchableOpacity,AsyncStorage
} from 'react-native'
export default class ControlPanel extends Component {
  static propTypes = {
    closeDrawer: React.PropTypes.func.isRequired
  };

  _navigate(name) {
    this.props.navigator.push({
      name: name,
    })
  }

  logout(){
    AsyncStorage.removeItem('current_user', (err, result) => {
      this._navigate('Login',0);
    });
  }
  render() {
    let {closeDrawer} = this.props
    return (
     <Container backgroundColor='white'>
      <Content>
        <View style={{flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center',padding:30}}>
          <Image source={{uri:'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}} style={{width: 50, height: 50,borderRadius: 25}}/>
          <Text style={{top:10}}>Shailesh Prajapati</Text>
        </View>
        <List>
          <ListItem iconLeft button onPress={ () => this._navigate('Profile',0) }>
              <Icon name="ios-contact" style={{ color: '#0A69FE' }} />
              <Text>Profile</Text>
          </ListItem>
          <ListItem iconLeft button onPress={ () => this._navigate('LeavesList',0) }>
              <Icon name="ios-mail-outline" style={{ color: '#0A69FE' }} />
              <Text>Requested Leaves</Text>
          </ListItem>
          <ListItem iconLeft button onPress={ () => this.logout() }>
              <Icon name="md-log-out" style={{ color: '#0A69FE' }} />
              <Text>Logout</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
    )
  }
}
