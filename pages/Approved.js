import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  Image,
  TouchableOpacity,StyleSheet,BackAndroid
} from 'react-native';
import PopupDialog, {
  DefaultAnimation
} from 'react-native-popup-dialog';
import Button from 'react-native-button';

const defaultAnimation = new DefaultAnimation({ animationDuration: 150 });

export default class Approved extends Component {
    constructor(props) {
    super(props);

    this.state = {
      image: require(`../images/emptywallet.gif`),
      dialogOpen: false,
      margintop:80
    };
    this.openDefaultAnimationDialog = this.openDefaultAnimationDialog.bind(this);
    }
    _navigate(name) {
      this.props.navigator.push({
        name: name,
        passProps: {
          name: name
        }
      })
    }
    componentWillMount(){
      if (this.props.pin){
        this.setState({
          image: require(`../images/kamo_card.png`),
          margintop:0
        });
        BackAndroid.addEventListener('hardwareBackPress', function() {        
            BackAndroid.exitApp(0);
        });
      }
    }
    openDefaultAnimationDialog() {
    this.defaultAnimationDialog.openDialog();
    }
    render() {
        return (
          <View style={{flex: 1}}>
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
                <Icon name="md-checkmark-circle" size={25} color="green" style={{height:25,width:25}} /> 
              </View>
            </View>
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
                <Icon name="md-checkmark-circle" size={25} color="green" style={{height:25,width:25}} /> 
              </View>
            </View>
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
                <Icon name="md-checkmark-circle" size={25} color="green" style={{height:25,width:25}} /> 
              </View>
            </View>
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
                <Icon name="md-checkmark-circle" size={25} color="green" style={{height:25,width:25}} /> 
              </View>
            </View>
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
