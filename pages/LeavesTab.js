import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,TextInput,
  ScrollView,Navigator
} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import PopupDialog, {
  SlideAnimation
} from 'react-native-popup-dialog';
import DatePicker from 'react-native-datepicker'
import FloatingLabel from 'react-native-floating-labels';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ActionButton from 'react-native-action-button';
import Tabs from './tabs';
import LeaveType from './LeaveType.js'
import Holiday from './Holiday.js';
import RequestLeave from './RequestLeave.js';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
export default class LeaVesTab extends Component{

  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      date:"2016-05-15",
      h_name: ''
    };
  }


  render() {
    let Tabname = ["REQUEST LEAVE","LEAVE TYPE","HOLIDAYS"];
    return <ScrollableTabView
      initialPage={this.props.index}
      renderTabBar={() => <Tabs name={Tabname} />}
      >
      <ScrollView tabLabel="md-checkbox">
        <RequestLeave navigator={this.props.navigator} />
      </ScrollView>
      
      <View tabLabel="md-calendar">
        <Holiday />
      </View>

    </ScrollableTabView>;
  }
}

const styles = StyleSheet.create({
  login_botton:{
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    top:380,
    bottom: 10,
    right: 10,
  },
  button_style:{
    fontSize: 15,
    color: 'white',
  },
  card_container:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    bottom:60
  },
  bottom_container:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
   dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_input:{
    width:260,
    height:50,
    left:10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
