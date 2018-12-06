// @flow
import React from 'react';
import { View, Text, Button } from 'react-native';
import { goHoldings } from 'src/navigation/index';

const FriendsScreen = () => (
  <View>
    <Button
      title="Holdings"
      onPress={() => {
        // navigation.navigate('Holdings')
        goHoldings({ test: 321 });
      }}
    />
    <Text>朋友</Text>
  </View>
);

export default FriendsScreen;
