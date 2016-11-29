import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail,Header, Title, Button, Icon, Text} from 'native-base';


export default class Pendding extends Component {

    _navigate(name,id) {
      this.props.navigator.push({
        name: name,
        passProps: {
          id: id
        }
      })
    }

    render() {
      return(
            <Container>
            {this.props.data ? <Content>
              <List dataArray={this.props.data}
                    renderRow={(pendding) =>
                      <ListItem button onPress={() => this._navigate('LeaveDetail',pendding.id)}>
                        <Thumbnail square size={50} source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} />
                        <Text>{pendding.leave_type}</Text>
                        <Text note>{pendding.reason}</Text>
                      </ListItem>
                    }>
              </List>
          </Content> : <Content><Text>No Panding Leave Request Available.</Text></Content>}
        </Container>
        );
    }
}
