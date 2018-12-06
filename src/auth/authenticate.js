// @flow
import React, { PureComponent } from 'react';

type Props = {
  isAuthenticated?: boolean,
  navigation: Object,
};
const authenticate = (navigationOptions: Object) => (ComponentToWrap: any) => {
  class Authenticate extends PureComponent<Props> {
    static defaultProps = {
      isAuthenticated: false,
    };

    static navigationOptions = navigationOptions;

    componentWillMount() {
      const { isAuthenticated, navigation } = this.props;
      if (!isAuthenticated) {
        navigation.navigate('Login', {
          refresh: this.refresh,
        });
      }
    }

    refresh = () => {
      const { isAuthenticated, navigation } = this.props;
      if (!isAuthenticated) {
        navigation.goBack();
      }
    };

    render() {
      return <ComponentToWrap {...this.props} />;
    }
  }
  return Authenticate;
};

export default authenticate;
