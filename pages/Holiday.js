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
import Swipeout from 'react-native-swipeout';

const defaultAnimation = new DefaultAnimation({ animationDuration: 150 });

var swipeoutBtns = [
  {
    text: 'Button',
    component: <View style={{flexDirection: 'row',justifyContent:'center',alignItems: 'center',left:10,width:60,top:15}}> 
                  <Icon name="md-create" size={25} color="#2196F3" style={{height:25,width:25}} /> 
                  <Icon name="ios-trash" size={25} color="red" style={{height:25,width:25,left:10}} /> 
                </View>
  }
]
export default class Holiday extends Component {
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

            <Swipeout right={swipeoutBtns}>
              <View style={{padding: 10,flexDirection: 'row',alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'column',alignItems: 'flex-start',width:250}}>
                  <View style={{flexDirection: 'column',alignItems: 'flex-start'}}>
                    <Text style={{fontSize:18}}>
                      Diwali
                    </Text>
                    <Text style={{left:10}}>
                      10 Nov. 2017
                    </Text>
                  </View>
                </View>
              </View>
            </Swipeout>

            <Swipeout right={swipeoutBtns}>
              <View style={{padding: 10,flexDirection: 'row',alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'column',alignItems: 'flex-start',width:250}}>
                  <View style={{flexDirection: 'column',alignItems: 'flex-start'}}>
                    <Text style={{fontSize:18}}>
                      Diwali
                    </Text>
                    <Text style={{left:10}}>
                      10 Nov. 2017
                    </Text>
                  </View>
                </View>
              </View>
            </Swipeout>
            <Swipeout right={swipeoutBtns}>
              <View style={{padding: 10,flexDirection: 'row',alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'column',alignItems: 'flex-start',width:250}}>
                  <View style={{flexDirection: 'column',alignItems: 'flex-start'}}>
                    <Text style={{fontSize:18}}>
                      Diwali
                    </Text>
                    <Text style={{left:10}}>
                      10 Nov. 2017
                    </Text>
                  </View>
                </View>
              </View>
            </Swipeout>

            <Swipeout right={swipeoutBtns}>
              <View style={{padding: 10,flexDirection: 'row',alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'column',alignItems: 'flex-start',width:250}}>
                  <View style={{flexDirection: 'column',alignItems: 'flex-start'}}>
                    <Text style={{fontSize:18}}>
                      Diwali
                    </Text>
                    <Text style={{left:10}}>
                      10 Nov. 2017
                    </Text>
                  </View>
                </View>
              </View>
            </Swipeout>

            <Swipeout right={swipeoutBtns}>
              <View style={{padding: 10,flexDirection: 'row',alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'column',alignItems: 'flex-start',width:250}}>
                  <View style={{flexDirection: 'column',alignItems: 'flex-start'}}>
                    <Text style={{fontSize:18}}>
                      Diwali
                    </Text>
                    <Text style={{left:10}}>
                      10 Nov. 2017
                    </Text>
                  </View>
                </View>
              </View>
            </Swipeout>

            <Swipeout right={swipeoutBtns}>
              <View style={{padding: 10,flexDirection: 'row',alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'column',alignItems: 'flex-start',width:250}}>
                  <View style={{flexDirection: 'column',alignItems: 'flex-start'}}>
                    <Text style={{fontSize:18}}>
                      Diwali
                    </Text>
                    <Text style={{left:10}}>
                      10 Nov. 2017
                    </Text>
                  </View>
                </View>
              </View>
            </Swipeout>

            <Swipeout right={swipeoutBtns}>
              <View style={{padding: 10,flexDirection: 'row',alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'column',alignItems: 'flex-start',width:250}}>
                  <View style={{flexDirection: 'column',alignItems: 'flex-start'}}>
                    <Text style={{fontSize:18}}>
                      Diwali
                    </Text>
                    <Text style={{left:10}}>
                      10 Nov. 2017
                    </Text>
                  </View>
                </View>
              </View>
            </Swipeout>

            <Swipeout right={swipeoutBtns}>
              <View style={{padding: 10,flexDirection: 'row',alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'column',alignItems: 'flex-start',width:250}}>
                  <View style={{flexDirection: 'column',alignItems: 'flex-start'}}>
                    <Text style={{fontSize:18}}>
                      Diwali
                    </Text>
                    <Text style={{left:10}}>
                      10 Nov. 2017
                    </Text>
                  </View>
                </View>
              </View>
            </Swipeout>                                    
           
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
