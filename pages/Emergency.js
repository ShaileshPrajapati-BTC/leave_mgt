import React,{Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,StyleSheet
} from 'react-native';
import sports_styles from '../styles/sports_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import PopupDialog, {
  DefaultAnimation
} from 'react-native-popup-dialog';
import Button from 'react-native-button';
export default class Emergency extends Component {
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
      <View style = {{flex: 1}}>
         <View style={{padding: 10,flexDirection: 'row',alignItems: 'center'}}>
            <Image source={require(`../images/kamo_card.png`)} style={styles.photo} />
          <View style={{flexDirection: 'column',alignItems: 'center',left:20}}>
            <View style={{flex:1,flexDirection: 'column',alignItems: 'flex-start'}}>
              <Text >
                Santosh Sharma
              </Text>
              <Text >
                Sr.Developer
              </Text>
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center',marginLeft:10}}>
              <Text style={styles.text}>
                03/11/2016
              </Text>
              <Text style={[styles.text,{marginLeft: 10}]}>
                16/11/2016
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'column',alignItems: 'center',bottom:8,left:40}}> 
            <Text >
              Amit Patel
            </Text>
            <Icon name="md-thermometer" size={25} color="red" style={{height:25,width:25}} /> 
          </View>
        </View>

        <View style={{height:1,backgroundColor:'grey'}}/>

        <View style={{padding: 10,flexDirection: 'row',alignItems: 'center'}}>
            <Image source={require(`../images/kamo_card.png`)} style={styles.photo} />

          <View style={{flexDirection: 'column',alignItems: 'center',left:20}}>
            <View style={{flex:1,flexDirection: 'column',alignItems: 'flex-start'}}>
              <Text >
                Santosh Sharma
              </Text>
              <Text >
                Sr.Developer
              </Text>
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center',marginLeft:10}}>
              <Text style={styles.text}>
                03/11/2016
              </Text>
              <Text style={[styles.text,{marginLeft: 10}]}>
                16/11/2016
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'column',alignItems: 'center',bottom:8,left:40}}> 
            <Text >
              Amit Patel
            </Text>
            <Icon name="md-thermometer" size={25} color="red" style={{height:25,width:25}} /> 
          </View>
        </View>

        <View style={{height:1,backgroundColor:'grey'}}/>

        <View style={{padding: 10,flexDirection: 'row',alignItems: 'center'}}>
            <Image source={require(`../images/kamo_card.png`)} style={styles.photo} />

          <View style={{flexDirection: 'column',alignItems: 'center',left:20}}>
            <View style={{flex:1,flexDirection: 'column',alignItems: 'flex-start'}}>
              <Text >
                Santosh Sharma
              </Text>
              <Text >
                Sr.Developer
              </Text>
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center',marginLeft:10}}>
              <Text style={styles.text}>
                03/11/2016
              </Text>
              <Text style={[styles.text,{marginLeft: 10}]}>
                16/11/2016
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'column',alignItems: 'center',bottom:8,left:40}}> 
            <Text >
              Amit Patel
            </Text>
            <Icon name="md-thermometer" size={25} color="red" style={{height:25,width:25}} /> 
          </View>
        </View>

        <View style={{height:1,backgroundColor:'grey'}}/>

        <View style={{padding: 10,flexDirection: 'row',alignItems: 'center'}}>
            <Image source={require(`../images/kamo_card.png`)} style={styles.photo} />

          <View style={{flexDirection: 'column',alignItems: 'center',left:20}}>
            <View style={{flex:1,flexDirection: 'column',alignItems: 'flex-start'}}>
              <Text >
                Santosh Sharma
              </Text>
              <Text >
                Sr.Developer
              </Text>
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center',marginLeft:10}}>
              <Text style={styles.text}>
                03/11/2016
              </Text>
              <Text style={[styles.text,{marginLeft: 10}]}>
                16/11/2016
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'column',alignItems: 'center',bottom:8,left:40}}> 
            <Text >
              Amit Patel
            </Text>
            <Icon name="md-thermometer" size={25} color="red" style={{height:25,width:25}} /> 
          </View>
        </View>
        <View style={{height:1,backgroundColor:'grey'}}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#FAFAFA'
  },
  text: {
    marginLeft: 2,
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius:30
  },
  user_container:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  container:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:10,
  },
  map_container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    top:100
  },
  card_container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_container:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
   dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   login_botton:{
    margin: 10,
    padding:10,
    height:45,
    width:300,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#ff6f00',
  },
  cancel_botton:{
    height:30,
    width:100,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#ff6f00',
  },
  button_style:{
    fontSize: 15,
    color: 'white'
  }
});
