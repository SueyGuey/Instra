import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export function Registration({navigation}) {
  const back = () => {
    navigation.goBack();
  }

  return (
    <View style = {styles.SignUp}>
      <TouchableOpacity style = {styles.back} onPress = {back}>
        <AntDesign name="leftcircleo" size = {36} color = '#340188' />
      </TouchableOpacity>
      <View style = {styles.AccCreation}>
        <Text style = {styles.loginText}>Create a new account</Text>
        <TextInput style = {styles.loginInput} placeholder ={'Email'} keyboardType = {'email-address'}/>
        <TextInput style = {styles.loginInput} placeholder ={'Password'} secureTextEntry/>
        <TouchableOpacity style = {styles.loginSubmit}>
          <Text style = {styles.submitText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SignUp: {
    flex: 1,
    backgroundColor: 'white',
  },
  back:{
    marginTop: 60,
    color: 'black',
    marginLeft: '12.5%'
  },
  AccCreation: {
    paddingTop: 90,
    width: '100%',
    alignItems: 'center',
  },
  loginText: {
      fontSize: 22,
      marginBottom: 12,
  },
  error: {
    color: 'red',
    fontWeight: '500',
    marginBottom: 6,
  },
  loginInput: {
      borderBottomWidth:1,
      marginBottom: 16,
      padding: 12,
      borderRadius: 6,
      backgroundColor: '#F3F3F3',
      width: '75%',
  },
  loginSubmit: {
    width: '75%',
    backgroundColor: '#340188',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitText: {
    color: '#FFFFFF',
    fontWeight: '500'
  },
});