import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
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
      initialPage={0}
      renderTabBar={() => <Tabs name={santosh} />}
      >
      <ScrollView tabLabel="ios-card">
        <Card />
      </ScrollView>
      <ScrollView tabLabel="md-list">
        <Vas />
      </ScrollView>
      <ScrollView tabLabel="ios-walk">
        <Sports />
      </ScrollView>
      <ScrollView tabLabel="ios-navigate">
          <Map />
      </ScrollView>
      <ScrollView tabLabel="ios-basket">
        <Shop />
      </ScrollView>
    </ScrollableTabView>;
  }
}

const styles = StyleSheet.create({
});
