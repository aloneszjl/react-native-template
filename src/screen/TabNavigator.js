// @flow
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './home/HomeScreen';
import FriendsScreen from './friends/FriendsScreen';
import CartScreen from './cart/CartScreen';
import Icon from '../components/Icon';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Friends: FriendsScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }: { focused: boolean, tintColor: string }) => {
        const { routeName } = navigation.state;
        const iconName = focused ? `${routeName}Fill` : routeName;
        const size = focused ? 25 : 20;
        return <Icon name={iconName} width={size} height={size} fill={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const headerTitle = routeName;

  return {
    headerTitle,
  };
};

export default TabNavigator;
