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
            <View style={{top:30}}>
              <Text style={{fontSize:20,color:'#ff6f00'}}> Service 1 </Text>
            </View>
            <View style={{top:200}}>
              <Text style={{fontSize:20,color:'#ff6f00'}}> Search Result </Text>
            </View>
          </View>

        );
    }
}
