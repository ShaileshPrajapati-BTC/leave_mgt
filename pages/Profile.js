import React,{Component} from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import Tabbar from './LeavesTab.js';
import DrawerBar from './drawer.js'

import login_styles from '../styles/login_styles';

import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,StyleSheet
} from 'react-native';

export default class Profile extends Component {
  _navigate(name, index) {
    this.props.navigator.push({
      name: name,
      passProps: {
        index: index
      }
    })
  }
  render_view() {
    return(
      <View style={{flex: 1}} > 
      <View >
      
        <View style={{justifyContent:'center',opacity: 1}}>
          <Image source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} style={{width: 360, height: 280}}>
            <TouchableOpacity onPress={() => this.back()}>
              <Icon name="arrow-left" size={15} color="#2196F3" style={{height:25,width:30}} />   
            </TouchableOpacity>
            <Text style ={{backgroundColor: 'transparent',paddingTop: 220,textAlign:'left',fontSize: 25,fontWeight: 'bold',color: 'white'}}>Shailesh</Text> 
          </Image> 

        </View>

     </View>
          <ActionButton buttonColor="rgba(231,76,60,1)" spacing={5} offsetY={0.20} offsetX={5} degrees={90} icon={<Icon name="md-more" style={styles.actionButtonIcon} />}>
            <ActionButton.Item buttonColor='#9b59b6' title="Leave Balance: 10" onPress={() => console.log("notes tapped!")}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Leave Requests: 1" onPress={() => {}}>
              <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="Taken Leave: 5" onPress={() => {}}>
              <Icon name="md-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton> 
    </View>
    );
  }

  render() {
    return (
      <DrawerBar data={this.render_view()} navigator={this.props.navigator}/>
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