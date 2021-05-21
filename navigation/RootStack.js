import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Login } from '../screens/Login';
import { Registration } from '../screens/AccountCreation';

const screens = {
  Login:{
    screen: Login
  },
  Registration: {
    screen: Registration
  }
}

const RootStack = createStackNavigator(screens, {headerMode: 'false'});

export default createAppContainer(RootStack);
