import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Button from '../components/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Authentication = ({navigation}) => {
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
        }}>
        <Text
          style={{color: 'white', fontSize: 42, textAlign: 'center', top: 10}}>
          Innovative
          <Text
            style={{
              color: 'white',
              fontSize: 44,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            {' '}
            Manufacturing
          </Text>{' '}
          Solutions on
          <Text
            style={{
              color: 'white',
              fontSize: 44,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            {'       '}
            The Market.
          </Text>
        </Text>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Button
            onPress={() => navigation.navigate('Login')}
            icon={<AntDesign name={'apple1'} size={25} color={'white'} />}
            text={'Continue With Apple'}
            buttonStyle={{backgroundColor: 'black'}}
            textStyle={{fontSize: 18}}
          />

          <Button
            onPress={() => navigation.navigate('Login')}
            icon={
              <Image source={images.google} style={{width: 30, height: 30}} />
            }
            text={'Continue With Google'}
            buttonStyle={{backgroundColor: 'white'}}
            textStyle={{fontSize: 18, color: 'black'}}
          />

          <Button
            onPress={() => navigation.navigate('Login')}
            icon={<Ionicons name="logo-facebook" size={35} color={'white'} />}
            text={'Continue With Facebook'}
            buttonStyle={{backgroundColor: '#1878F3'}}
            textStyle={{fontSize: 18, color: 'white'}}
          />
        </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{textAlign: 'center', fontSize: 15}}>
            By registering, you agree to our
            <Text style={{fontWeight: 'bold'}}>
              {' '}
              Terms of Service, Privacy Policy
            </Text>{' '}
            and
            <Text style={{fontWeight: 'bold'}}> Cookie Policy.</Text>
          </Text>
          <TouchableOpacity>
            <Text
              style={{justifyContent: 'center', fontSize: 20, marginTop: 10}}>
              Recover My Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({});
