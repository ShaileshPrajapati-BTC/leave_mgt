import React,{Component} from 'react';
import PopupDialog, {
  SlideAnimation
} from 'react-native-popup-dialog';
import DatePicker from 'react-native-datepicker'
import FloatingLabel from 'react-native-floating-labels';
import ActionButton from 'react-native-action-button';
import {
  StyleSheet,
  View,TextInput,
  ScrollView,Navigator
} from 'react-native';
import { Spinner, Container, Icon, Content, List, ListItem, Thumbnail, Text,InputGroup,Button,Input } from 'native-base';
import Swipeout from 'react-native-swipeout';

var swipeoutBtns = [
  {
    text: 'Button',
    component: <ListItem>
                <Icon name="md-create" style={{ color: '#2196F3' }} />
                <Icon name='ios-trash' style={{ color: 'red',left:10}}/>
               </ListItem>
  }
]
const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
export default class Holiday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      date:new Date(),
      h_name: '',
      results:{
        holidays:[]
      }
    };
    this.openDefaultAnimationDialog = this.openDefaultAnimationDialog.bind(this);
 }
 openDefaultAnimationDialog() {
   this.defaultAnimationDialog.openDialog();
 }
 openHolidayDialog() {
   this.holidayDialog.openDialog();
 }
 async addHolidayType(){
  let response = await fetch('https://lms-api.herokuapp.com/holidays', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     holiday:{
       name: this.state.h_name,
       holiday_date: this.state.date
     }
   })
  });
   this.holidayDialog.closeDialog();
   this.getHolidays();
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
          <View>
            <ScrollView tabLabel="md-calendar">
              <Container>
                <Content>
                    {(this.state.loading) ? <Spinner /> : <List dataArray={this.state.results}
                      renderRow={(holidays) =>
                        <Swipeout right={swipeoutBtns} backgroundColor='white'>
                          <ListItem>
                            <Thumbnail/>
                             <Text >{holidays.name}</Text>
                            <Text note>{holidays.holiday_date}</Text>
                          </ListItem>
                        </Swipeout>
                        }>
                    </List>}
                </Content>
              </Container>
            </ScrollView>
            <ActionButton buttonColor="#3498db"
              spacing={5} offsetY={0.20} offsetX={5}
              degrees={90} icon={<Icon name="md-add" style={styles.actionButtonIcon} />}
              onPress={ () => this.openHolidayDialog()}
            />
            <PopupDialog
              ref={(holidayDialog) => {
                this.holidayDialog = holidayDialog;
              }}
              dialogAnimation={slideAnimation}
              title="Add New Holiday"
              width={320}
              height={320}
              dialogStyle = {{marginBottom:250,borderRadius:0}}
            >
                <Container>
                  <Content>
                    <List>
                      <ListItem>
                      <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
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
                              <Input stackedLabel label="Descripton" onChangeText={(text) => {this.setState({h_name: text})}} />
                          </InputGroup>
                      </ListItem>
                    </List>
                    <Button onPress={ () => this.addHolidayType()} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                      Add Leave Type
                    </Button>
                   </Content>
              </Container>
            </PopupDialog>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
