import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import LoginScreen from '/Users/Marion/ClubVoile-1/screens/LoginScreen.js';
import MainScreen from '/Users/Marion/ClubVoile-1/screens/MainScreen.js';
import {StackNavigator,} from 'react-navigation';


const navigation = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
});

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class App extends React.Component {
  render() {

    return (
    
        <View style={{flex: 1}}>
            <LoginScreen />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  input:{
        color: '#fff',
        fontWeight: '200'
    },
  container_input:{
      borderRadius: 25,
      backgroundColor: 'rgba(255,255,255,0.6)',
      height: 40,
      marginBottom: 0,
      marginTop: 5,
      padding: 10,
  },
  buttonContainer:{
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingVertical: 15,
        marginTop: 15,
        padding: 10,
        borderRadius: 25,
    },
    buttonText:{
      color: 'rgba(75,60,75,0.9)',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '200'
    }
});


