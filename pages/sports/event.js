import React,{Component} from 'react';
import Button from 'react-native-button';
import Data from './shopping/data.js';
import Row from './shopping/raw.js';
import Drawer from '../drawer.js'

import {
  Text,Image,View,ToolbarAndroid,StyleSheet,Navigator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Event extends Component {

  constructor() {
    super();
  }
  renderScene() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.raw_container}>
          <Image source={require('./images/event.png')} style={{width: 50, height: 50}}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center',top:150}}>
          <Text>Comming soon</Text>
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
  }
});
