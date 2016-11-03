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
      <ScrollView tabLabel="ios-paper">
        <Card />
      </ScrollView>
      <ScrollView tabLabel="ios-people">
        <Vas />
      </ScrollView>
      <ScrollView tabLabel="ios-chatboxes">
        <Sports />
      </ScrollView>
      <ScrollView tabLabel="ios-notifications">
          <Map />
      </ScrollView>
      <ScrollView tabLabel="ios-list">
        <Shop />
      </ScrollView>
    </ScrollableTabView>;
  }
}

const styles = StyleSheet.create({
});
