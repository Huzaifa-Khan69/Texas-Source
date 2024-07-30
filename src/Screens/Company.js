import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Header from '../components/Header';
import CompanyDetails from '../components/CompanyDetails';

const Company = ({navigation}) => {
  const companydetails = [
    {
      img: images.company1,
      name: 'Company Name',
      description:
        'It is a long established fact that a reader will be distracted.',
    },
    {
      img: images.company1,
      name: 'Company Name',
      description:
        'It is a long established fact that a reader will be distracted.',
    },
    {
      img: images.company2,
      name: 'Company Name',
      description:
        'It is a long established fact that a reader will be distracted.',
    },
    {
      img: images.company3,
      name: 'Company Name',
      description:
        'It is a long established fact that a reader will be distracted.',
    },
    {
      img: images.company3,
      name: 'Company Name',
      description:
        'It is a long established fact that a reader will be distracted.',
    },
    {
      img: images.company2,
      name: 'Company Name',
      description:
        'It is a long established fact that a reader will be distracted.',
    },
    {
      img: images.company2,
      name: 'Company Name',
      description:
        'It is a long established fact that a reader will be distracted.',
    },
    {
      img: images.company3,
      name: 'Company Name',
      description:
        'It is a long established fact that a reader will be distracted.',
    },
    {
      img: images.company1,
      name: 'Company Name',
      description:
        'It is a long established fact that a reader will be distracted.',
    },
    {
      img: images.company3,
      name: 'Company Name',
      description:
        'It is a long established fact that a reader will be distracted.',
    },
  ];
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={images.backgroundimg} style={{position: 'absolute'}} />
      <Image source={images.background} style={{position: 'absolute'}} />
      <View style={{marginVertical: 20}}>
        <Header text={'Explore Now'} />
      </View>
      <View style={{borderWidth: 1, width: '100%', borderColor: '#D4D4D4'}} />
      <View style={{marginVertical: 20}}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: '900',
            textAlign: 'center',
          }}>
          Proceed<Text style={{fontWeight: '500'}}> With The</Text> Company
          <Text style={{fontWeight: '500'}}> You</Text> Want
        </Text>
      </View>
      <ScrollView>
        {companydetails.map((item, index) => {
          return <CompanyDetails img={item.img}
          name={item.name}
          description={item.description}
          onPress={()=>navigation.navigate("Product")}
          key={index}/>;
        })}
      </ScrollView>
    </View>
  );
};

export default Company;

const styles = StyleSheet.create({});
