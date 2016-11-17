import React,{Component} from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';


import login_styles from '../styles/login_styles';

import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,StyleSheet
} from 'react-native';

export default class LeaveDetail extends Component {
  _navigate(name, index) {
    this.props.navigator.push({
      name: name,
      passProps: {
        index: index
      }
    })
  }
  render() {
    return (
      <View style={{flex: 1}} > 
        <View style={{backgroundColor: '#2196F3',elevation: 3,borderTopColor:'black',borderTopWidth:0.2}} >
          <Icon.ToolbarAndroid
            navIconName={'md-arrow-back'}
            title="Leave Detail"
            titleColor="white"
            onIconClicked={() => {this.props.navigator.pop()}}
          >
            <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
            </View>
          </Icon.ToolbarAndroid>
        </View>
        <StatusBar
         backgroundColor="#2196F3"
         barStyle="light-content"
        />
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} style={{width: 100, height: 100,borderRadius:50,top:8,left:5}}/>
          <View style={{flexDirection:'column',left:20,top:8}}>          
            <Text style ={{backgroundColor: 'transparent',fontSize: 20,fontWeight: 'bold'}}>Shailesh Prajapati</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 15}}>Ror Developer</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 15}}>On Probation</Text> 
          </View>
        </View>
        <View style={{top:10,left:100,height:1,width:280,backgroundColor:'grey'}}/>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={{flexDirection:'column',left:20,top:15}}>          
            <Text style ={{backgroundColor: 'transparent',fontSize: 18,fontWeight: 'bold'}}>Leave Balance :</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 18,fontWeight: 'bold'}}>Team Lead :</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 18,fontWeight: 'bold'}}>Date :</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 18,fontWeight: 'bold'}}>Leave Days :</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 18,fontWeight: 'bold'}}>Leave Type :</Text> 
          </View>
          <View style={{flexDirection:'column',left:25,top:15}}>          
            <Text style ={{backgroundColor: 'transparent',fontSize: 18}}>15</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 18}}>Jay Pandya</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 18}}>11th Jan to 15th Jan</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 18}}>5 days</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 18}}>Medical</Text> 
          </View>
        </View>

        <View style={{top:30,left:50,height:1,width:360,backgroundColor:'grey'}}/>


        <View style={{flexDirection:'column',top:40,paddingLeft:16,paddingRight:10}}>
          <Text style ={{backgroundColor: 'transparent',fontSize: 18,fontWeight: 'bold'}}>Description :</Text>
          <Text> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Text>

        </View>

        <ActionButton buttonColor="#3498db" spacing={5} offsetY={0.20} offsetX={5} degrees={90} icon={<Icon name="md-more" style={styles.actionButtonIcon} />}>
          <ActionButton.Item buttonColor='rgba(231,76,60,1)' title="Reject Leave" onPress={() => {}}>
            <Icon name="md-close-circle" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Approve Leave" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
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