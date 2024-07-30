import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CompanyDetails = ({img,name,description,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
      }}>
      <Image source={img} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingVertical: 10,
        }}>
        <View style={{width: '70%'}}>
          <Text style={{color: '#07113D', fontSize: 25, fontWeight: '600'}}>
            {name}
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>
            {description}
          </Text>
        </View>
        <TouchableOpacity
        onPress={onPress}
          style={{
            width: 45,
            height: 90,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#29CF6E',
          }}>
          <AntDesign name="right" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CompanyDetails;

const styles = StyleSheet.create({});
