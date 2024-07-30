import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = ({navigation}) => {
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
        }}>
        <View style={{padding: 30}}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              width: '80%',
              fontWeight: '900',
            }}>
            Sign In With Email or Username
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Input placeholder={'username or email'} />
          <View style={{alignItems: 'flex-end', width: '95%'}}>
            <TouchableOpacity style={{width: '50%', right: 20}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: 'right',
                }}>
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>
          <Input placeholder={'password'} inputStyle={{top: 10}} />
          <Button
           onPress={()=>navigation.navigate("Company")}
            text={'Sign In'}
            buttonStyle={{
              backgroundColor: '#29CF6E',
              top: 10,
              borderRadius: 10,
            }}
            textStyle={{fontSize: 16}}
          />
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              borderWidth: 1,
              marginVertical: 30,
              borderColor: '#D4D4D4',
            }}
          />
          <Button
            onPress={()=>navigation.navigate("SignUp")}
            text={'Create An Account'}
            buttonStyle={{
              backgroundColor: 'black',
              borderRadius: 10,
            }}
            textStyle={{fontSize: 16, fontWeight: '500'}}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
