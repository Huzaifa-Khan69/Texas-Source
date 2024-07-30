import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({placeholder,inputStyle}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={'#949494'}
      style={[{
        width: '90%',
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D1D1D1',
        paddingLeft:15,marginVertical:10
      },inputStyle]}
    />
  );
};

export default Input;

const styles = StyleSheet.create({});
