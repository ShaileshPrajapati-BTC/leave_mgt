import React,{Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Button from 'react-native-button';


import {
  Text,View, StyleSheet, ToolbarAndroid,Image,
  TouchableHighlight,ScrollView,Navigator,StatusBar
} from 'react-native';


export default class QrScan extends Component {

  _navigate(name) {
    this.props.navigator.push({
      name: name,
      passProps: {
        pin: true
      }
    });
  }
  render() {

      return (
        <View style={{flex: 1}}>
          <View style={{backgroundColor: '#ff6f00',elevation: 3,borderTopWidth:0.2}} >
            <ToolbarAndroid
              title="V-Wallet"
              titleColor="white"
            >
              <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
              </View>
            </ToolbarAndroid>
          </View>
          <StatusBar
           backgroundColor="#ff6f00"
           barStyle="light-content"
          />
          <View style={styles.card_container}>
            <Image source={require(`../../images/qrcode.png`)} style={{marginTop:200,marginBottom:30,width:130,height:130 }}/>
            <Button
              containerStyle={styles.login_botton}
              style={styles.button_style}
              onPress={ () => this._navigate('Home')}
            >
              Done
            </Button>            
          </View>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  card_container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_botton:{
    margin: 10,
    padding:10,
    height:45,
    width:320,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#ff6f00',
  },
  button_style:{
    fontSize: 15,
    color: 'white'
  }
});