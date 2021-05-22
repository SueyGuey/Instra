import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Registration } from '../screens/AccountCreation';

const AuthStack = createStackNavigator();

export function  AuthStackNav(){
  return (
    <AuthStack.Navigator screenOptions = {{
      headerShown: false
    }}>
      <AuthStack.Screen name = {'login'} component = {Login}/>
      <AuthStack.Screen name = {'registration'} component = {Registration}/>
    </AuthStack.Navigator>
  );
}
