// @flow
import React from 'react';
import styled from 'styled-components';
import Touchable from 'src/components/Touchable';

const View = styled.View`
  background-color: papayawhip;
`;

const Text = styled.Text`
  color: palevioletred;
`;

const HomeScreen = ({ navigation }: { navigation: Object }) => (
  <View>
    <Touchable style={{ height: 30 }} onPress={() => navigation.navigate('Login', {})}>
      <Text>登录</Text>
    </Touchable>
    <Text>首页nihao</Text>
  </View>
);

export default HomeScreen;
