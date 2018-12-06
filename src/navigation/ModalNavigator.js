// @flow
import { createStackNavigator } from 'react-navigation';
import LoginScreen from 'src/screen/login/LoginScreen';

const ModalNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#333333',
    },
    headerLayoutPreset: 'center',
  }
);

export default ModalNavigator;
