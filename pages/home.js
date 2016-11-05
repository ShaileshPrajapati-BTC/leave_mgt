import React,{Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Shopping from './sports/shopping.js';
import Vas from './vas.js';
import Card from './card.js'
import Menu from './menu.js';
import Sports from './sports.js';
import Map from './map.js';
import Shop from './shop.js';
import Tabbar from './tabbar.js';
import DrawerBar from './drawer.js'



import {
  Text,View, StyleSheet, ToolbarAndroid,DrawerLayoutAndroid,
  TouchableHighlight,ScrollView,Navigator
} from 'react-native';


export default class Home extends Component {

  renderScene() {
    return (
      <Tabbar navigator={this.props.navigator} index={this.props.index}/>
    );
  }

  render() {
      return (
        <DrawerBar data={this.renderScene()}/>
      );
  }
}
