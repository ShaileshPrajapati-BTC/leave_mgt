import React,{Component} from 'react';
import Button from 'react-native-button';
import Data from './shopping/data.js';
import Row from './shopping/raw.js';

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

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#ff6f00'}} >
          <ToolbarAndroid
            navIcon={require('../../images/reorder-horizontal.png')}
            title="V-Wallet"
            titleColor="white"
          >
            <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
            </View>
          </ToolbarAndroid>
        </View>
        <View style={styles.raw_container}>
          <Image source={require('./images/video.png')} style={{width: 50, height: 50}}/>
        </View>
        <ScrollView style={styles.scrollView} >
          <View style={{flex:1}}>
          <View style={styles.image_container}>
              <Image source={require('./e-learning/video_stream_1.png')} style={{width: 320, height: 150}}/>
          </View>    
          <View style={styles.text_container}>
            <View style={{backgroundColor:"grey",flexDirection:'row',width:320,padding:10}}>
             <Icon name="user" size={20} color="#ff6f00" style={{left:5}} />
             <Text style={{paddingLeft:20,color:"white"}}>Soccer Training Session</Text>
            </View>
            <View style={{backgroundColor:"grey",flexDirection:'row',width:320,padding:10}}>
              <Icon name="heart" size={20} color="#EEEEEE" style={{left:8}} />
              <Text style={{paddingLeft:20,color:"white"}}>888k</Text>
              <Icon name="share-alt" size={20} color="#EEEEEE"  style={{left:10}}/>
              <Text style={{paddingLeft:20,color:"white"}}>Share</Text>
              <Icon name="plus" size={20} color="#EEEEEE" style={{left:12}} />
              <Text style={{paddingLeft:20,color:"white"}}>Add to</Text>
            </View>
            <View style={{backgroundColor:"grey",flexDirection:'row',width:320,padding:10}}>
              <Button
                containerStyle={styles.login_botton}
                style={styles.button_style}
              >
                Pay to Watch
              </Button>
            </View>
          </View>
          <View style={{top:8}}>
            <View style={styles.image_container}>
                <Image source={require('./e-learning/video_stream.png')} style={{width: 320, height: 150}}/>
            </View> 
            <View style={styles.text_container}>
              <View style={{backgroundColor:"grey",flexDirection:'row',width:320,padding:10}}>
               <Icon name="user" size={20} color="#ff6f00" style={{left:5}} />
               <Text style={{paddingLeft:20,color:"white"}}>Soccer Training Session</Text>
              </View>
              <View style={{backgroundColor:"grey",flexDirection:'row',width:320,padding:10}}>
                <Icon name="heart" size={20} color="#EEEEEE" style={{left:8}} />
                <Text style={{paddingLeft:20,color:"white"}}>888k</Text>
                <Icon name="share-alt" size={20} color="#EEEEEE"  style={{left:10}}/>
                <Text style={{paddingLeft:20,color:"white"}}>Share</Text>
                <Icon name="plus" size={20} color="#EEEEEE" style={{left:12}} />
                <Text style={{paddingLeft:20,color:"white"}}>Add to</Text>
              </View>
              <View style={{backgroundColor:"grey",flexDirection:'row',width:320,padding:10}}>
                <Button
                  containerStyle={styles.login_botton}
                  style={styles.button_style}
                >
                  Pay to Watch
                </Button>
              </View>
            </View>
          </View>
          <View style={{top:12}}>
            <View style={styles.image_container}>
                <Image source={require('./e-learning/video_stream.png')} style={{width: 320, height: 150}}/>
            </View> 
            <View style={styles.text_container}>
              <View style={{backgroundColor:"grey",flexDirection:'row',width:320,padding:10}}>
               <Icon name="user" size={20} color="#ff6f00" style={{left:5}} />
               <Text style={{paddingLeft:20,color:"white"}}>Soccer Training Session</Text>
              </View>
              <View style={{backgroundColor:"grey",flexDirection:'row',width:320,padding:10}}>
                <Icon name="heart" size={20} color="#EEEEEE" style={{left:8}} />
                <Text style={{paddingLeft:20,color:"white"}}>888k</Text>
                <Icon name="share-alt" size={20} color="#EEEEEE"  style={{left:10}}/>
                <Text style={{paddingLeft:20,color:"white"}}>Share</Text>
                <Icon name="plus" size={20} color="#EEEEEE" style={{left:12}} />
                <Text style={{paddingLeft:20,color:"white"}}>Add to</Text>
              </View>
              <View style={{backgroundColor:"grey",flexDirection:'row',width:320,padding:10}}>
                <Button
                  containerStyle={styles.login_botton}
                  style={styles.button_style}
                >
                  Pay to Watch
                </Button>
              </View>
            </View>
          </View>
          </View>
        </ScrollView>
      </View>

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
    width:300,
    overflow:'hidden',
    borderColor:'white',
    borderWidth:2,
    borderRadius:4,
    backgroundColor: 'grey',
  },
  scrollView: {
    borderWidth: 5,
    borderColor: 'blue'
  }
});