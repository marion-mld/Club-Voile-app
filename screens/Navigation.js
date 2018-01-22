import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import LoginScreen from '/Users/Marion/ClubVoile-1/screens/LoginScreen.js';
import MainScreen from '/Users/Marion/ClubVoile-1/screens/MainScreen.js';
import {StackNavigator,} from 'react-navigation';


const RootNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
});

export default RootNavigator;