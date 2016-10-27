import React from 'react';
import Button from 'react-native-button';
import { View, Text, StyleSheet, Image } from 'react-native';


const Row = (props) => (
      <View
          style={{
          flex: 1
        }}>

      <View
        style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderWidth:1,
        width:335,
        margin:8,
        height:95,
        backgroundColor:'#E0E0E0',
        borderRadius:5,
        borderColor:'#E0E0E0',
      }}>
        <Image source={require('../../../images/adidas.jpg')} style={{width: 60, height: 70,top:7,left:5}} />
        <View style={{left:10}}>
           <Text style={{fontSize:13, color:'#ef6c00'}}>{`${props.product_name}`}</Text>
           <Text style={{fontSize:10}}>{`${props.description}`}</Text>
           <Text style={{fontSize:18 ,color:'black'}}>{`${props.price}`}</Text>
           <View
             style={{
             flexDirection: 'row',
             justifyContent: 'flex-start',
             alignItems: 'flex-start',
             right:10,
           }}>
             <Button
            containerStyle={{borderRadius:2,margin:10,height:20,width:70, backgroundColor: '#ef6c00'}}
            style={{fontSize: 10,color:'white',top:3}}
            >
            VIEW
            </Button>
            <Button
              containerStyle={{borderRadius:2,margin:10,height:20,width:70, backgroundColor: 'black'}}
              style={{fontSize: 10,color:'white',top:3}}
              >
              BUY
              </Button>
            </View>
        </View>
      </View>

    </View>
);

export default Row;
