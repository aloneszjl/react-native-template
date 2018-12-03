// @flow
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import './ignoreWarnings';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

type Props = {};
type State = { test: string };

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      test: '123',
    };
  }

  render() {
    const { test } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to my React Native App!</Text>
        <Text style={styles.instructions}>To get starteds{test}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

export default App;
