import React,{Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,StyleSheet
} from 'react-native';

export default class Cancelled extends Component {

    render() {
        return (
          <View style={{ flex: 1}}>
            <Text>Cancelled</Text>
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
    marginTop:150
  }
});
