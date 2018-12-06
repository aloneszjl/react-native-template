// @flow
import { createStackNavigator } from 'react-navigation';
import ProfileScreen from 'src/screen/profile/ProfileScreen';
import HoldingsScreen from 'src/screen/holdings/HoldingsScreen';
import createTabScreen from './createTabScreen';

const MainNavigator = createStackNavigator(
  {
    TabHome: {
      screen: createTabScreen({
        initialRouteName: 'Home',
      }),
    },
    TabFriends: {
      screen: createTabScreen({
        initialRouteName: 'Friends',
      }),
    },
    TabCart: {
      screen: createTabScreen({
        initialRouteName: 'Cart',
      }),
    },
    Holdings: { screen: HoldingsScreen },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    headerLayoutPreset: 'center',
    headerMode: 'screen',
    defaultNavigationOptions: {
      headerTintColor: '#333333',
    },
    headerBackTitleVisible: false,
  }
);

export default MainNavigator;
