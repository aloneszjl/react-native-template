// @flow
import { createStackNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import ModalNavigator from './ModalNavigator';

const RootNavigator = createStackNavigator(
  {
    Main: { screen: MainNavigator },
    Modal: { screen: ModalNavigator },
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
    headerLeft: null,
  }
);

export default RootNavigator;
