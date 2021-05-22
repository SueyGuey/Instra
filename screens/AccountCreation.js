import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import firebase from 'firebase';

export class Registration extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      name: ''
    }

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp(){
    const{ email, password, name } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) =>{
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      })
  }

  render(){
    const { navigation } = this.props;
    return (
      <View style = {styles.SignUp}>
        <TouchableOpacity style = {styles.back}>
          <AntDesign name="leftcircleo" size = {36} color = '#340188' onPress = {()=>{navigation.pop()}}/>
        </TouchableOpacity>
        <View style = {styles.AccCreation}>
          <Text style = {styles.loginText}>Create a new account</Text>
          <TextInput
            style = {styles.loginInput}
            placeholder ={'Username'}
            onChangeText = {(name) => this.setState({name})}/>
          <TextInput
            style = {styles.loginInput}
            placeholder ={'Email'}
            keyboardType = {'email-address'}
            onChangeText = {(email) => this.setState({email})}/>
          <TextInput
            style = {styles.loginInput}
            placeholder ={'Password'}
            secureTextEntry = {true}
            onChangeText = {(password) => this.setState({password})}/>
          <TouchableOpacity style = {styles.loginSubmit}  onPress = {() => this.onSignUp()}>
            <Text style = {styles.submitText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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

export default Registration;