// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from 'src/components/Icon';

const View = styled.View`
  background-color: papayawhip;
`;

const Text = styled.Text`
  color: palevioletred;
`;

const LoginScreen = ({ navigation }: { navigation: Object }) => (
  <View>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate({
          routeName: 'Profile',
        });
      }}
    >
      <Text>登录</Text>
    </TouchableOpacity>
  </View>
);

LoginScreen.navigationOptions = ({ navigation }) => ({
  title: 'Login',
  headerLeft: (
    <TouchableOpacity
      style={{
        paddingHorizontal: 8.5,
        paddingVertical: 3,
        marginTop: 3,
      }}
      onPress={() => {
        navigation.pop();
      }}
    >
      <Icon name="cross" />
    </TouchableOpacity>
  ),
});

export default LoginScreen;
