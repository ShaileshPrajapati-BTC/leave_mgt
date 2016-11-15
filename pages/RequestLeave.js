import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  Image,
  TouchableOpacity,StyleSheet,BackAndroid
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import FloatingLabel from 'react-native-floating-labels';
import Button from 'react-native-button';


export default class RequestLeave extends Component {
    constructor(props) {
    super(props);
      this.state = {
        date:"2016-05-15"
      };
    }
    _navigate(name) {
      this.props.navigator.push({
        name: name,
        passProps: {
          name: name
        }
      })
    }
   render() {
        return (
          <View style={{flex: 1,flexDirection: 'column',alignItems: 'center',justifyContent: 'center',}}>
             <Text>Request Leave</Text>
            <FloatingLabel 
                labelStyle={{fontSize:12}}
                inputStyle={{borderWidth: 0,fontSize:10}}
                style={styles.text_input}
                onBlur={this.onBlur}
              >Send To</FloatingLabel>
              <FloatingLabel 
                labelStyle={{fontSize:12}}
                inputStyle={{borderWidth: 0,fontSize:10}}
                style={styles.text_input}
                onBlur={this.onBlur}
                multiline ={true}
              >Leave Reason</FloatingLabel>
              <FloatingLabel 
                labelStyle={{fontSize:12}}
                inputStyle={{borderWidth: 0,fontSize:10}}
                style={styles.text_input}
                onBlur={this.onBlur}
                multiline ={true}
              >Leave Type</FloatingLabel>
              <FloatingLabel 
                labelStyle={{fontSize:12}}
                inputStyle={{borderWidth: 0,fontSize:10}}
                style={styles.text_input}
                onBlur={this.onBlur}
                multiline ={true}
              >Leave Time Type</FloatingLabel>
              <FloatingLabel 
                labelStyle={{fontSize:12}}
                inputStyle={{borderWidth: 0,fontSize:10}}
                style={styles.text_input}
                onBlur={this.onBlur}
                multiline ={true}
              >Description</FloatingLabel>
              <View style={{top:5}}> 
                <DatePicker
                  style={{width: 200,right:22}}
                  mode="date"
                  placeholder="Leave From"
                  format="YYYY-MM-DD"
                  minDate={new Date()}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      marginLeft: 30
                    },
                    dateInput: {
                      top:0,
                      marginLeft: 76
                    }
                  }}
                  onDateChange={(date) => {this.setState({date: date})}}
                />
                <DatePicker
                  style={{width: 200,right:22}}
                  mode="date"
                  placeholder="Leave End"
                  format="YYYY-MM-DD"
                  minDate={new Date()}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      marginLeft: 30,
                      marginBottom:20
                    },
                    dateInput: {
                      top:0,
                      marginLeft: 76,
                    }
                  }}
                  onDateChange={(date) => {this.setState({date: date})}}
                />
              </View>
              <Button
                containerStyle={styles.login_botton}
                style={styles.button_style}> Send Leave Request </Button>
          </View>
        );
    }
}
const styles = StyleSheet.create({
 login_botton:{
    top:10,
    margin: 10,
    padding:10,
    height:45,
    width:320,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#2196F3',
  },
  button_style:{
    fontSize: 15,
    color: 'white',
  },
  text_input:{
    width:320,
    height:50,
    left:10,
    bottom:5
  }
});
