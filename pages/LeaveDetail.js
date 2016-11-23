import React,{Component} from 'react';
import ActionButton from 'react-native-action-button';
import { Header, Title, Button, Icon,Container, Content, List, ListItem, Thumbnail, Text, Badge, Card, CardItem } from 'native-base';

import {

  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,StyleSheet
} from 'react-native';

export default class LeaveDetail extends Component {
  _navigate(name, index) {
    this.props.navigator.push({
      name: name,
      passProps: {
        index: index
      }
    })
  }
  render() {
    return (
        <Container>
             <Content>
               <Header backgroundColor="#2196F3">
                    <Button transparent onPress={() => {this.props.navigator.pop()}}>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    <Title>Leave Details</Title>
                </Header>
                <StatusBar
                 backgroundColor="#2196F3"
                 barStyle="light-content"
                />
                 <List>
                     <ListItem>
                         <Thumbnail circle size={80} source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} />
                         <Text>Shailesh Prajapati</Text>
                         <Text note>RoR Developer</Text>
                     </ListItem>
                    <ListItem>
                      <Text>Date</Text>
                      <Text note>13th Jan to 18th Jan</Text>
                    </ListItem>
                    <ListItem>
                      <Text>Leave Days</Text>
                      <Text note>5 days</Text>
                    </ListItem>
                    <ListItem>
                      <Text>Leave Type</Text>
                      <Text note>Medical</Text>
                    </ListItem>

                </List>
                <Card>
                   <CardItem header>
                       <Text>Description</Text>
                   </CardItem>
                   <CardItem>
                       <Text>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                       </Text>
                   </CardItem>
                  </Card>
             </Content>
         </Container>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
