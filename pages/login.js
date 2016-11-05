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
      <View style={{flex: 1}}>
        <View style={{flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-end',top:10,right:10}}>
          <TouchableOpacity onPress={ () => this._navigate('Home', 1) }>
            <Text style={{fontSize: 17,color:'#A9A9A9'}}>Skip</Text>
          </TouchableOpacity>
        </View>
        <StatusBar
           backgroundColor="#ff6f00"
           barStyle="light-content"
          />
        <View style={login_styles.wallet_image}>
          <Image source={require('../images/screenlogo.png')} style={{width:70,height:70}} />
        </View>
        <View style={login_styles.wallet_text}>
          <Text style={{fontSize: 25, color: '#ff6f00', fontWeight:'bold'}}>V-</Text>
          <Text style={{fontSize: 25, fontWeight:'bold'}}>Wallet</Text>
        </View>
        <View style={login_styles.button_view}>
          <Button containerStyle={login_styles.button_container_style}>
            <Image source={require('../images/gpluslogo.png')} style={{left:10,width:20,height:20}} />
            <Text style={{right:70,color: 'white',fontSize: 17}}>Sign in with Google+</Text>
          </Button>
          <Button containerStyle={login_styles.button_container_style_fb}>
            <Image source={require('../images/facebooklogo.png')} style={{left:10,width:20,height:20}} />
            <Text style={{right:60,color: 'white',fontSize: 17}}>Sign in with Facebook</Text>
          </Button>
        </View>
        <View style={login_styles.wallet_image}>
          <Text style={{top:12}}>OR</Text>
        </View>
        <View style={login_styles.wallet_text,{padding:5}}>
          <View style={login_styles.login_field_view}>
            <Image source={require('../images/username.png')} style={{top:13,height:25,width:25}}/>
            <TextInput style={login_styles.text_input} placeholder="Username"/>
          </View>
          <View style={login_styles.login_field_view}>
            <Image source={require('../images/password.png')} style={{top:13,height:25,width:25}}/>
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
        <View >
          <View style={login_styles.bottom_text}>
            <Text style={{color:'#A9A9A9',fontWeight:'bold'}}>Forget your details? </Text>
            <Text style={{fontWeight:'bold',fontSize: 15, color: '#ff6f00'}}>Get help</Text>
          </View>
          <View style={login_styles.bottom_text}>
            <Text style={{color:'#A9A9A9',fontWeight:'bold',top:15}}>Dont have an account? </Text>
            <Text style={{fontWeight:'bold',fontSize: 15, color: '#ff6f00',top:15}}>Sign Up</Text>
          </View>
          <View style={{top:80,justifyContent: 'center',alignItems: 'center'}}>
            <Text style={{fontSize: 10,color:'#A9A9A9'}}>© Hypersoft Co.Ltd </Text>
          </View>
        </View>
      </View>
    );
  }
}
