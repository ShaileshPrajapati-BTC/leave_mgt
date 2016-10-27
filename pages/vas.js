import React,{Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class Sports extends Component {

  _navigate(name) {
  this.props.navigator.push({
    name: 'Service1',
    passProps: {
      name: name
    }
  })
}


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
            }}>
              <Text style={{fontSize:20, color:'#9E9E9E', fontWeight:'bold'}}>Value Added Services(VAS)</Text>
            </View>
            <View style={{height: 1, backgroundColor:'#9E9E9E'}}/>
            
          </View>
        );
    }
}
