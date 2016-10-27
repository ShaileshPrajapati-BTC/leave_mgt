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
    name: 'Shopping',
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
              <Text style={{fontSize:20, color:'#9E9E9E', fontWeight:'bold'}}>Sports</Text>
            </View>
            <View style={{height: 1, backgroundColor:'#9E9E9E'}}/>
            <View
              style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
              <View
                style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',

              }}>
              <View
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}>
                <Image source={require('../images/account.png')} style={{left:50,width: 50, height: 50}}/>
                <Text style={{left:60}}>Live</Text>
              </View>
              <View
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}>
                <Image source={require('../images/account.png')} style={{left:50,width: 50, height: 50}}/>
                <Text style={{left:40}}>E-Learning</Text>
              </View>
              </View>

            </View>


            <View
              style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding:20
            }}>
              <View
                style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',

              }}>
              <View
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}>
               <TouchableHighlight onPress={ () => this._navigate('Shopping') }>
                <View>
                  <Image source={require('../images/account.png')} style={{left:30,width: 50, height: 50}}/>
                  <Text style={{left:25}}>Shopping</Text>
                </View>
               </TouchableHighlight>
              </View>
              <View
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}>
                <Image source={require('../images/account.png')} style={{left:50,width: 50, height: 50}}/>
                <Text style={{left:55}}>Event</Text>
              </View>
              </View>

            </View>


            <View
              style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding:20
            }}>
              <View
                style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',

              }}>
              <View
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}>
                <Image source={require('../images/account.png')} style={{left:30,width: 50, height: 50}}/>
                <Text style={{left:20}}>Community</Text>
              </View>
              <View
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}>
                <Image source={require('../images/account.png')} style={{left:50,width: 50, height: 50}}/>
                <Text style={{left:55}}>Photo</Text>
              </View>
              </View>

            </View>
          </View>
        );
    }
}
