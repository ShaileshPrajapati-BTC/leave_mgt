import React,{Component} from 'react';
import {
  StyleSheet,
  View,TextInput,
  ScrollView,Navigator
} from 'react-native';
import { Spinner, Container, Icon, Content, List, ListItem, Thumbnail, Text,InputGroup,Button,Input } from 'native-base';

export default class Holiday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results:{
        holidays:[]
      }
    };
 }

 componentWillMount () {
   this.getHolidays();
 }

 async getHolidays(){
      this.setState({
         loading: true
     });
     fetch('https://lms-api.herokuapp.com/holidays.json', {method: "GET"})
      .then((response) => response.json())
      .then((responseData) =>
      {
         this.setState({ results:responseData, loading: false, refresh: false});
      })
      .catch((error) => {
            this.setState({
                loading: false
            });
            console.error(error);
        });
   }
    render() {
        return (
            <ScrollView tabLabel="md-calendar">
              <Container>
                <Content>
                    {(this.state.loading) ? <Spinner /> : <List dataArray={this.state.results}
                      renderRow={(holidays) =>
                          <ListItem>
                            <Thumbnail/>
                             <Text >{holidays.name}</Text>
                            <Text note>{holidays.holiday_date}</Text>
                          </ListItem>
                        }>
                    </List>}
                </Content>
              </Container>
            </ScrollView>
        );
    }
}
