import React,{Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class Map extends Component {

    render() {
        return (
          <View
              style={{
              flex: 1
            }}>
            <View
              style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
          <View
            style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding:10,
          }}>
          <Image source={require('../images/account.png')} />
        </View>
              <View
                style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding:10,
              }}>
                <Text style={{fontSize: 20, color: '#ff6f00'}}>John Smith</Text>
                <Text style={{color:'#9E9E9E', fontWeight:'bold'}}>Member since:4th June 2016</Text>
              </View>
            </View>
            <View
              style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding:10,
              top:100
            }}>
            <Text style={{color: '#ff6f00', fontSize:30}}>Shop
            </Text>
            </View>
            </View>
        );
    }
}
