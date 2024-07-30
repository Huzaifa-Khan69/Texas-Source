import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Button from '../components/Button';

const Success = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={images.backgroundimg} style={{position: 'absolute'}} />
      <Image source={images.background} style={{position: 'absolute'}} />
      <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
        <Image
          source={images.logo}
          style={{width: 150, heigth: 150, resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '77%',
          bottom: 0,
          backgroundColor: '#00190A',
          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={images.check} />
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '900',
            width: '50%',
            textAlign: 'center',
            marginVertical:20
          }}>
          Successfully Verified
        </Text>
        <Button
        onPress={()=>navigation.navigate("Login")}
            text={'Back To Login'}
            buttonStyle={{
              backgroundColor: '#29CF6E',
              top: 10,
              borderRadius: 10,
            }}
            textStyle={{fontSize: 16}}
          />
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({});
