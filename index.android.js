
 import React, { Component } from 'react';
 import Login from './pages/login.js'
 import Home from './pages/home.js';
 import Shopping from './pages/sports/shopping.js';
 import Sports from './pages/sports.js'
 import Service1 from './pages/vas/service1.js'
 import Drawer from 'react-native-drawer'
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Navigator
 } from 'react-native';

export default class HPSReactNative extends Component {
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
  }

  render() {
    return (
      <Navigator
        	style={{ flex:1 }}
          initialRoute={{ name: 'Login' }}
          renderScene={ this.renderScene } />
    );
  }
}

AppRegistry.registerComponent('HPSReactNative', () => HPSReactNative);
