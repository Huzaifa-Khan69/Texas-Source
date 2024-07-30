import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import Header from '../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';
import ProductDetail from '../components/ProductDetail';
import {Rating} from 'react-native-ratings';

const Product = ({navigation}) => {
  const productdetail = [
    {
      img: images.product,
      name: 'Product',
      price: 4250,
    },
    {
      img: images.product,
      name: 'Product',
      price: 4250,
    },
    {
      img: images.product,
      name: 'Product',
      price: 4250,
    },
    {
      img: images.product,
      name: 'Product',
      price: 4250,
    },
    {
      img: images.product,
      name: 'Product',
      price: 4250,
    },
    {
      img: images.product,
      name: 'Product',
      price: 4250,
    },
    {
      img: images.product,
      name: 'Product',
      price: 4250,
    },
    {
      img: images.product,
      name: 'Product',
      price: 4250,
    },
    {
      img: images.product,
      name: 'Product',
      price: 4250,
    },
    {
      img: images.product,
      name: 'Product',
      price: 4250,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={images.backgroundimg} style={{position: 'absolute'}} />
      <Image source={images.background} style={{position: 'absolute'}} />
      <View style={{marginVertical: 20}}>
        <Header text={'Explore Now'} />
      </View>
      <View style={{borderWidth: 1, width: '100%', borderColor: '#D4D4D4'}} />
      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 15,
        }}>
        <Text style={{color: 'white', fontSize: 25, fontWeight: '800'}}>
          Company Name
        </Text>

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name={'shopping-cart'} size={25} color={'#29CF6E'} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={{height: 80}}>
        <Button
          text={'Category 1'}
          buttonStyle={{
            backgroundColor: '#29CF6E',
            width: 120,
            height: 40,
            borderRadius: 15,
            marginLeft: 10,
          }}
          textStyle={{color: 'white', fontSize: 15, paddingLeft: 0}}
        />
        <Button
          text={'Category 2'}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
            width: 120,
            height: 40,
            borderRadius: 15,
            marginLeft: 20,
          }}
          textStyle={{color: 'white', fontSize: 15, paddingLeft: 0}}
        />
        <Button
          text={'Category 3'}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
            width: 120,
            height: 40,
            borderRadius: 15,
            marginLeft: 20,
          }}
          textStyle={{color: 'white', fontSize: 15, paddingLeft: 0}}
        />
        <Button
          text={'Category 4'}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
            width: 120,
            height: 40,
            borderRadius: 15,
            marginLeft: 20,
          }}
          textStyle={{color: 'white', fontSize: 15, paddingLeft: 0}}
        />
        <Button
          text={'Category 5'}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
            width: 120,
            height: 40,
            borderRadius: 15,
            marginLeft: 20,
          }}
          textStyle={{color: 'white', fontSize: 15, paddingLeft: 0}}
        />
        <Button
          text={'Category 6'}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
            width: 120,
            height: 40,
            borderRadius: 15,
            marginLeft: 20,
          }}
          textStyle={{color: 'white', fontSize: 15, paddingLeft: 0}}
        />
        <Button
          text={'Category 7'}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
            width: 120,
            height: 40,
            borderRadius: 15,
            marginLeft: 20,
          }}
          textStyle={{color: 'white', fontSize: 15, paddingLeft: 0}}
        />
        <Button
          text={'Category 8'}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
            width: 120,
            height: 40,
            borderRadius: 15,
            marginLeft: 20,
          }}
          textStyle={{color: 'white', fontSize: 15, paddingLeft: 0}}
        />
        <Button
          text={'Category 9'}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
            width: 120,
            height: 40,
            borderRadius: 15,
            marginLeft: 20,
          }}
          textStyle={{color: 'white', fontSize: 15, paddingLeft: 0}}
        />
        <Button
          text={'Category 10'}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
            width: 120,
            height: 40,
            borderRadius: 15,
            marginLeft: 20,
          }}
          textStyle={{color: 'white', fontSize: 15, paddingLeft: 0}}
        />
      </ScrollView>
      <ScrollView contentContainerStyle={{}}>
        <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap'}}>
          {productdetail.map((item, index) => {
            return (
              <ProductDetail
                img={item.img}
                name={item.name}
                price={item.price}
                key={index}
                onPress={() => setIsOpen(true)}
              />
            );
          })}
        </View>
      </ScrollView>
      <Modal transparent={true} visible={isOpen} animationType="slide">
        <View
          style={{
            width: '100%',
            height: '42%',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              textAlign: 'center',
              fontWeight: '900',
              marginVertical: 20,
            }}>
            Product
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Rating imageSize={25} />

            <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>
              1.248 Reviews
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              width: '80%',
              marginTop: 15,
              alignSelf: 'center',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => setIsOpen(false)}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#D1D1D1',
                borderWidth: 1,
                width: 60,
                height: 60,
                borderRadius: 10,
              }}>
              <AntDesign name={'arrowleft'} size={35} color={'#D1D1D1'} />
            </TouchableOpacity>
            <Button
              text={'Add To Cart'}
              buttonStyle={{
                backgroundColor: '#29CF6E',
                width: '70%',
                marginLeft: 10,
                paddingLeft: 0,
                borderRadius: 15,
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
