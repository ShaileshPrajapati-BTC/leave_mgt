import React,{Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Button from 'react-native-button';


import {
  Text,View, StyleSheet, ToolbarAndroid,Image,
  TouchableHighlight,ScrollView,Navigator,StatusBar
} from 'react-native';


export default class Qr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: require(`../../images/qrcode.png`),
      height: 130,
      width: 130
    };
    }
  _navigate(name) {

    this.setState({
      image:require(`../../images/qr_code.gif`),
      height: 180,
      width: 180
    })
    setTimeout(() => {
      this.props.navigator.push({
        name: name,
        passProps: {
          pin: true
        }
      })
    }, 1500);
      
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
            <Image source={this.state.image} style={{marginTop:200,marginBottom:30,width:this.state.width,height:this.state.height
            }}/>
            <Button
              containerStyle={styles.login_botton}
              style={styles.button_style}
              onPress={ () => this._navigate('Home')}
            >
              Scan
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