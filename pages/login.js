import React,{Component} from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
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
          <View
          style={{
          flex: 1
        }}>
      <View
        style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source={{uri: 'https://camo.githubusercontent.com/3a0d769810f9af2fc0c407648a18c8993813c9a3/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f353833313034342f313435333635312f34376437326564322d343266392d313165332d383062342d6134323237313362306266302e706e67' }} style={{width: 50, height: 50}}/>
      </View>
        <View
          style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>

          <Text style={{fontSize: 25, color: '#ff6f00', fontWeight:'bold'}}>V-</Text>
          <Text style={{fontSize: 25, fontWeight:'bold'}}>Wallet</Text>
        </View>
        <View
          style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <Button
              containerStyle={{margin: 10,padding:10, height:45,width:300, overflow:'hidden', borderRadius:4, backgroundColor: '#d32f2f'}}
              style={{fontSize: 15, color: 'white'}}
              >
              Sign in with Google +
            </Button>
            <Icon.Button iconStyle={{marginRight: 10}} name="facebook" backgroundColor="#3b5998" style={{margin: 10,padding:10, height:25,width:280, left:10}}>
              <Text style={{fontSize: 15, color:'white', left:20}}>Sign in with Facebook</Text>
            </Icon.Button>
          </View>
          <View
            style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text>OR</Text>
          </View>
          <View
          style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding:5,
        }}>
          <View
          style={{flexDirection:'row',
                  justifyContent:'flex-start',
                  alignItems:'flex-start',
                left:30}}>

            <Icon name="user" size={20} color="#ff6f00" style={{top:20}} />
            <TextInput
               style={{width:270, height: 50, left:10}}
               placeholder="Username"
             />
          </View>

          <View
          style={{flexDirection:'row',
                  justifyContent:'flex-start',
                  alignItems:'flex-start',
                left:30}}>

            <Icon name="unlock-alt" size={20} color="#ff6f00" style={{top:20}} />
            <TextInput
               style={{width:270, height: 50, left:10}}
               placeholder="Password"
             />
          </View>


             <Button
             containerStyle={{margin: 10,padding:10, height:45,width:300, overflow:'hidden', borderRadius:4, backgroundColor: '#ff6f00',left:15}}
             style={{fontSize: 15, color: 'white'}}
             onPress={ () => this._navigate('Home') }
               >
               Sign In
             </Button>
          </View>
          <View
            style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding:10,
            top:15
          }}>
            <View
              style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding:10,

            }}>
               <Text style={{padding:5}}>Forget your details?</Text>
               <Text style={{fontSize: 15, color: '#ff6f00'}}>Get Help</Text>
            </View>
            <View
              style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding:10,
            }}>
               <Text style={{padding:5}}>Dont have an account? </Text>
               <Text style={{fontSize: 15, color: '#ff6f00'}}>Sign up</Text>
            </View>
          </View>
          </View>
        );
    }
}
