import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail,Header, Title, Button, Icon, Text} from 'native-base';
import Healper from './Healper.js'


export default class LeaveList extends Component {

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
                    renderRow={(approved) =>
                      <ListItem button onPress={() => this._navigate('LeaveDetail',approved.id)}>
                        <Thumbnail square size={50} source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} />
                        <Text>{approved.leave_type}</Text>
                        <Text>{approved.reason}</Text>
                        <Text style={{fontSize:12}}>{Healper.dateFormat(approved.updated_at)}</Text>
                      </ListItem>
                    }>
              </List>
          </Content> : <Content><Text>No Request Available.</Text></Content>}
        </Container>
        );
    }
}
