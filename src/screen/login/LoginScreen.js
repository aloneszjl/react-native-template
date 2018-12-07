// @flow
import React from 'react';
import { View } from 'react-native';
import get from 'lodash/get';
import styled from 'styled-components';
import navigationService from 'src/navigation/NavigationService';
import { Button, Input, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
const LoginScreen = ({ navigation }: { navigation: Object }) => (
  <Container>
    <Divider style={{ backgroundColor: 'white', height: 10 }} />
    <Input placeholder="demo" leftIcon={<Icon name="user" size={24} color="black" />} />
    <Divider style={{ backgroundColor: 'white', height: 10 }} />

    <Input placeholder="demo" leftIcon={<Icon name="key" size={24} color="black" />} />
    <Divider style={{ backgroundColor: 'white', height: 10 }} />
    <Button
      raised
      buttonStyle={{
        width: '100%',
        borderRadius: 10,
      }}
      title="登录"
      onPress={() => {
        const navigationParams = get(navigation, 'state.params') || {};
        const { routeName, ...params } = navigationParams;
        navigationService.auth();
        if (!routeName) {
          navigation.pop();
        }
        navigationService.navigate({ routeName, params });
      }}
    />
  </Container>
);

LoginScreen.navigationOptions = ({ navigation }) => ({
  title: 'Login',
  headerLeft: (
    <Button
      buttonStyle={{
        paddingHorizontal: 8.5,
        paddingVertical: 3,
        marginTop: 5,
      }}
      onPress={() => {
        navigation.pop();
      }}
      title=""
      clear
      icon={<Icon size={20} color="#333333" name="close" />}
    />
  ),
});

export default LoginScreen;
