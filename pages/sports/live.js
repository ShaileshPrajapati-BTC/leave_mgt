import React,{Component} from 'react';
import Button from 'react-native-button';
import Data from './shopping/data.js';
import Row from './shopping/raw.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from '../drawer.js'

import {
  Text,View,ListView,ToolbarAndroid,Image,StyleSheet,ScrollView,Navigator
} from 'react-native';


export default class Live extends Component {

  constructor() {
    super();
  }
  renderScene() {
    return (
      <View style={{flex: 1}}>

        <View style={styles.raw_container}>
         <Image source={require('./images/live.png')} style={{width: 50, height: 50}}/>
        </View>

        <View style={styles.raw_container}>
          <Image source={require('./images/square_1.png')} style={{width: 20, height: 20}}/>
          <Image source={require('./images/square_2.png')} style={{width: 20, height: 20, marginLeft:35}}/>
          <Image source={require('./images/square_3.png')} style={{width: 20, height: 20, marginLeft:35}}/>
        </View>

        <View style={styles.image_container}>
          <Image source={require('./images/children_playing.jpg')} style={{width: 340, height: 180}}/>
        </View>

        <View style={styles.col_container}>
          <Image source={require('./images/record.png')} style={{width: 30, height: 30,top:20}}/>
          <Text style={{fontSize:10,top:20,color:'black'}}>Record</Text>
        </View>

        <View style={{height: 1,top:20, backgroundColor:'#9E9E9E'}}/>

        <View style={styles.button_raw_container}>
          <Icon.Button style={styles.icon_button_style,{borderRadius:5,width:120}}  name="search" backgroundColor="#ff6f00" >
            <Text style={styles.icon_button_text_style}>Search</Text>
          </Icon.Button>
          <View style={{margin:10}}></View>
          <Icon.Button style={styles.icon_button_style,{borderRadius:5,width:120}} iconStyle={{marginRight: 10}} name="camera" backgroundColor="#ff6f00" >
            <Text style={styles.icon_button_text_style}>Capture</Text>
          </Icon.Button>
        </View>

        <View style={styles.buttons_raw_container}>
         <Icon.Button style={styles.icon_button_style,{borderRadius:5,width:120}} iconStyle={{marginRight: 10}} name="cog" backgroundColor="#ff6f00" >
            <Text style={styles.icon_button_text_style}>Settings</Text>
          </Icon.Button>
          <View style={{margin:10}}></View>
         <Icon.Button style={styles.icon_button_style,{borderRadius:5,width:120}} iconStyle={{marginRight: 10}} name="arrows-alt" backgroundColor="#ff6f00" >
            <Text style={styles.icon_button_text_style}>Full Screen</Text>
          </Icon.Button>
        </View>

      </View>
    );
  }
  render() {
    return (
      <Drawer data={this.renderScene()} navigator={this.props.navigator}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
  },
  raw_container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  col_container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top:15
  },
  icon_button_style:{
    height:35,
    width:130,
  },
  icon_button_text_style:{
    fontSize: 12,
    color:'white',
    left:10,
    fontWeight:'bold'
  },
  button_raw_container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top:30
  },
  buttons_raw_container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top:80
  }
});
