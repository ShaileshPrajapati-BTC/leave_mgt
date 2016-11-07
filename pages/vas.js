import React,{Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import sports_styles from '../styles/sports_styles';

export default class Sports extends Component {
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

        <View style={sports_styles.row_container}>
          <View style={sports_styles.col_container}>
            <Image source={require('../images/userphoto.png')} style={{width: 50, height: 50}}/>
          </View>
          <View style={sports_styles.col_container}>
            <Text style={{fontSize: 20, color: '#ff6f00'}}>John Smith</Text>
            <Text style={{color:'#9E9E9E', fontWeight:'bold'}}>Member since:4th June 2016</Text>
            <Text style={{fontSize:17,left:20, color:'#9E9E9E', fontWeight:'bold',top:10, marginBottom:30}}>Value Added Services(VAS)</Text>
          </View>

        </View>

        <View style={{height: 1, backgroundColor:'#9E9E9E'}}/>

        <View style={sports_styles.flex_col_container1}>
          <View style={sports_styles.row_space}>
            <View style={sports_styles.flex_col_container}>
              <TouchableOpacity onPress={ () => this._navigate('Service1') }>
                <View >
                  <Image source={require('./vas/images/addmoney.png')} style={{width: 50, height: 50}}/>
                  <Text>Service 1</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={sports_styles.flex_col_container}>
              <TouchableOpacity onPress={ () => this._navigate('Service1') }>
                <View>
                  <Image source={require('./vas/images/mybalance.png')} style={{width: 50, height: 50}}/>
                  <Text >Service 2</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={sports_styles.flex_col_container1}>
          <View style={sports_styles.row_space}>
            <View style={sports_styles.flex_col_container}>
              <TouchableOpacity onPress={ () => this._navigate('Service1') }>
                <View>
                  <Image source={require('./vas/images/topup.png')} style={{width: 50, height: 50}}/>
                  <Text>Service 3</Text>
                </View>
             </TouchableOpacity>
            </View>
            <View style={sports_styles.flex_col_container}>
              <TouchableOpacity onPress={ () => this._navigate('Service1') }>
                <View>
                  <Image source={require('./vas/images/digital.png')} style={{width: 50, height: 50}}/>
                  <Text >Service 4</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={sports_styles.flex_col_container1}>
          <View style={sports_styles.row_space}>
            <View style={sports_styles.flex_col_container}>
            <TouchableOpacity onPress={ () => this._navigate('Service1') }>
              <View>
                <Image source={require('./vas/images/movieticket.png')} style={{width: 50, height: 50}}/>
                <Text >Service 5</Text>
              </View>
            </TouchableOpacity>
            </View>

            <View style={sports_styles.flex_col_container}>
              <TouchableOpacity onPress={ () => this._navigate('Service1') }>
                <View>
                  <Image source={require('./vas/images/sports.png')} style={{width: 50, height: 50}}/>
                  <Text >Service 6</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    );
  }
}
