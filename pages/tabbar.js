import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,Navigator
} from 'react-native';

import Tabs from './tabs';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Card from './card.js'
import Sports from './sports.js';
import Map from './map.js';
import Shop from './shop.js';
import Vas from './vas.js';

export default class Tabbar extends Component{

  render() {
    let santosh = ["CARD","VAS","SPORTS","MAP","SHOP"];
    return <ScrollableTabView
      initialPage={this.props.index}
      renderTabBar={() => <Tabs name={santosh} />}
      >
      <ScrollView tabLabel="ios-card">
        <Card navigator={this.props.navigator} />
      </ScrollView>
      <ScrollView tabLabel="md-list">
        <Vas navigator={this.props.navigator} />
      </ScrollView>
      <ScrollView tabLabel="ios-walk">
        <Sports navigator={this.props.navigator} />
      </ScrollView>
      <ScrollView tabLabel="ios-navigate">
          <Map navigator={this.props.navigator} />
      </ScrollView>
      <ScrollView tabLabel="ios-basket">
        <Shop navigator={this.props.navigator} />
      </ScrollView>
    </ScrollableTabView>;
  }
}

const styles = StyleSheet.create({
});
