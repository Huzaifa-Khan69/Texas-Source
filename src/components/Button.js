import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({buttonStyle, textStyle, text, icon,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[
        {
          width: '90%',
          height: 60,
          borderRadius: 50,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 6,
          flexDirection:"row"
        },
        buttonStyle,
      ]}>
      {icon ? icon : null}
      <Text style={[{color: 'white',paddingLeft:20}, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
