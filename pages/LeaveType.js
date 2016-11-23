import React,{Component} from 'react';

import { Container, Icon, Content, List, ListItem,
         Thumbnail, Text, Spinner, Button, InputGroup,Input
       } from 'native-base';

import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

export default class LeaveType extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results:{
        leave_types:[]
      },
    };
  }

  componentWillMount () {
    this.getLeaveType();
  }

  async getLeaveType(){
    this.setState({
      loading: true
    });

    fetch('https://lms-api.herokuapp.com/leave_types.json', {method: "GET"})
     .then((response) => response.json())
     .then((responseData) =>
     {
        this.setState({ results:responseData,
                        loading: false});
     })
     .done(() => {

     });

  }
    render() {
        return (
              <ScrollView tabLabel="md-time">
                <Container>
                    <Content>
                        {(this.state.loading)? <Spinner/> :
                                            <List dataArray={this.state.results}
                                              renderRow={(leave_type) =>
                                                  <ListItem>
                                                    <Thumbnail/>
                                                     <Text >{leave_type.name}</Text>
                                                     <Text note>{leave_type.descripton}</Text>
                                                  </ListItem>
                                                }>
                                            </List>
                        }
                    </Content>
                </Container>
              </ScrollView>
        );
    }
}
