import React,{Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Menu from './menu.js';
import Tabbar from './tabbar.js';
import DrawerBar from './drawer.js'
import Approved from './Approved.js'
import Pendding from './Pendding.js';
import Rejected from './Rejected.js';
import Cancelled from './Cancelled.js';
import Emergency from './Emergency.js';


import {
  Text,View, StyleSheet, ToolbarAndroid,DrawerLayoutAndroid,
  TouchableHighlight,ScrollView,Navigator
} from 'react-native';


export default class Home extends Component {

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
