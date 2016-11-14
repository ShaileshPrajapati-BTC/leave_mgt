import React,{Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import sports_styles from '../styles/sports_styles';

export default class Emergency extends Component {
  _navigate(name) {
    this.props.navigator.push({
      name: name,
      passProps: {
        name: name
      }
    })
  }

  render() {
    return (
      <View style = {{flex: 1}}>
        <Text>Emergency</Text>
      </View>
    );
  }
}
