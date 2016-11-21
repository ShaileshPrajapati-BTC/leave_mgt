import React,{Component} from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { Container, Content, List, ListItem, Thumbnail, Text, Badge, Card, CardItem } from 'native-base';

import login_styles from '../styles/login_styles';

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
      <View style={{flex: 1}} >
        <View style={{backgroundColor: '#2196F3',elevation: 3,borderTopColor:'black',borderTopWidth:0.2}} >
          <Icon.ToolbarAndroid
            navIconName={'md-arrow-back'}
            title="Leave Detail"
            titleColor="white"
            onIconClicked={() => {this.props.navigator.pop()}}
          >
            <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
            </View>
          </Icon.ToolbarAndroid>
        </View>
        <StatusBar
         backgroundColor="#2196F3"
         barStyle="light-content"
        />

        <Container>
             <Content>
                 <List>
                     <ListItem>
                         <Thumbnail circle size={80} source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} />
                         <Text>Shailesh Prajapati</Text>
                         <Text note>RoR Developer</Text>
                     </ListItem>
                     <ListItem>
                        <Text>Leave Balance:</Text>
                        <Badge>15</Badge>
                    </ListItem>
                    <ListItem>
                      <Text>Team Lead</Text>
                      <Text note>Jay Pandya</Text>
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

        <ActionButton buttonColor="#3498db" spacing={5} offsetY={0.20} offsetX={5} degrees={90} icon={<Icon name="md-more" style={styles.actionButtonIcon} />}>
          <ActionButton.Item buttonColor='rgba(231,76,60,1)' title="Reject Leave" onPress={() => {}}>
            <Icon name="md-close-circle" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Approve Leave" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    </View>
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
