// @flow
import React, { PureComponent } from 'react';
import AppNavigator from 'src/navigation/AppNavigator';
import { PersistGate } from 'redux-persist/es/integration/react';
import { setCustomText, setCustomTouchableOpacity } from 'react-native-global-props';
import { persistor, store } from 'src/store/initializeStore';
import StoreProvider from 'src/store/StoreProvider';

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
    return (
      <StoreProvider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </StoreProvider>
    );
  }
}

export default App;
