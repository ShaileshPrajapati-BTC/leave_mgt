import React,{Component} from 'react';

import { Container, Icon, Content, List, ListItem,
         Thumbnail, Text, Spinner, Button, InputGroup,Input
       } from 'native-base';

import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import Swipeout from 'react-native-swipeout';
import ActionButton from 'react-native-action-button';
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';

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

export default class LeaveType extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results:{ 
        leave_types:[]
      },
      leave_name:'',
      leave_desc:''
    };
    this.openDefaultAnimationDialog = this.openDefaultAnimationDialog.bind(this);
  }

  componentWillMount () {
    this.getLeaveType();
  }

  async addLeaveType(){
    let response = await fetch('https://lms-api.herokuapp.com/leave_types', {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        leave_type:{
        name: this.state.leave_name,
        descripton: this.state.leave_desc
      }
      })
     });
   let res = await response.text();
   this.getLeaveType();
   this.defaultAnimationDialog.closeDialog();
  }

  openDefaultAnimationDialog() {
    this.defaultAnimationDialog.openDialog();
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
            <View >
              <ScrollView tabLabel="md-time">
                <Container>
                    <Content>
                        {(this.state.loading)? <Spinner/> : <List dataArray={this.state.results}
                                              renderRow={(leave_type) =>
                                                <Swipeout right={swipeoutBtns} backgroundColor='white'>
                                                  <ListItem>
                                                    <Thumbnail/>
                                                     <Text >{leave_type.name}</Text>
                                <Text note>{leave_type.descripton}</Text>
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
                onPress={ () => this.openDefaultAnimationDialog()}
              />

              <PopupDialog
                ref={(defaultAnimationDialog) => {
                  this.defaultAnimationDialog = defaultAnimationDialog;
                }}
                dialogAnimation={slideAnimation}
                title="Add New Type"
                width={320}
                height={320}
                dialogStyle = {{marginBottom:250,borderRadius:0}}
              >
              <Container>
                <Content>
                  <List>
                    <ListItem>
                        <InputGroup >
                            <Input stackedLabel label="Leave Type" onChangeText={(text) => {this.setState({leave_name: text})}} />
                        </InputGroup>
                    </ListItem>
                
                    <ListItem>
                        <InputGroup >
                            <Input stackedLabel label="Descripton" onChangeText={(text) => {this.setState({leave_desc: text})}} />
                        </InputGroup>
                    </ListItem>
                  </List>
                  <Button onPress={ () => this.addLeaveType()} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
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