import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Header = ({text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={{color: 'white', fontSize: 22, fontWeight: '800'}}>
        {text}
      </Text>
      <View style={{flexDirection: 'row',width:80,justifyContent:"space-between"}}>
      <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name={'search'} size={25} color={'#29CF6E'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name={'user'} size={25} color={'#29CF6E'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
