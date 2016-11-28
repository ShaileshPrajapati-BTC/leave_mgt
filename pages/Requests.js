import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail,Header, Title, Button, Icon, Text} from 'native-base';


export default class Requests extends Component {

    _navigate(name,id) {
      this.props.navigator.push({
        name: name,
        passProps: {
          id: id,
          status:true
        }
      })
    }

    render() {
      return(
            <Container>
            {this.props.data ? <Content>
              <List dataArray={this.props.data}
                    renderRow={(Request) =>
                      <ListItem button onPress={() => this._navigate('LeaveDetail',Request.id)}>
                        <Thumbnail square size={50} source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} />
                        <Text>{Request.leave_type}</Text>
                        <Text note>{Request.reason}</Text>
                      </ListItem>
                    }>
              </List>
          </Content> : <Content style={{top:100,left:70}}><Text>No Leave Request Available.</Text></Content>}
        </Container>
        );
    }
}
