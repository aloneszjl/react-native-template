// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { resetToProfile } from 'src/navigation';

const HoldingsScreen = () => (
  <View>
    <View style={{ height: 100 }} />
    <TouchableOpacity
      onPress={() => {
        resetToProfile('TabCart');
      }}
    >
      <Text>个人持仓</Text>
    </TouchableOpacity>
  </View>
);
HoldingsScreen.navigationOptions = () => ({
  title: 'Holdings',
});

export default HoldingsScreen;
