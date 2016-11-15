
 import React, { Component } from 'react';
 import Login from './pages/login.js'
 import Profile from './pages/Profile.js'
 import Home from './pages/home.js';
 import Shopping from './pages/sports/shopping.js';
 import Photo from './pages/sports/photo.js';
 import Live from './pages/sports/live.js';
 import Event from './pages/sports/event.js';
 import Community from './pages/sports/community.js';
 import Elearning from './pages/sports/Elearning.js';
 import Service1 from './pages/vas/service1.js'
 import Drawer from 'react-native-drawer'
 import Qr from './pages/card/qr.js';
 import Pin from './pages/card/pin.js';
 import QrScan from './pages/card/qr_scan.js';
 import Leaves from './pages/Leaves.js';

 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Navigator,BackAndroid
 } from 'react-native';
var navigator;
export default class HPSReactNative extends Component {

  componentWillMount = () => {
    BackAndroid.addEventListener('hardwareBackPress', function() {
     if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
    });
  };

  renderScene(route, navigator) {
  	if(route.name == 'Login') {
    	return <Login navigator={navigator} {...route.passProps}  />
    }
    if(route.name == 'Home') {
    	return <Home navigator={navigator} {...route.passProps}  />
    }
    if(route.name == 'Sports') {
    	return <Sports navigator={navigator} {...route.passProps} route={route}/>
    }
    if(route.name == 'Shopping') {
    	return <Shopping navigator={navigator} {...route.passProps} route={route} />
    }
    if(route.name == 'Service1') {
    	return <Service1 navigator={navigator} {...route.passProps} route={route} />
    }
    if(route.name == 'Photo') {
      return <Photo navigator={navigator} {...route.passProps} route={route} />
    }
    if(route.name == 'Elearning') {
      return <Elearning navigator={navigator} {...route.passProps} route={route} />
    }
    if(route.name == 'Live') {
      return <Live navigator={navigator} {...route.passProps} route={route} />
    }
    if(route.name == 'Event') {
      return <Event navigator={navigator} {...route.passProps} route={route} />
    }
    if(route.name == 'Community') {
      return <Community navigator={navigator} {...route.passProps} route={route} />
    }
    if(route.name == 'Qr') {
      return <Qr navigator={navigator} {...route.passProps} route={route} />
    }
    if(route.name == 'Pin') {
      return <Pin navigator={navigator} {...route.passProps} route={route} />
    }
    if(route.name == 'Leaves') {
      return <Leaves navigator={navigator} {...route.passProps} route={route} />
    }
    if(route.name == 'Profile') {
      return <Profile navigator={navigator} {...route.passProps} route={route} />
    }
  }

  render() {
    return (
      <Navigator
      	style={{ flex:1 }}
        ref={(nav) => { navigator = nav; }}
        initialRoute={{ name: 'Login' }}
        renderScene={ this.renderScene }
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
      />
    );
  }
}

AppRegistry.registerComponent('HPSReactNative', () => HPSReactNative);
