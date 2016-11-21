import React,{Component} from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

import DatePicker from 'react-native-datepicker'
import FloatingLabel from 'react-native-floating-labels';
const Item = Picker.Item;


export default class RequestLeave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }
    _navigate(name) {
      this.props.navigator.push({
        name: name,
        passProps: {
          name: name
        }
      })
    }
   render() {
        return (
          <Container>
                <Content>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="Send to" placeholder="Amit Patel" />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup >
                                <Input stackedLabel label="Leave Resaon" />
                            </InputGroup>
                        </ListItem>

                        <ListItem iconLeft>
                            <Icon name="md-list-box" style={{ color: '#0A69FE' }} />
                            <Text>Leave Type</Text>
                            <Picker
                              iosHeader="Select one"
                              mode="dropdown"
                              selectedValue={this.state.selected1}
                              onValueChange={this.onValueChange.bind(this)} >

                                <Item label="Medical" value="key1" />
                                <Item label="Personal" value="key2" />
                                <Item label="Marriage" value="key1" />
                                <Item label="Govement" value="key2" />
                                <Item label="Work from Home" value="key1" />
                            </Picker>
                        </ListItem>
                        <ListItem >
                         <Text>From</Text>
                          <DatePicker
                            style={{width: 150,left:22}}
                            date={new Date()}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate={new Date()}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                              dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                marginLeft: 0
                              },
                              dateInput: {
                                marginLeft: 36
                              }
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                          />
                        </ListItem>
                        <ListItem>
                           <Text>End</Text>
                            <DatePicker
                              style={{width: 150,left:28}}
                              date={new Date()}
                              mode="date"
                              placeholder="select date"
                              format="YYYY-MM-DD"
                              minDate={new Date()}
                              confirmBtnText="Confirm"
                              cancelBtnText="Cancel"
                              customStyles={{
                                dateIcon: {
                                  position: 'absolute',
                                  left: 0,
                                  top: 0,
                                  marginLeft: 0
                                },
                                dateInput: {
                                  marginLeft: 36
                                }
                              }}
                              onDateChange={(date) => {this.setState({date: date})}}
                            />
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup >
                                <Input multiline={true} stackedLabel label="Description" />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        Send Leave Request
                    </Button>
                </Content>
            </Container>
        );
    }
}
