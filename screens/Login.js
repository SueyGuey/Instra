import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';

export class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.onSignUp = this.onSignIn.bind(this);
  }

  onSignIn(){
    const{ email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
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
      <View style={styles.login}>
        <Text style = {styles.loginText}>Sign in with your existing account</Text>
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
        <TouchableOpacity style = {styles.loginSubmit} onPress = {() => this.onSignIn()}>
          <Text style = {styles.submitText}>SIGN IN</Text>
        </TouchableOpacity>
    
        <View style={styles.or}>
          <View style={styles.line} />
            <View>
              <Text style={styles.orText}>OR</Text>
            </View>
          <View style={styles.line} />
        </View>
          
        <Text style = {styles.loginText}>Don't already have an account?</Text>
        <TouchableOpacity style = {styles.loginSubmit} onPress = {()=>{navigation.push('registration')}}>
          <Text style = {styles.submitText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingTop: 160,
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
  or: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  line: {
    flex: 0.36,
    height: 1.6,
    backgroundColor: 'black'
  },
  orText: {
    fontSize: 16,
    width: 30,
    textAlign: 'center'
  },
});

export default Login;