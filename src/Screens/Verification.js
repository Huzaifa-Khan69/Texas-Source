import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import images from '../assets/images'
import Input from '../components/Input'
import Button from '../components/Button'

const Verification = ({navigation}) => {
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
            Email
          </Text>
          <Text style={{color:"white"}}>An email has been sent to your registered email address. Enter the verification code below:</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"center",marginVertical:20}}>
            <Input inputStyle={{width:50,height:60,marginRight:10}}/>
            <Input inputStyle={{width:50,height:60,marginHorizontal:10}}/>
            <Input inputStyle={{width:50,height:60,marginHorizontal:10}}/>
            <Input inputStyle={{width:50,height:60,marginLeft:10}}/>
        </View>
        <View style={{alignItems:"center"}}>
        <Text style={{color: 'white', marginVertical: 25}}>00:32</Text>
        <Text style={{color: 'white'}}>Didn't Receive A Code</Text>
        <TouchableOpacity style={{marginVertical: 25}}>
          <Text style={{color: 'white', fontWeight: '500', fontSize: 18}}>
            Resend Code
          </Text>
        </TouchableOpacity>
        <Button
        onPress={()=>navigation.navigate("Success")}
            text={'Verify'}
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
  )
}

export default Verification

const styles = StyleSheet.create({})