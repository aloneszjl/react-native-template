// @flow
import React from 'react';
import { View, Text, Button } from 'react-native';

const FriendsScreen = ({ navigation }: { navigation: Object }) => (
  <View>
    <Button title="Holdings" onPress={() => navigation.navigate('Holdings')} />
    <Text>朋友</Text>
  </View>
);

export default FriendsScreen;
