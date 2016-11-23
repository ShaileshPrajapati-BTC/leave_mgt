import React,{Component} from 'react';
import ActionButton from 'react-native-action-button';
import { Container, Content, List, ListItem, Thumbnail, Text, Badge, Card, CardItem, Header, Button, Icon, Title } from 'native-base';



export default class Profile extends Component {Header
  _navigate(name, index) {
    this.props.navigator.push({
      name: name,
      passProps: {
        index: index
      }
    })
  }
  render() {
    return(
           <Container>
              <Header backgroundColor="#2196F3">
                <Button transparent onPress={() => this.props.navigator.pop()}>
                    <Icon name='ios-arrow-back' />
                </Button>
                <Title>Shailesh Prajapati</Title>
              </Header>
            <Content>
              <List>
                  <ListItem>
                    <Thumbnail circle size={80} source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} />
                    <Text>Shailesh Prajapati</Text>
                    <Text note>RoR Developer</Text>
                  </ListItem>

                  <ListItem itemDivider>
                    <Text>Leave Details</Text>
                  </ListItem> 

                  <ListItem>
                    <Text>Leave Balance:</Text>
                    <Badge primary>15</Badge>
                  </ListItem>
                  <ListItem>
                    <Text>Leave Requests:</Text>
                    <Badge>1</Badge>
                  </ListItem>
                  <ListItem>
                    <Text >Taken Leave:</Text>
                    <Badge success>6</Badge>
                  </ListItem>

                  <ListItem itemDivider>
                    <Text>Job Description</Text>
                  </ListItem> 

                  <ListItem>
                    <Text>Joining Date: </Text>
                    <Text note>20 Nov 2017</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Skills: </Text>
                    <Text note>Rails, Rubby, React, Node, Amazon</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Experience: </Text>
                    <Text note>4 years</Text>
                  </ListItem>

              </List>
           </Content>
        </Container>
    );
  }
}
