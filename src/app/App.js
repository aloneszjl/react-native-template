// @flow
import React, { PureComponent } from 'react';
import AppNavigator from 'src/navigation/AppNavigator';
import { setCustomText, setCustomTouchableOpacity } from 'react-native-global-props';

const customTextProps = {
  style: {
    fontSize: 16,
    // fontFamily: 'pingFang',
    color: 'black',
    fontWeight: 'bold',
  },
};
setCustomTouchableOpacity(customTextProps);
setCustomText(customTextProps);
class App extends PureComponent<{}> {
  render() {
    return <AppNavigator />;
  }
}

export default App;
