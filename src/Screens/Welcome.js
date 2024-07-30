import {
  Animated,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import images from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Welcome = ({navigation}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const buttonWidth = 150;
  const arrowButtonWidth = 60;
  const totalWidth = 380; // Total track width, adjust according to your layout
  const [maxDragDistance, setMaxDragDistance] = useState(
    totalWidth - buttonWidth - arrowButtonWidth,
  );

  useEffect(() => {
    // Ensure maxDragDistance is recalculated correctly if dependencies change
    setMaxDragDistance(totalWidth - buttonWidth - arrowButtonWidth);
  }, [totalWidth, buttonWidth, arrowButtonWidth]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        // Ensure dx is defined and restrict within bounds
        const dx = Math.max(0, Math.min(gestureState.dx, maxDragDistance));
        pan.setValue({x: dx, y: 0});
      },
      onPanResponderRelease: (e, gestureState) => {
        const dx = gestureState.dx || 0;
        if (dx >= maxDragDistance) {
          // Navigate to the next page
          console.log('dx:', dx, 'maxDragDistance:', maxDragDistance);
          navigation.navigate('Authentication'); // Replace 'NextPage' with your target screen
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        } else {
          // Return to original position
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={images.backgroundimg} style={{position: 'absolute'}} />
      <Image source={images.background} style={{position: 'absolute'}} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={images.logo} />
      </View>
      <View
        style={{
          width: '100%',
          height: '55%',
          bottom: 0,
          backgroundColor: '#00190A',
          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
          alignItems: 'center',
        }}>
        <Text
          style={{color: 'white', fontSize: 50, textAlign: 'center', top: 30}}>
          Innovative
          <Text
            style={{
              color: 'white',
              fontSize: 46,
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
              fontSize: 46,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            {'    '}
            The Market.
          </Text>
        </Text>
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 30,
            width: '90%',
            justifyContent: 'space-between',
          }}>
          <Animated.View
            style={[
              pan.getLayout(),
              {
                width: 150,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#29CF6E',
                justifyContent: 'center',
              },
            ]}
            {...panResponder.panHandlers}>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                color: 'white',
              }}>
              Get Started
            </Text>
          </Animated.View>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              backgroundColor: '#29CF6E',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="right" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
