// @flow
import React, { PureComponent } from 'react';
import { View, StatusBar, Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from 'src/components/Icon';
import { SafeAreaView } from 'react-navigation';
import { goTransition } from 'src/navigation/index';

const Background = styled(SafeAreaView)`
  padding: 10px;
  background-color: blueviolet;
`;

const Text = styled.Text`
  color: palevioletred;
`;

type Props = {
  navigation: Object,
};

class CartScreen extends PureComponent<Props> {
  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('willFocus', this.handlewillFocus);
    navigation.addListener('willBlur', this.handleWillBlur);
  }

  handlewillFocus = () => {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS !== 'ios') {
      StatusBar.setBackgroundColor('blueviolet');
    }
  };

  handleWillBlur = () => {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS !== 'ios') {
      StatusBar.setBackgroundColor('white');
    }
  };

  render() {
    return (
      <Background>
        <Icon name="Cart" />
        <View style={{ height: 50 }} />
        <Text>购物车</Text>
        <TouchableOpacity
          onPress={() => {
            goTransition({});
          }}
        >
          <Text>个人持仓</Text>
        </TouchableOpacity>
      </Background>
    );
  }
}

export default CartScreen;
