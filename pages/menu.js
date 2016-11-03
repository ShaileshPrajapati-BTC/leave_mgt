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


  render() {
    let {closeDrawer} = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={{flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center',padding:30}}>
          <Image source={require('../images/menuuser.png')} style={{width: 50, height: 50}}/>
          <Text style={{color: '#ff6f00',top:10}}>Update Profile Photo</Text>
        </View>
      <View>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
          <Image source={require('../images/my_profile.png')} style={{width: 35, height: 35}}/>
          <Text style={{left:10, fontSize:15,top:5, color:'#787878'}}>My Profile</Text>
        </View>

        <View style={{height: 1, backgroundColor:'#9E9E9E', top:10}}/>

        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',paddingTop:10}}>
          <Image source={require('../images/settings.png')} style={{width: 35, height: 35}}/>
          <Text style={{left:10, fontSize:15,top:5, color:'#787878'}}>Settings</Text>
        </View>

        <View style={{height: 1, backgroundColor:'#9E9E9E', top:10}}/>

        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',paddingTop:10}}>
          <Image source={require('../images/logout.png')} style={{width: 35, height: 35}}/>
          <Text style={{left:10, fontSize:15,top:5, color:'#787878'}}>Logout</Text>
        </View>

        <View style={{height: 1, backgroundColor:'#9E9E9E',marginVertical:10}}/>

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
