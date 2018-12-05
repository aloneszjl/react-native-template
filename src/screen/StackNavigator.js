// @flow
import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';

const StackNavigator = createStackNavigator({
  Tab: { screen: TabNavigator },
});

export default StackNavigator;
