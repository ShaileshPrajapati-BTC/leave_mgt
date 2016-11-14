import React,{Component} from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import login_styles from '../styles/login_styles';
import Tabbar from './tabbar.js';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default class Login extends Component {
  _navigate(name, index) {
    this.props.navigator.push({
      name: name,
      passProps: {
        index: index
      }
    })
  }


  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center',
    alignItems: 'center'}}>
        <StatusBar
           backgroundColor="#2196F3"
           barStyle="light-content"
          />
        <View style={login_styles.wallet_image}>
          <Image source={{uri:'http://eduerp.net/wp-content/uploads/2015/08/Benefits-of-Leave-Management-System-in-School-ERP-Software-300x300.png'}} style={{width:70,height:70}} />
        </View>
        <View style={login_styles.wallet_text}>
          <Text style={{fontSize: 25, fontWeight:'bold'}}>LMS</Text>
        </View>
  
        <View style={login_styles.wallet_text,{padding:5}}>
          <View style={login_styles.login_field_view}>
            <Icon name="user" size={30} color="#2196F3" style={{top:13,height:25,width:25}} />    
            <TextInput style={login_styles.text_input} placeholder="Username"/>
          </View>
          <View style={login_styles.login_field_view}>
            <Icon name="lock" size={30} color="#2196F3" style={{top:13,height:25,width:25}} />    
            <TextInput style={login_styles.text_input} placeholder="Password"/>
          </View>
          <Button
            containerStyle={login_styles.login_botton}
            style={login_styles.button_style}
            onPress={ () => this._navigate('Home',0) }
          >
            Sign In
          </Button>
        </View>

      </View>
    );
  }
}
