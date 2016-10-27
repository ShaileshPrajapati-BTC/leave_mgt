import React,{Component} from 'react';

import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class Card extends Component {

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
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <View style={{borderWidth:1, flex:0.5,borderColor:'#9E9E9E'}}>
                <Text style={{padding:20}}>Window 1</Text>
              </View>
              <View style={{borderWidth:1, flex:0.5,borderColor:'#9E9E9E'}}>
                <Text style={{padding:20, left:50}}>Window 2</Text>
              </View>
              </View>

              <View
                style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text>Image Here</Text>
              </View>

              <View
                style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                top:260
              }}>
              <View style={{borderWidth:1, flex:0.5,borderColor:'#9E9E9E'}}>
                <Text style={{padding:20}}>Window 3</Text>
              </View>
              <View style={{borderWidth:1, flex:0.5,borderColor:'#9E9E9E'}}>
                <Text style={{padding:20, left:50}}>Window 4</Text>
              </View>
              </View>

            </View>
        );
    }
}
