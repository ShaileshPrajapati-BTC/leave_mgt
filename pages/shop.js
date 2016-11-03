import React,{Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,StyleSheet
} from 'react-native';

export default class Map extends Component {

    render() {
        return (
          <View style={{ flex: 1}}>
            <View style={styles.raw_container}>
              <View style={styles.col_container}>
                <Image source={require('../images/account.png')} />
              </View>
              <View style={styles.col_container}>
                <Text style={{fontSize: 20, color: '#ff6f00'}}>John Smith</Text>
                <Text style={{color:'#9E9E9E', fontWeight:'bold'}}>Member since:4th June 2016</Text>
              </View>
            </View>
            <View style={styles.text_container}>
              <Text style={{color: '#ff6f00', fontSize:30}}>Shop</Text>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  raw_container:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  col_container:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:10,
  },
  text_container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    top:100
  }
});