import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = React.createClass({
  tabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  },

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  },

  setAnimationValue({ value, }) {
    this.tabIcons.forEach((icon, i) => {
      const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
    });
  },


  render() {
      return <View style={[styles.tabs, this.props.style, ]}>
        {this.props.tabs.map((tab, i,) => {
          return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
            <Icon
              name={tab}
              size={20}
              color={this.props.activeTab === i ?  'rgb(255,255,255)' : 'rgb(189, 224, 250)'}
              ref={(icon) => { this.tabIcons[i] = icon; }}
            />
          <Text style={{fontWeight:'bold', fontSize:10, color:this.props.activeTab === i ? 'rgb(255,255,255)' : 'rgb(189, 224, 250)'}}>{`${this.props.name[i]}`}</Text>
          </TouchableOpacity>;
        })}
      </View>;
    },
  });

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: '#2196F3',
  },
});

export default Tabs;
