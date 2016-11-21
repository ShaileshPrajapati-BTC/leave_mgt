import React,{Component} from 'react';

import { Container, Icon, Content, List, ListItem, Thumbnail, Text } from 'native-base';

import Swipeout from 'react-native-swipeout';

var swipeoutBtns = [
  {
    text: 'Button',
    component: <ListItem>
                <Icon name="md-create" style={{ color: '#2196F3' }} />
                <Icon name='ios-trash' style={{ color: 'red',left:10}}/>
               </ListItem> 
  }
]


export default class LeaveType extends Component {

    render() {
        return (
          <Container>
                <Content>
                    <List>
                      <Swipeout right={swipeoutBtns} backgroundColor='white'>
                        <ListItem>
                          <Thumbnail/>
                          <Text>Medical Leave</Text>
                          <Text note>Doing what you like will always keep you happy . .</Text>
                        </ListItem>
                      </Swipeout>
                      <Swipeout right={swipeoutBtns} backgroundColor='white'>
                        <ListItem>
                          <Thumbnail/>
                          <Text>Personal Leave</Text>
                          <Text note>Life is one time offer! Use it well</Text>
                        </ListItem>
                      </Swipeout>
                      <Swipeout right={swipeoutBtns} backgroundColor='white'>
                        <ListItem>
                          <Thumbnail/>
                          <Text>Kumar Pratik</Text>
                          <Text note>Doing what you like will always keep you happy . .</Text>
                        </ListItem>
                      </Swipeout>
                      <Swipeout right={swipeoutBtns} backgroundColor='white'>
                        <ListItem>
                          <Thumbnail/>
                          <Text>Marriage Leave</Text>
                          <Text note>Life is one time offer! Use it well</Text>
                        </ListItem>
                      </Swipeout>
                      <Swipeout right={swipeoutBtns} backgroundColor='white'>
                        <ListItem>
                          <Thumbnail/>
                          <Text>Govement Leave</Text>
                          <Text note>Doing what you like will always keep you happy . .</Text>
                        </ListItem>
                      </Swipeout>
                      <Swipeout right={swipeoutBtns} backgroundColor='white'>
                        <ListItem>
                          <Thumbnail/>
                          <Text>Work from Home Leave</Text>
                          <Text note>Life is one time offer! Use it well</Text>
                        </ListItem>
                      </Swipeout>
                      <Swipeout right={swipeoutBtns} backgroundColor='white'>
                        <ListItem>
                          <Thumbnail/>
                          <Text>Kumar Pratik</Text>
                          <Text note>Doing what you like will always keep you happy . .</Text>
                        </ListItem>
                      </Swipeout>
                      <Swipeout right={swipeoutBtns} backgroundColor='white'>
                        <ListItem>
                          <Thumbnail/>
                          <Text>Kumar Sanket</Text>
                          <Text note>Life is one time offer! Use it well</Text>
                        </ListItem>                                            
                      </Swipeout>
                    </List>
                </Content>
            </Container>
        );
    }
}
