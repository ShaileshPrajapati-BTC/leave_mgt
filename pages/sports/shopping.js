import React,{Component} from 'react';
import Button from 'react-native-button';
import Data from './shopping/data.js';
import Row from './shopping/raw.js';

import {
  Text,View,ListView,ToolbarAndroid,Image,StyleSheet,ScrollView,Navigator
} from 'react-native';


export default class Shopping extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

    render() {
        return (
          <View
              style={{
              flex: 1
            }}>
            <View
              style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image source={require('../../images/account.png')} style={{top:20}}/>
            </View>

            <View>
              <ScrollView>
                <ListView
                  style={styles.container}
                  dataSource={this.state.dataSource}
                  renderRow={(data) => <Row {...data} />}
                />
              </ScrollView>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',

  },
});
