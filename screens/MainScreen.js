import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default class MainScreen extends React.Component {
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
                  <TouchableOpacity style={styles.buttonContainer} >
                     <Text  style={styles.buttonText}>CONNEXION</Text>
                  </TouchableOpacity> 
                  </View>
              </View>
            </ImageBackground>
          </View>
    );
  }
}

AppRegistry.registerComponent('ClubVoile-1', () => MainScreen);