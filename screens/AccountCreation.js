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
      name: '',
      confirmEmail: '',
      confirmPassword: '',
      error: false,
      errormsg: ''
    }

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp(){
    const{ email, password, name, confirmEmail, confirmPassword} = this.state;
    if(email !== confirmEmail){
      this.setState({error: true, errormsg: 'Emails do not match'});
    } else if(password !== confirmPassword){
      this.setState({error: true, errormsg: 'Passwords do not match'});
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) =>{
        console.log(result);
      })
      .catch((e) => {
        this.setState({error: true, errormsg: e.message});
      })
    }
  }

  render(){
    const { navigation } = this.props;
    const { error, errormsg } = this.state;

    return (
      <View style = {styles.SignUp}>
        <TouchableOpacity style = {styles.back}>
          <AntDesign name="leftcircleo" size = {36} color = '#340188' onPress = {()=>{navigation.pop()}}/>
        </TouchableOpacity>
        <View style = {styles.AccCreation}>
          <Text style = {styles.SignUpText}>Create a new account</Text>
          {error ?( <Text style = {styles.errorStyle}>{errormsg}</Text>) : null}
          <Text style = {styles.boldText}>*Username</Text>
          <TextInput
            style = {styles.loginInput}
            autoCapitalize="none"
            placeholder ={'Username'}
            onChangeText = {(name) => this.setState({name})}/>
          <Text style = {styles.boldText}>*Email Address</Text>
          <TextInput
            style = {styles.loginInput}
            autoCapitalize="none"
            placeholder ={'Email'}
            keyboardType = {'email-address'}
            onChangeText = {(email) => this.setState({email})}/>
          <Text style = {styles.boldText}>*Confirm Email Address</Text>
          <TextInput
            style = {styles.loginInput}
            autoCapitalize="none"
            placeholder ={'Confirm Email'}
            keyboardType = {'email-address'}
            onChangeText = {(confirmEmail) => this.setState({confirmEmail})}/>
          <Text style = {styles.boldText}>*Password</Text>
          <TextInput
            style = {styles.loginInput}
            placeholder ={'Password'}
            secureTextEntry = {true}
            onChangeText = {(password) => this.setState({password})}/>
            <Text style = {styles.boldText}>*Confirm Password</Text>
            <TextInput
              style = {styles.loginInput}
              placeholder ={'Confirm Password'}
              secureTextEntry = {true}
              onChangeText = {(confirmPassword) => this.setState({confirmPassword})}/>
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
  errorStyle: {
    alignSelf: 'center',
    marginBottom: 6,
    color: 'red',
    fontWeight: '500',
  },
  AccCreation: {
    paddingTop: 90,
    width: '100%',
  },
  SignUpText: {
      fontSize: 22,
      marginBottom: 12,
      textAlign: 'center'
  },
  boldText: {
    fontWeight: 'bold',
    marginLeft: '12.5%',
  },
  error: {
    color: 'red',
    fontWeight: '500',
    marginBottom: 6,
  },
  loginInput: {
      alignSelf: 'center',
      borderBottomWidth:1,
      padding: 12,
      borderRadius: 6,
      marginBottom: 12,
      backgroundColor: '#F3F3F3',
      width: '75%',
  },
  loginSubmit: {
    alignSelf: 'center',
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