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
          <Image source={require('../images/screenlogo.png')} style={{width:70,height:70}} />
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
          <Text style={{top:12}}>OR</Text>
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
        <View >
          <View style={login_styles.bottom_text}>
            <Text >Forget your details?</Text>
            <Text style={{fontWeight:'bold',fontSize: 15, color: '#ff6f00'}}>Get Help</Text>
          </View>
          <View style={login_styles.bottom_text}>
            <Text >Dont have an account? </Text>
            <Text style={{fontWeight:'bold',fontSize: 15, color: '#ff6f00'}}>Sign up</Text>
          </View>
          <View style={{top:100,justifyContent: 'center',alignItems: 'center'}}>
            <Text style={{fontSize: 8}}>Hyperosft Co.Ltd </Text>
          </View>
        </View>
      </View>
    );
  }
}
