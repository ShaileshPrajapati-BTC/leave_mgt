import React,{Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Menu from './menu.js';
import Tabbar from './LeavesTab.js';
import DrawerBar from './drawer.js';

import {
  Text,View, StyleSheet, ToolbarAndroid,DrawerLayoutAndroid,
  TouchableHighlight,ScrollView,Navigator
} from 'react-native';


export default class Leaves extends Component {

  renderScene() {
    return (
      <Tabbar navigator={this.props.navigator} index={this.props.index} pin={this.props.pin}/>
    );
  }

  render() {
      return (
        <DrawerBar data={this.renderScene()} navigator={this.props.navigator}/>
      );
  }
}
