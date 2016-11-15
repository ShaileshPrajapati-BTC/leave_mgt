import React,{Component} from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import login_styles from '../styles/login_styles';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default class Profile extends Component {
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
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}} > 
      <View style={{flex: 1}}>
        <View style={{justifyContent:'center',opacity: 1}}>
          <Image source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} style={{width: 360, height: 250}}>
          <TouchableOpacity onPress={() => this.back()}>
          <Icon name="lock" size={30} color="#2196F3" style={{top:13,height:25,width:25}} />   
          </TouchableOpacity>
            <Text style ={{backgroundColor: 'transparent',paddingTop: 170,textAlign:'left',fontSize: 25,fontWeight: 'bold',color: 'white'}}>Shailesh</Text> 
          </Image>  
        </View>

        <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
          <Button
            containerStyle={login_styles.login_botton}
            style={login_styles.button_style}
            onPress={ () => this._navigate('Home',0) }
          >
            Sign In
          </Button>
          <Button
            containerStyle={login_styles.login_botton}
            style={login_styles.button_style}
            onPress={ () => this._navigate('Home',0) }
          >
            Sign In
          </Button>
          <View style={{}} >
            <Icon name="lock" size={30} color="#2196F3" style={{top:13,height:25,width:25}} />   
          </View> 
          <View style={{flexDirection: 'column'}} >
          <Text style={{color:'black',marginLeft: 12}}></Text>
          <Text style={{color:'black',marginLeft: 12}}>(Home)</Text>
          </View>                    
        </View>
        <View style={{height:1, backgroundColor:'black'}}/>
        <View style={{flexDirection: 'row',padding: 12,alignItems: 'center'}}>
          <View style={{}} >
            <Icon name="lock" size={30} color="#2196F3" style={{top:13,height:25,width:25}} />   
          </View> 
          <View style={{}} >
          <Text style={{color:'black',marginLeft: 12}}>sp@gm.com</Text>
          </View>                    
        </View>

     </View>
    </View>
    );
  }
}
