// @flow
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Icon from 'src/components/Icon';

const RotatedBox = styled.View`
  padding: 10px;
  background-color: blueviolet;
`;

const Text = styled.Text`
  color: palevioletred;
`;

const CartScreen = () => (
  <RotatedBox>
    <Icon name="Cart" />
    <View style={{ height: 50 }} />
    <Text>购物车</Text>
  </RotatedBox>
);

export default CartScreen;
