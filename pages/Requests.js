import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail,Header, Title, Button, Icon, Text, Badge} from 'native-base';


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

    changeStatusColor(status)
    {
      if(status=='approved')
        return '#4CAF50';
      else if(status=='pendding')
        return '#FFEB3B'
      else if(status=='rejected')
        return '#D32F2F'
    }

    render() {
      return(
            <Container>
            {this.props.data ? <Content>
              <List dataArray={this.props.data}
                    renderRow={(Request) =>
                      <ListItem button onPress={() => this._navigate('LeaveDetail',Request.id)}>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>{Request.username}</Text>
                        <Text >{Request.reason}</Text>
                        <Badge style={{ backgroundColor: this.changeStatusColor(Request.sign_off_status) }}>{Request.sign_off_status}</Badge>
                      </ListItem>
                    }>
              </List>
          </Content> : <Content style={{top:100,left:70}}><Text>No Leave Request Available.</Text></Content>}
        </Container>
        );
    }
}
