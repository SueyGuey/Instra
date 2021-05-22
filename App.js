import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import * as firebase from 'firebase';
import { AuthStackNav } from './navigation/AuthStack';

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

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions = {{
        headerShown: false
      }}>
        <RootStack.Screen name = {'RootStack'} component = {AuthStackNav}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
