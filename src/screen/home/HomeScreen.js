// @flow
import React from 'react';
import styled from 'styled-components';

const View = styled.View`
  background-color: papayawhip;
`;

const Text = styled.Text`
  color: palevioletred;
`;

const HomeScreen = () => (
  <View>
    <Text>首页</Text>
  </View>
);

export default HomeScreen;
