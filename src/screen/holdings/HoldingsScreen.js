// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { resetToProfile } from 'src/navigation';
import { SafeAreaView } from 'react-navigation';

const HoldingsScreen = () => (
  <SafeAreaView>
    <View style={{ height: 100 }} />
    <TouchableOpacity
      onPress={() => {
        resetToProfile('TabCart');
      }}
    >
      <Text>个人持仓</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

HoldingsScreen.navigationOptions = {
  headerTransparent: true,
  title: 'Holdings',
};

export default HoldingsScreen;
