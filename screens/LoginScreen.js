import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import MainScreen  from '/Users/Marion/ClubVoile-1/screens/MainScreen.js';
import {StackNavigator,} from 'react-navigation';

export default class LoginScreen extends React.Component {
  render() {

    return (
      <View style={{flex: 1}}>
        <ImageBackground 
          source={require('/Users/Marion/ClubVoile-1/images/LoginBackground.png')}
          style={{
          flex: 1,
          }}
        > 
          <View style={{
            flex: 1,
            flexDirection: 'column',
              marginLeft: 15,
              marginTop: 30,
              marginBottom: 20,
              marginRight: 15}}>
            <Image 
              source={require('/Users/Marion/ClubVoile-1/images/Logo-CV-White.png')}
              style={{
                justifyContent: 'space-around',
              alignSelf: 'center',
              resizeMode: 'contain',
              marginTop: 10,
              height: 150,
              width: 150,
              }}
            />

                <View style= {{flex: 0.2,
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginTop: 20}}>
                <View style={styles.container_input}>
                  <TextInput style = {styles.input} 
                     autoCapitalize="none" 
                     onSubmitEditing={() => this.passwordInput.focus()} 
                     autoCorrect={false} 
                     keyboardType='email-address' 
                     returnKeyType="next" 
                     placeholder='Login (prénom.nom)' 
                     placeholderTextColor='rgba(75,60,75,0.8)'/>
                </View>

                <View style={styles.container_input}>
                  <TextInput style = {styles.input}   
                    returnKeyType="go" 
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Mot de passe' 
                    placeholderTextColor='rgba(75,60,75,0.8)' 
                    secureTextEntry/>
                  </View>
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Main')}>
                     <Text  style={styles.buttonText}>CONNEXION</Text>
                  </TouchableOpacity> 
                  </View>
              </View>
            </ImageBackground>
          </View>
    );
  }
}


const styles = StyleSheet.create({
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
    buttonText:{
      color: 'rgba(75,60,75,0.9)',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '200'
    },
  buttonContainer:{
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingVertical: 15,
        marginTop: 15,
        padding: 10,
        borderRadius: 25,
      }
});

AppRegistry.registerComponent('ClubVoile-1', () => LoginScreen);