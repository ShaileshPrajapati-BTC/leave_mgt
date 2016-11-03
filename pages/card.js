import React,{Component} from 'react';

import {
  Text,
  View,
  Image,
  TouchableHighlight,StyleSheet,
} from 'react-native';

export default class Card extends Component {

    render() {
        return (
          <View style={{flex: 1}}>
            <View style={styles.user_container}>
              <View style={styles.container}>
                <Image source={require('../images/account.png')} />
              </View>
              <View style={styles.container}>
                <Text style={{fontSize: 20, color: '#ff6f00'}}>John Smith</Text>
                <Text style={{color:'#9E9E9E', fontWeight:'bold'}}>Member since:4th June 2016</Text>
              </View>
            </View>
            <View style={styles.user_container}>
              <View style={{borderWidth:1, flex:0.5,borderColor:'#9E9E9E'}}>
                <Text style={{padding:20}}>Window 1</Text>
              </View>
              <View style={{borderWidth:1, flex:0.5,borderColor:'#9E9E9E'}}>
                <Text style={{padding:20, left:50}}>Window 2</Text>
              </View>
            </View>
            <View style={styles.card_container}>
              <Image source={require('../images/popupwallet.png')} style={{marginTop:80, marginBottom:100,width:130,height:100}}/>
            </View>
            <View style={styles.bottom_container}>
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
const styles = StyleSheet.create({
  user_container:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  container:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:10,
  },
  map_container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    top:100
  },
  card_container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_container:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
});
