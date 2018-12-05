// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
  index: 0,
  key: null,
  actions: [
    NavigationActions.navigate({
      routeName: 'Main',
      action: NavigationActions.navigate({
        routeName: 'TabCart',
      }),
    }),
  ],
});

const HoldingsScreen = ({ navigation }: { navigation: Object }) => (
  <View>
    <TouchableOpacity
      onPress={() => {
        Promise.resolve()
          .then(() => {
            navigation.dispatch(resetAction);
          })
          .then(() => {
            navigation.dispatch(
              NavigationActions.navigate({
                routeName: 'Profile',
              })
            );
          });
      }}
    >
      <Text>个人持仓</Text>
    </TouchableOpacity>
  </View>
);

HoldingsScreen.navigationOptions = {
  title: 'Holdings',
};

export default HoldingsScreen;
