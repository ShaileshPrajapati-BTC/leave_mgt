import React,{Component} from 'react';
import Button from 'react-native-button';
import Data from './photo/data.js';
import Row from './photo/raw.js';
import Drawer from '../drawer.js'

import {
  Text,View,ListView,ToolbarAndroid,Image,StyleSheet,ScrollView,Navigator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Photo extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  renderScene() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.raw_container}>
          <Image source={require('./images/camera.png')} style={{width: 50, height: 50}}/>
        </View>
        <View>
          <ScrollView>
            <ListView style={styles.container}
              dataSource={this.state.dataSource}
              renderRow={(data) => <Row {...data} />}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
  render() {
    return (
      <Drawer data={this.renderScene()}/>
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
    alignItems: 'center',
  }
});