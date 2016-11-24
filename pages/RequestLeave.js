import React,{Component} from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import {AsyncStorage,ToastAndroid} from 'react-native';
import DatePicker from 'react-native-datepicker'
import FloatingLabel from 'react-native-floating-labels';
const Item = Picker.Item;


export default class RequestLeave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected1: '1',
            selected2: '0',
            send_to:'',
            reason:'',
            from:'',
            end:'',
            results: {
                items: [],
            },
        };

    }

    async sendLeaveRequest(){

      let response = await fetch('http://192.168.0.105:3000/sign_offs', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',

       },
       body: JSON.stringify({
         sign_off:{
           requestee_ids: '1',
           sign_off_type_id: '1',
           half_full_leave:'half',
           date_from:this.state.from,
           date_to:this.state.end,
           reason:this.state.reason,
         },
         'access_token': '3fa4c7776cd02d24c5d5ec96e88f2b0e',
       })
      });
    ToastAndroid.show('Leave Request Sent Successfully',ToastAndroid.LONG,ToastAndroid.CENTER,)
    }

    // async getToken(){
    //    let a = ''
    //    AsyncStorage.getItem('current_user', (err, result) => {
    //      current_user= JSON.parse(result)

    //      if (result!=null){
    //        a = current_user.user.access_token
    //      }
    //    });
    //   return a;
    // }

    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }
    onValueChangeDuration(value: string) {
        this.setState({
            selected2: value,
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
                                <Input inlineLabel label="Send to" placeholder="Amit Patel"
                                onChangeText={(text) => {this.setState({send_to: text})}}/>
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup >
                                <Input stackedLabel label="Leave Resaon"
                                onChangeText={(text) => {this.setState({reason: text})}}/>
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

                                <Item label="Medical" value="1" />
                                <Item label="Personal" value="2" />
                                <Item label="Marriage" value="3" />
                                <Item label="Govement" value="4" />
                                <Item label="Work from Home" value="5" />
                            </Picker>
                        </ListItem>
                        <ListItem iconLeft>
                            <Icon name="md-list-box" style={{ color: '#0A69FE' }} />
                            <Text>Leave Duration</Text>
                            <Picker
                              iosHeader="Select one"
                              mode="dropdown"
                              selectedValue={this.state.selected2}
                              onValueChange={this.onValueChangeDuration.bind(this)} >

                                <Item label="Half Day" value="0" />
                                <Item label="Full Day" value="1" />
                                <Item label="Multiple Day" value="2" />
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
                            onDateChange={(date) => {this.setState({from: date})}}
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
                              onDateChange={(date) => {this.setState({end: date})}}
                            />
                        </ListItem>

                        <ListItem>
                            <InputGroup >
                                <Input multiline={true} stackedLabel label="Description"
                                />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                    onPress={() => this.sendLeaveRequest()}>
                        Send Leave Request
                    </Button>
                </Content>
            </Container>
        );
    }
}
