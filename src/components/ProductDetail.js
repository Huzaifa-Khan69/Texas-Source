import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';

const ProductDetail = ({img,name,price,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        padding: 10,
        backgroundColor: 'white',
        width: '45%',
        marginHorizontal: 8,
        marginVertical:10
      }}>
      <Image source={img} style={{alignSelf:"center"}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Text style={{color: 'black',fontSize:15,fontWeight:"800"}}>{name}</Text>
        <Text style={{color: 'black',fontSize:15,}}>€{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
