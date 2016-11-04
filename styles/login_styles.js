import {
  StyleSheet
} from 'react-native';

const login_styles = StyleSheet.create({
  wallet_image:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wallet_text:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  button_view:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_container_style:{
    margin: 10,
    padding:10,
    height:45,
    width:300,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#d32f2f'
  },
  button_style:{
    fontSize: 15,
    color: 'white'
  },
  icon_button_style:{
    margin: 10,
    padding:10,
    height:25,
    width:280,
    left:10
  },
  icon_button_text_style:{
    fontSize: 15,
    color:'white',
    left:20
  },
  login_field_view:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    left:30
  },
  text_input:{
    width:270,
    height: 50,
    left:10
  },
  bottom_text:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_text_view:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_botton:{
    margin: 10,
    padding:10,
    height:45,
    width:300,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#ff6f00',
    left:15
  }
});

module.exports = login_styles