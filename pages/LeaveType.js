import React,{Component} from 'react';

import { Container, Icon, Content, List, ListItem,
         Thumbnail, Text, Spinner, Button, InputGroup,Input
       } from 'native-base';

import {
  StyleSheet,
  View,
  ScrollView,RefreshControl
} from 'react-native';

export default class LeaveType extends Component {

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
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
                        refreshing: false,
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
                        {(this.state.loading)? <Spinner color='#2196F3'/> :
                                            <List dataArray={this.state.results}
                                               refreshControl={
                                                  <RefreshControl
                                                    refreshing={this.state.refreshing}
                                                    onRefresh={this.getLeaveType.bind(this)}
                                                  />}
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
