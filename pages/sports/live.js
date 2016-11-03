import React,{Component} from 'react';
import Button from 'react-native-button';
import Data from './shopping/data.js';
import Row from './shopping/raw.js';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Text,View,ListView,ToolbarAndroid,Image,StyleSheet,ScrollView,Navigator
} from 'react-native';


export default class Live extends Component {

  constructor() {
    super();
    
  }

  render() {
    return (
     <View style={{flex: 1}}>
        <View style={{backgroundColor: '#ff6f00'}} >
          <ToolbarAndroid
            navIcon={require('../../images/reorder-horizontal.png')}
            title="V-Wallet"
            titleColor="white"
          >
            <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
            </View>
          </ToolbarAndroid>
        </View>

        <View style={styles.raw_container}>
          <Icon name="camera" size={30} color="#ff6f00" style={{top:20}} />
        </View>

        <View style={styles.raw_container}>
          <Icon name="camera" size={15} color="#ff6f00" style={{top:20,padding:20}} />
          <Icon name="camera" size={15} color="#ff6f00" style={{top:20,padding:20}} />
          <Icon name="camera" size={15} color="#ff6f00" style={{top:20,padding:20}} />
        </View>

        <View style={styles.image_container}>
          <Image source={require('./e-learning/video_stream.png')} style={{width: 340, height: 180}}/>
        </View>  

        <View style={styles.col_container}>
          <Icon name="video-camera" size={20} color="red" style={{top:20}} />
          <Text style={{fontSize:10,top:20,color:'black'}}>Record</Text>
        </View>

        <View style={{height: 1,top:20, backgroundColor:'#9E9E9E'}}/>

         <View style={styles.button_raw_container}>
         <Icon.Button style={styles.icon_button_style}  name="search" backgroundColor="#ff6f00" >
            <Text style={styles.icon_button_text_style}>Search</Text>
          </Icon.Button>
         <Icon.Button style={styles.icon_button_style} iconStyle={{marginRight: 10}} name="camera" backgroundColor="#ff6f00" >
            <Text style={styles.icon_button_text_style}>Capture</Text>
          </Icon.Button>
        </View>
        <View style={styles.buttons_raw_container}>
         <Icon.Button style={styles.icon_button_style} iconStyle={{marginRight: 10}} name="search" backgroundColor="#ff6f00" >
            <Text style={styles.icon_button_text_style}>Search</Text>
          </Icon.Button>
         <Icon.Button style={styles.icon_button_style} iconStyle={{marginRight: 10}} name="camera" backgroundColor="#ff6f00" >
            <Text style={styles.icon_button_text_style}>Capture</Text>
          </Icon.Button>
        </View>
      </View>
      
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
    left:20,

  },
  icon_button_text_style:{
    fontSize: 12,
    color:'white',
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

