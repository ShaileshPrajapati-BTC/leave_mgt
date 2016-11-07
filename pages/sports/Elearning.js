import React,{Component} from 'react';
import Button from 'react-native-button';
import Data from './shopping/data.js';
import Row from './shopping/raw.js';
import Drawer from '../drawer.js'
import {
  Text,View,ListView,ToolbarAndroid,Image,StyleSheet,ScrollView,Navigator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Elearning extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  renderScene() {
    return (
      <View >
        <View style={styles.raw_container}>
          <Image source={require('./images/video.png')} style={{width: 50, height: 50}}/>
        </View>
        <ScrollView style={styles.scrollView} >
          <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start', alignItems: 'flex-start',height:300,width:400,backgroundColor:'#696969'}}>
            <Image source={require('./e-learning/video_stream_1.png')} style={{width: 350, height: 150}}/>
          <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start'}}>
            <Text style={{color:'white',left:265,top:5}}>999K Views</Text>
            <Image source={require('./e-learning/more.png')} style={{height:20,width:20,top:25,left:250}}/>
            <Image source={require('./e-learning/user_photo_orange.png')} style={{height:30,width:30,right:90,top:10}}/>
            <Text style={{color:'white',right:90,top:15}}>Soccer Training Session</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start'}}>
            <Image source={require('./e-learning/favorite.png')} style={{height:20,width:20,top:20,left:30}}/>
            <Text style={{color:'white',top:20,left:35}}>888K</Text>
            <Image source={require('./e-learning/share.png')} style={{height:20,width:20,top:20,left:45}}/>
            <Text style={{color:'white',top:20,left:50}}>Share</Text>
            <Image source={require('./e-learning/add.png')} style={{height:20,width:20,top:20,left:60}}/>
            <Text style={{color:'white',top:20,left:65}}>Add to</Text>
          </View>
          <View style={{top:50,left:15}}>
            <Button
                containerStyle={styles.login_botton}
                style={styles.button_style}
              >
                Pay to Watch
              </Button>
          </View>
        </View>
        <View style={{margin:3}}></View>
        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start', alignItems: 'flex-start',height:300,width:400,backgroundColor:'#696969'}}>
          <Image source={require('./e-learning/video_stream_1.png')} style={{width: 350, height: 150}}/>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start'}}>
          <Text style={{color:'white',left:265,top:5}}>999K Views</Text>
          <Image source={require('./e-learning/more.png')} style={{height:20,width:20,top:25,left:250}}/>
          <Image source={require('./e-learning/user_photo_orange.png')} style={{height:30,width:30,right:90,top:10}}/>
          <Text style={{color:'white',right:90,top:15}}>Soccer Training Session</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start'}}>
          <Image source={require('./e-learning/favorite.png')} style={{height:20,width:20,top:20,left:30}}/>
          <Text style={{color:'white',top:20,left:35}}>888K</Text>
          <Image source={require('./e-learning/share.png')} style={{height:20,width:20,top:20,left:45}}/>
          <Text style={{color:'white',top:20,left:50}}>Share</Text>
          <Image source={require('./e-learning/add.png')} style={{height:20,width:20,top:20,left:60}}/>
          <Text style={{color:'white',top:20,left:65}}>Add to</Text>
        </View>
        <View style={{top:50,left:15}}>
          <Button
              containerStyle={styles.login_botton}
              style={styles.button_style}
            >
              Pay to Watch
            </Button>
        </View>
      </View>
      <View style={{margin:40}}></View>
        </ScrollView>
      </View>
    );
  }
  render() {
    return (
      <Drawer data={this.renderScene()} navigator={this.props.navigator}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
  },
  raw_container:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image_container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top:30
  },
  text_container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top:30,
  },
  button_style:{
    fontSize: 15,
    color: 'white'
  },
  login_botton:{
    height:30,
    width:320,
    overflow:'hidden',
    borderColor:'white',
    borderWidth:2,
    borderRadius:4,
    backgroundColor: '#696969',
  },
  scrollView: {
    borderWidth: 5,
    borderColor: 'blue'
  }
});
