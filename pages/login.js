import React,{Component} from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import login_styles from '../styles/login_styles';
import {
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

export default class Login extends Component {
  _navigate(name) {
    this.props.navigator.push({
      name: 'Home',
      passProps: {
        name: name
      }
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={login_styles.wallet_image}>
          <Image source={{uri: 'https://camo.githubusercontent.com/3a0d769810f9af2fc0c407648a18c8993813c9a3/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f353833313034342f313435333635312f34376437326564322d343266392d313165332d383062342d6134323237313362306266302e706e67' }} style={{width: 50, height: 50}}/>
        </View>
        <View style={login_styles.wallet_text}>
          <Text style={{fontSize: 25, color: '#ff6f00', fontWeight:'bold'}}>V-</Text>
          <Text style={{fontSize: 25, fontWeight:'bold'}}>Wallet</Text>
        </View>
        <View style={login_styles.button_view}>
          <Button containerStyle={login_styles.button_container_style} style={login_styles.button_style}>
            Sign in with Google +
          </Button>
          <Icon.Button style={login_styles.icon_button_style} iconStyle={{marginRight: 10}} name="facebook" backgroundColor="#3b5998" >
            <Text style={login_styles.icon_button_text_style}>Sign in with Facebook</Text>
          </Icon.Button>
        </View>
        <View style={login_styles.wallet_image}>
          <Text>OR</Text>
        </View>
        <View style={login_styles.wallet_text,{padding:5}}>
          <View style={login_styles.login_field_view}>
            <Icon name="user" size={20} color="#ff6f00" style={{top:20}} />
            <TextInput style={login_styles.text_input} placeholder="Username"/>
          </View>
          <View style={login_styles.login_field_view}>
            <Icon name="unlock-alt" size={20} color="#ff6f00" style={{top:20}} />
            <TextInput style={login_styles.text_input} placeholder="Password"/>
          </View>
          <Button
            containerStyle={login_styles.login_botton}
            style={login_styles.button_style}
            onPress={ () => this._navigate('Home') }
          >
            Sign In
          </Button>
        </View>
        <View style={login_styles.bottom_text_view}>
          <View style={login_styles.bottom_text}>
            <Text style={{padding:5}}>Forget your details?</Text>
            <Text style={{fontSize: 15, color: '#ff6f00'}}>Get Help</Text>
          </View>
          <View style={login_styles.bottom_text}>
            <Text style={{padding:5}}>Dont have an account? </Text>
            <Text style={{fontSize: 15, color: '#ff6f00'}}>Sign up</Text>
          </View>
        </View>
      </View>
    );
  }
}
