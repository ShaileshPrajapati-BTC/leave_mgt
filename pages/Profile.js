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
  render() {
    return(
      <View style={{flex: 1}} > 
          <View style={{backgroundColor: '#2196F3',elevation: 3,borderTopColor:'black',borderTopWidth:0.2}} >
              <Icon.ToolbarAndroid
                navIconName={'md-arrow-back'}
                title="Shailesh Prajapati"
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

      
        <View style={{justifyContent:'center',opacity: 1}}>
          <Image source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg' }} style={{width: 360, height: 280}}>
            <Text style ={{backgroundColor: 'transparent',paddingTop: 220,textAlign:'left',fontSize: 25,fontWeight: 'bold',color: 'white'}}>Shailesh</Text> 
          </Image> 
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={{flexDirection:'column',left:20,top:15}}>          
            <Text style ={{backgroundColor: 'transparent',fontSize: 16,fontWeight: 'bold'}}>Joining Date :</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 16,fontWeight: 'bold'}}>Probation Period :</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 16,fontWeight: 'bold'}}>Confirmation Status :</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 16,fontWeight: 'bold'}}>Skills :</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 16,fontWeight: 'bold'}}>Experience :</Text> 
          </View>
          <View style={{flexDirection:'column',left:25,top:15}}>          
            <Text style ={{backgroundColor: 'transparent',fontSize: 14}}>20 Nov 2017</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 14}}>3 Month</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 14}}>Confirm</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 14}}>Rails, Rubby, React</Text> 
            <Text style ={{backgroundColor: 'transparent',fontSize: 14}}>1 year</Text> 
          </View>
        </View>

          <ActionButton buttonColor="#3498db" spacing={5} offsetY={0.20} offsetX={5} degrees={90} icon={<Icon name="md-more" style={styles.actionButtonIcon} />}>
            <ActionButton.Item buttonColor='#9b59b6' title="Leave Balance: 10" onPress={() => console.log("notes tapped!")}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Leave Requests: 1" onPress={() => {}}>
              <Icon name="md-notifications" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="Taken Leave: 5" onPress={() => {}}>
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