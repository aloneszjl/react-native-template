// @flow
import React, { PureComponent } from 'react';
import { createAppContainer } from 'react-navigation';
import RootNavigator from './RootNavigator';
import navigationService from './NavigationService';

const AppContainer = createAppContainer(RootNavigator);

class AppNavigator extends PureComponent<{}> {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          navigationService.setNavigator(navigatorRef);
        }}
        {...this.props}
      />
    );
  }
}

export default AppNavigator;
