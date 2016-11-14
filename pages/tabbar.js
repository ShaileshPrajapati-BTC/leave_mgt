import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,Navigator
} from 'react-native';

import Tabs from './tabs';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Approved from './Approved.js'
import Pendding from './Pendding.js';
import Rejected from './Rejected.js';
import Cancelled from './Cancelled.js';
import Emergency from './Emergency.js';

export default class Tabbar extends Component{

  render() {
    let Tabname = ["APPROVED","PENDDING","REJECTED","CANCELLED","EMERGENCY"];
    return <ScrollableTabView
      initialPage={this.props.index}
      renderTabBar={() => <Tabs name={Tabname} />}
      >
      <ScrollView tabLabel="md-checkbox">
        <Approved navigator={this.props.navigator} pin={this.props.pin} />
      </ScrollView>
      <ScrollView tabLabel="md-time">
        <Pendding navigator={this.props.navigator} />
      </ScrollView>
      <ScrollView tabLabel="md-thumbs-down">
        <Rejected navigator={this.props.navigator} />
      </ScrollView>
      <ScrollView tabLabel="md-close-circle">
        <Cancelled navigator={this.props.navigator} />
      </ScrollView>
      <ScrollView tabLabel="md-medkit">
        <Emergency navigator={this.props.navigator} />
      </ScrollView>
    </ScrollableTabView>;
  }
}

const styles = StyleSheet.create({
});
