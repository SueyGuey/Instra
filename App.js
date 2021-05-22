import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';
import { AuthStackNav } from './navigation/AuthStack';
import { StyleSheet, Text, View } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyBLR6n42OZsAHyg8taET7efKCT2nbx_v1o",
  authDomain: "instra-1039c.firebaseapp.com",
  projectId: "instra-1039c",
  storageBucket: "instra-1039c.appspot.com",
  messagingSenderId: "648355875108",
  appId: "1:648355875108:web:655e0fa7879aad159f4bb1",
  measurementId: "G-QLT90LCCZF"
};

//makes sure we are running other firebase instances
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const RootStack = createStackNavigator();

export class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          signedIn: false,
          loaded: true
        })
      } else {
        this.setState({
          signedIn: true,
          loaded: true
        })
      }
    })
  }

  render(){
    const {signedIn, loaded} = this.state;

    if(!loaded){
      return(
        <View style = {styles.loading}>
          <Text>Loading...</Text>
        </View>
      );
    }

    if(!signedIn){
      return (
        <NavigationContainer>
          <RootStack.Navigator screenOptions = {{
            headerShown: false,
          }}>
            <RootStack.Screen name = {'AuthStack'} component = {AuthStackNav}/>
          </RootStack.Navigator>
        </NavigationContainer>
      );
    }

    return(
      <View style = {styles.loading}>
        <Text >we logged in!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;