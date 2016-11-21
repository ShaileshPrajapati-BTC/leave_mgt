import React,{Component} from 'react';

import { Container, Content, List, ListItem, Text, Icon, Badge, Thumbnail } from 'native-base';

import {
  View,Image,TouchableOpacity
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
          <TouchableOpacity onPress={ () => this._navigate('Profile',0) }>
            <ListItem iconLeft>
                <Icon name="ios-contact" style={{ color: '#0A69FE' }} />
                <Text>Profile</Text>
            </ListItem>
          </TouchableOpacity>
           <TouchableOpacity onPress={ () => this._navigate('Home',0) }>
            <ListItem iconLeft>
                <Icon name="ios-settings-outline" style={{ color: '#0A69FE' }} />
                <Text>Leaves</Text>
            </ListItem>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this._navigate('Leaves',0) }>
            <ListItem iconLeft>
                <Icon name="ios-mail-outline" style={{ color: '#0A69FE' }} />
                <Text>Manage Leaves</Text>
                <Badge>12</Badge>
            </ListItem>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this._navigate('Login') }>
            <ListItem iconLeft>
                <Icon name="md-log-out" style={{ color: '#0A69FE' }} />
                <Text>Logout</Text>
            </ListItem>
          </TouchableOpacity>
        </List>
      </Content>
    </Container>
    )
  }
}

