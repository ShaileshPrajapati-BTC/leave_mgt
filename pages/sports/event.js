import React,{Component} from 'react';
import Button from 'react-native-button';
import Data from './shopping/data.js';
import Row from './shopping/raw.js';

import {
  Text,View,ToolbarAndroid,StyleSheet,Navigator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Event extends Component {

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
          <Icon name="calender" size={30} color="#ff6f00" style={{top:20}} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center',top:150}}>
          <Text>Comming soon</Text>
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
  }
});