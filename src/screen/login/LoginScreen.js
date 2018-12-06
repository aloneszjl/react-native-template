// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import get from 'lodash/get';
import styled from 'styled-components';
import Icon from 'src/components/Icon';
import navigationService from 'src/navigation/NavigationService';

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
        const navigationParams = get(navigation, 'state.params') || {};
        const { routeName, ...params } = navigationParams;
        navigationService.auth();
        if (!routeName) {
          navigation.pop();
        }
        navigationService.navigate({ routeName, params });
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
      <Icon fill="#606060" name="cross" />
    </TouchableOpacity>
  ),
});

export default LoginScreen;
