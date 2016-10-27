import React,{Component} from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class Service1 extends Component {

    render() {
        return (
          <View style={{flex:1,
                  flexDirection:'column',
                  justifyContent:'flex-start',
                  alignItems:'center'}}>
            <View>
              <Text> Service 1 </Text>
            </View>
            <View>
              <Text> Search Result </Text>
            </View>
          </View>

        );
    }
}
