import React, { Component } from 'react';
import {
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,Navigator
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <ScrollView style={styles.container}>
        <View style={{flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center',padding:30}}>
          <Image source={{uri:'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}} style={{width: 50, height: 50,borderRadius: 25}}/>
          <Text style={{top:10}}>Shailesh Prajapati</Text>
        </View>
      <View>
        <TouchableOpacity onPress={ () => this._navigate('Profile',0) }>
          <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
            <Icon name="user" size={25} color="#2196F3" style={{left:10,top:5,height:35,width:35}} /> 
            <Text style={{left:10, fontSize:15, color:'#787878'}}>Profile</Text>
          </View>
         </TouchableOpacity> 
        <TouchableOpacity onPress={ () => this._navigate('Home',0) }>
          <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',paddingTop:10}}>
            <Icon name="gear" size={25} color="#2196F3" style={{left:10,top:5,height:35,width:35}} /> 
            <Text style={{left:10, fontSize:15, color:'#787878'}}>Leaves</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this._navigate('Leaves',0) }>
          <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',paddingTop:10}}>
            <Icon name="gear" size={25} color="#2196F3" style={{left:10,top:5,height:35,width:35}} /> 
            <Text style={{left:10, fontSize:15, color:'#787878'}}>Manage Leaves</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this._navigate('Login') }>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',paddingTop:10}}>
          <Icon name="power-off" size={25} color="#2196F3" style={{left:10,top:5,height:35,width:35}} /> 
            <Text style={{left:10, fontSize:15, color:'#787878'}}>Logout</Text>
        </View>
        </TouchableOpacity>

      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  }
})
