import React,{Component} from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,StyleSheet,
} from 'react-native';
import PopupDialog, {
  DefaultAnimation
} from 'react-native-popup-dialog';
import Button from 'react-native-button';

const defaultAnimation = new DefaultAnimation({ animationDuration: 150 });

export default class Card extends Component {
    constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
    };

    this.openDefaultAnimationDialog = this.openDefaultAnimationDialog.bind(this);
    }
    openDefaultAnimationDialog() {
    this.defaultAnimationDialog.openDialog();
    }
    render() {
        return (
          <View style={{flex: 1}}>
            <View style={styles.user_container}>
              <View style={styles.container}>
                <Image source={require('../images/userphoto.png')} style={{width: 50, height: 50}}/>
              </View>
              <View style={styles.container}>
                <Text style={{fontSize: 20, color: '#ff6f00'}}>John Smith</Text>
                <Text style={{color:'#9E9E9E', fontWeight:'bold'}}>Member since:4th June 2016</Text>
              </View>
            </View>
            <View style={styles.user_container}>
              <View style={{borderWidth:1, flex:0.5,borderColor:'#9E9E9E'}}>
                <Text style={{padding:20}}>Window 1</Text>
              </View>
              <View style={{borderWidth:1, flex:0.5,borderColor:'#9E9E9E'}}>
                <Text style={{padding:20, left:50}}>Window 2</Text>
              </View>
            </View>
            <View style={styles.card_container}>
              <TouchableOpacity onPress={ () => this.openDefaultAnimationDialog() }>
                <Image source={require('../images/emptywallet.gif')} style={{marginTop:60, marginBottom:100,width:130,height:120}}/>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom_container}>
              <View style={{borderWidth:1, flex:0.5,borderColor:'#9E9E9E'}}>
                <Text style={{padding:20}}>Window 3</Text>
              </View>
              <View style={{borderWidth:1, flex:0.5,borderColor:'#9E9E9E'}}>
                <Text style={{padding:20, left:50}}>Window 4</Text>
              </View>
            </View>
            <PopupDialog
              ref={(defaultAnimationDialog) => {
                this.defaultAnimationDialog = defaultAnimationDialog;
              }}
              dialogAnimation={defaultAnimation}
              title="Please Add Your Card"
              width={320}
              height={320}
              dialogStyle = {{marginBottom:150,borderRadius:0}}
            >
            <View style={styles.dialogContentView}>
              <View style={styles.card_container}>
                <Image source={require('../images/emptywallet.gif')} style={{width:70,height:70}}/>
                <Button
                  containerStyle={styles.login_botton}
                  style={styles.button_style}
                >
                Scan QR code
                </Button>
                <Button
                  containerStyle={[styles.login_botton,{backgroundColor: '#616161'}]}
                  style={styles.button_style}
                >
                Enter pin
                </Button>
                <Button
                  containerStyle={[styles.login_botton,{height:45,width:100,left:100}]}
                  style={styles.button_style}
                  onPress={ () => this.defaultAnimationDialog.closeDialog()}
                >
                Cancel
                </Button>
              </View>
            </View>
           </PopupDialog>
          </View>
        );
    }
}
const styles = StyleSheet.create({
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
