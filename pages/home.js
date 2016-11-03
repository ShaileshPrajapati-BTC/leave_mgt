import React,{Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Shopping from './sports/shopping.js';
import Vas from './vas.js';
import Card from './card.js'
import Drawer from 'react-native-drawer'
import Menu from './menu.js';
import Sports from './sports.js';
import Map from './map.js';
import Shop from './shop.js';
import Tabbar from './tabbar.js';


import {
  Text,View, StyleSheet, ToolbarAndroid,DrawerLayoutAndroid,
  TouchableHighlight,ScrollView,Navigator
} from 'react-native';


export default class Home extends Component {

  state={
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

    render() {
        return (
          <Drawer
            ref={(ref) => this._drawer = ref}
            type="overlay"
            content={
              <Menu closeDrawer={this.closeDrawer} navigator={this.props.navigator}/>
            }
            acceptTap
            styles={{main: {shadowColor: '#787878', shadowOpacity: 0.8, shadowRadius: 15}}}
            onOpen={() => {
              this.setState({drawerOpen: true})
            }}
            onClose={() => {
              this.setState({drawerOpen: false})
            }}
            captureGestures={false}
            tweenDuration={100}
            panThreshold={0.08}
            disabled={this.state.drawerDisabled}
            openDrawerOffset={(viewport) => {
              return 100
            }}
            closedDrawerOffset={() => 0}
            negotiatePan
            >

          <View style={{flex:1, flexDirection: 'column'}}>
          <View style={{backgroundColor: '#ff6f00'}} >
             <ToolbarAndroid
              navIcon={require('../images/reorder-horizontal.png')}
              title="V-Wallet"
              titleColor="white"
              onIconClicked={() => {this.openDrawer()}}
              >
              <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
              </View>
             </ToolbarAndroid>
          </View>
            <Tabbar />
         </View>
         </Drawer>
        );
    }
}
