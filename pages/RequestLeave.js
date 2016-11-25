import React,{Component} from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Button,Picker } from 'native-base';
import {AsyncStorage,ToastAndroid} from 'react-native';
import DatePicker from 'react-native-datepicker'
import FloatingLabel from 'react-native-floating-labels';
const Item = Picker.Item;


export default class RequestLeave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected1: '1',
            access_token:'',
            selected2: '0',
            send_to:'',
            reason:'',
            from:'',
            end:'',
            results:[],
            user:[]
            
        };
    }

    componentWillMount () {
      this.getToken();
    }

    async getToken(){
       AsyncStorage.getItem('current_user', (err, result) => {
         current_user= JSON.parse(result)

         if (result!=null){
            this.setState({access_token:current_user.user.access_token});
            this.getLeaveType();
            this.getUsers();
         }
       });
    }

    async getLeaveType(){
      this.setState({
        loading: true
      });

      fetch('http://192.168.0.105:3000/sign_off_types.json/?access_token='+this.state.access_token, {method: "GET"})
        .then((response) => response.json())
        .then((responseData) =>
        { 

          this.setState({ results:responseData.sign_off_types, refreshing: false, loading: false});

        })
       .done(() => {

       });
    }

    async getUsers(){
      this.setState({
        loading: true
      });

      fetch('http://192.168.0.105:3000/sign_offs/new.json?access_token='+this.state.access_token, {method: "GET"})
        .then((response) => response.json())
        .then((responseData) =>
        { 

          this.setState({ user:responseData.users, refreshing: false, loading: false});

        })
       .done(() => {

       });
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
           requestee_ids: '2',
           sign_off_type_id: '1',
           half_full_leave:'half',
           date_from:this.state.from,
           date_to:this.state.end,
           reason:this.state.reason,
         },
         'access_token': this.state.access_token,
       })
      });
    ToastAndroid.show('Leave Request Sent Successfully',ToastAndroid.LONG,ToastAndroid.CENTER,)
    }



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
                            <Icon name="md-list-box" style={{ color: '#0A69FE' }} />
                            <Text>Send to</Text>
                            <Picker
                              iosHeader="Select one"
                              mode="dropdown"
                              selectedValue={this.state.selected1}
                              onValueChange={this.onValueChange.bind(this)} >
                              {this.state.user.map((l,i) => {return <Item value={l.id} label={l.email} key={i}  /> })}
                            </Picker>
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
                              {this.state.results.map((l,i) => {return <Item value={l.id} label={l.sign_off_type_name} key={i}  /> })}
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
