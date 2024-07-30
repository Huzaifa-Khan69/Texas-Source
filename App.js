import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Welcome from './src/Screens/Welcome';
import Authentication from './src/Screens/Authentication';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Verification from './src/Screens/Verification';
import Success from './src/Screens/Success';
import Company from './src/Screens/Company';
import Product from './src/Screens/Product';
import Navigation from './src/Routes/Navigation';

const App = () => {
  return (
    // <Welcome />;
    // <Authentication />
    // <Login/>
    // <SignUp/>
    // <Verification/>
    // <Success/>
    // <Company/>
    // <Product/>
    <Navigation/>
  );
};

export default App;

const styles = StyleSheet.create({});
