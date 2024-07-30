import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';

const SignUp = ({navigation}) => {
  const [select, setSelect] = useState(false);
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
        <View style={{paddingLeft: 30, paddingTop: 30}}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              width: '80%',
              fontWeight: '900',
            }}>
            Create An Account
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Input placeholder={'Full Name'} />
          <Input placeholder={'Email Address'} />
          <Input placeholder={'Password'} />
          <Input placeholder={'Re-type Password'} />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignSelf: 'flex-start',
              marginLeft: 20,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 10,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => setSelect(!select)}
                style={
                  select
                    ? {
                        width: 18,
                        height: 18,
                        borderRadius: 10,
                        backgroundColor: 'black',
                      }
                    : {width: 18, height: 18, borderRadius: 10}
                }
              />
            </View>
            <Text style={{color: 'white', fontSize: 12, marginLeft: 8}}>
              I have read and accept the{' '}
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                paddingBottom: 2,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  textDecorationLine: 'underline',
                }}>
                terms and conditions
              </Text>
            </TouchableOpacity>
          </View>
          <Button
          onPress={()=>navigation.navigate("Verification")}
            text={'Create An Account'}
            buttonStyle={{
              backgroundColor: '#29CF6E',
              top: 10,
              borderRadius: 10,
            }}
            textStyle={{fontSize: 16}}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
