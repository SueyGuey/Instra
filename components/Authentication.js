import react, { createContext } from 'react';
import auth from '@react-native-firebase/auth';
import { useState } from 'react/cjs/react.development';

export const AuthContext = createContext();

export const Authentication = ({children}) => {
  const[user,setUser] = useState(null);
  return (
    <AuthContext.Provider
      value = {{
          user,
          setUser,
          SignIn: async (email, password) => {
            try {
              await auth().signInWithEmailAndPassword(email,password);
            } catch(e) {
              console.log(e);
            }
          },
          SignUp: async (email, password) => {
            try {
              await auth().createUserWithEmailAndPassword(email, password);
            } catch(e) {
              console.log(e);
            }
          },
          LogOut: async () => {
            try {
              await auth().SignUp();
            } catch(e){
              console.log(e);
            }
          }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}