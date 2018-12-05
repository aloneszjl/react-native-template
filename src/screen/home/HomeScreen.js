// @flow
import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

const View = styled.View`
  background-color: papayawhip;
`;

const Text = styled.Text`
  color: palevioletred;
`;

const HomeScreen = ({ navigation }: { navigation: Object }) => (
  <View>
    <Button title="login" onPress={() => navigation.navigate('Login')} />
    <Text>首页</Text>
  </View>
);

export default HomeScreen;
