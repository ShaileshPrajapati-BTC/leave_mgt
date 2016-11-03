import React,{Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
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
            <Image source={require('../images/account.png')} />
          </View>
          <View style={sports_styles.col_container}>
            <Text style={{fontSize: 20, color: '#ff6f00'}}>John Smith</Text>
            <Text style={{color:'#9E9E9E', fontWeight:'bold'}}>Member since:4th June 2016</Text>
          </View>
        </View>
        <View style={sports_styles.col_container}>
          <Text style={{fontSize:20, color:'#9E9E9E', fontWeight:'bold'}}>Sports</Text>
        </View>

        <View style={{height: 1, backgroundColor:'#9E9E9E'}}/>

        <View style={sports_styles.flex_col_container}>
          <View style={sports_styles.row_space}>
            <View style={sports_styles.flex_col_container}>
              <TouchableHighlight onPress={ () => this._navigate('Live') }>
                <View >
                  <Image source={require('../images/account.png')} style={{left:10,width: 50, height: 50}}/>
                  <Text >Live</Text>
                </View>
              </TouchableHighlight>
            </View>  
            <View style={sports_styles.flex_col_container}>
              <TouchableHighlight onPress={ () => this._navigate('Elearning') }>
                <View>
                  <Image source={require('../images/account.png')} style={{left:10,width: 50, height: 50}}/>
                  <Text >E-Learning</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>


        <View style={sports_styles.flex_col_container1}>
          <View style={sports_styles.row_space}>
            <View style={sports_styles.flex_col_container}>
              <TouchableHighlight onPress={ () => this._navigate('Shopping') }>
                <View>
                  <Image source={require('../images/account.png')} style={{left:10,width: 50, height: 50}}/>
                  <Text>Shopping</Text>
                </View>
             </TouchableHighlight>
            </View>
            <View style={sports_styles.flex_col_container}>
              <TouchableHighlight onPress={ () => this._navigate('Event') }>
                <View>
                  <Image source={require('../images/account.png')} style={{left:10,width: 50, height: 50}}/>
                  <Text >Event</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>


        <View style={sports_styles.flex_col_container1}>
          <View style={sports_styles.row_space}>
            <View style={sports_styles.flex_col_container}>
            <TouchableHighlight onPress={ () => this._navigate('Community') }>
              <View>
                <Image source={require('../images/account.png')} style={{left:10,width: 50, height: 50}}/>
                <Text >Community</Text>
              </View>
            </TouchableHighlight>
            </View>

            <View style={sports_styles.flex_col_container}>
              <TouchableHighlight onPress={ () => this._navigate('Photo') }>
                <View>
                  <Image source={require('../images/account.png')} style={{left:10,width: 50, height: 50}}/>
                  <Text >Photo</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>

      </View>
    );
  }
}
