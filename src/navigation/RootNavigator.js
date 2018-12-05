// @flow
import { createStackNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import ModalNavigator from './ModalNavigator';

const StackNavigator = createStackNavigator(
  {
    Main: { screen: MainNavigator },
    Modal: { screen: ModalNavigator },
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
    headerBackTitleVisible: false,
  }
);

export default StackNavigator;
