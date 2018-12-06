// @flow
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from 'src/screen/home/HomeScreen';
import FriendsScreen from 'src/screen/friends/FriendsScreen';
import CartScreen from 'src/screen/cart/CartScreen';
import Icon from 'src/components/Icon';

const defaultRoutes = {
  Home: HomeScreen,
  Friends: FriendsScreen,
  Cart: CartScreen,
};
const defaultTabCofing = {
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
};
const createTabScreen = (tabConfig: Object) => {
  const TabScreen = createBottomTabNavigator(defaultRoutes, {
    ...defaultTabCofing,
    ...tabConfig,
  });
  TabScreen.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];

    const headerTitle = routeName;

    return {
      headerTitle,
      headerTransparent: routeName === 'Cart',
      headerTitleStyle: {
        color: routeName === 'Cart' ? 'white' : 'black',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        fontWeight: 'normal',
      },
    };
  };
  return TabScreen;
};

export default createTabScreen;
