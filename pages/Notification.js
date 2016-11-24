import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail,Header, Title, Button, Icon} from 'native-base';

import {
  Text,
  View,
  Image,StatusBar,ToolbarAndroid,
  TouchableOpacity,StyleSheet,BackAndroid
} from 'react-native';

export default class Notification extends Component {
    _navigate(name) {
      this.props.navigator.push({
        name: name,
        passProps: {
          name: name
        }
      })
    }
    render() {
      return(
        <Container>
          <Header backgroundColor="#2196F3">
               <Button transparent onPress={() => {this.props.navigator.pop()}}>
                   <Icon name='ios-arrow-back' />
               </Button>
               <Title>Notification</Title>
          </Header>
          <StatusBar
            backgroundColor="#2196F3"
            barStyle="light-content"
          />
          <Content>

          </Content>
       </Container>
        );
    }
}
