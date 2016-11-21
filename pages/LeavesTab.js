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
      date:"2016-05-15"
    };
    this.openDefaultAnimationDialog = this.openDefaultAnimationDialog.bind(this);
  }
  openDefaultAnimationDialog() {
    this.defaultAnimationDialog.openDialog();
  }
  openHolidayDialog() {
    this.holidayDialog.openDialog();
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
      <View tabLabel="md-time">
        <ScrollView tabLabel="md-time">
          <LeaveType navigator={this.props.navigator} />
        </ScrollView>

        <ActionButton buttonColor="#3498db" 
          spacing={5} offsetY={0.20} offsetX={5}
          degrees={90} icon={<Icon name="md-add" style={styles.actionButtonIcon} />}
          onPress={ () => this.openDefaultAnimationDialog()}
        />

        <PopupDialog
          ref={(defaultAnimationDialog) => {
            this.defaultAnimationDialog = defaultAnimationDialog;
          }}
          dialogAnimation={slideAnimation}
          title="Add New Type"
          width={320}
          height={320}
          dialogStyle = {{marginBottom:250,borderRadius:0}}
        >
          <View style={styles.dialogContentView}>
            <View style={styles.card_container}>
              <FloatingLabel 
                labelStyle={{fontSize:12}}
                inputStyle={{borderWidth: 0,fontSize:10}}
                style={styles.text_input}
                onBlur={this.onBlur}
              >Leave Type</FloatingLabel>
              <FloatingLabel 
                labelStyle={{fontSize:12}}
                inputStyle={{borderWidth: 0,fontSize:10}}
                style={styles.text_input}
                onBlur={this.onBlur}
                multiline ={true}
              >Description</FloatingLabel>
              <Button
                containerStyle={{margin: 10,padding:10,height:45,width:150,overflow:'hidden',borderRadius:4,backgroundColor: '#2196F3'}}
                style={styles.button_style}> Add Leave Type </Button>
            </View>
          </View>
        </PopupDialog>
      </View>

      <View tabLabel="md-calendar">
        <ScrollView tabLabel="md-calendar">
          <Holiday navigator={this.props.navigator} />
        </ScrollView>

        <ActionButton buttonColor="#3498db" 
          spacing={5} offsetY={0.20} offsetX={5}
          degrees={90} icon={<Icon name="md-add" style={styles.actionButtonIcon} />}
          onPress={ () => this.openHolidayDialog()}
        />

        <PopupDialog
          ref={(holidayDialog) => {
            this.holidayDialog = holidayDialog;
          }}
          dialogAnimation={slideAnimation}
          title="Add New Holiday"
          width={320}
          height={320}
          dialogStyle = {{marginBottom:250,borderRadius:0}}
        >
          <View style={styles.dialogContentView}>
            <View style={[styles.card_container,{bottom:20}]}>
              <DatePicker
                style={{width: 200,right:22}}
                date={new Date()}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
              <FloatingLabel 
                labelStyle={{fontSize:12}}
                inputStyle={{borderWidth: 0,fontSize:10}}
                style={styles.text_input}
                onBlur={this.onBlur}
              >Holiday Name</FloatingLabel>
              <Button
                containerStyle={{margin: 10,padding:10,height:45,width:150,overflow:'hidden',borderRadius:4,backgroundColor: '#2196F3'}}
                style={styles.button_style}> Add Holiday </Button>
            </View>
          </View>
        </PopupDialog>
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
