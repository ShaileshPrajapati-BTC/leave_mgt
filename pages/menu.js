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

export default class ControlPanel extends Component {
  static propTypes = {
    closeDrawer: React.PropTypes.func.isRequired
  };


  render() {
    let {closeDrawer} = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={{flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center',padding:30}}>
          <Image source={{uri: 'http://gurucul.com/wp-content/uploads/2015/01/default-user-icon-profile.png'}} style={{width: 50, height: 50, borderRadius:50}}/>
          <Text style={{color: 'black',top:10}}>Update Profile Photo</Text>
        </View>
      <View>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
          <Image source={require('../images/account.png')}  style={{height:30, width:30,top:5}}/>
          <Text style={{left:10, fontSize:15,top:5}}>My Profile</Text>
        </View>

        <View style={{height: 1, backgroundColor:'#9E9E9E', top:10}}/>

        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',paddingTop:10}}>
            <Image source={require('../images/settings.png')}  style={{height:30, width:30,top:5}}/>
            <Text style={{left:10, fontSize:15,top:5}}>Settings</Text>
        </View>

        <View style={{height: 1, backgroundColor:'#9E9E9E', top:10}}/>
        
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',paddingTop:10}}>
          <Image source={require('../images/exit-to-app.png')}  style={{height:30, width:30,top:5}}/>
          <Text style={{left:10, fontSize:15,top:5}}>Logout</Text>
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
