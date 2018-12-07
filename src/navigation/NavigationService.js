import { NavigationActions } from 'react-navigation';

type NavigationState = {
  routeName: string,
  params?: Object,
  action: Object,
};

class NavigationService {
  constructor() {
    this.isAuthenticated = false;
  }

  setNavigator = navigator => {
    this.navigator = navigator;
  };

  setStore = store => {
    this.store = store;
  };

  auth = () => {
    this.isAuthenticated = true;
  };

  getNavigator = () => this.navigator;

  navigate = (navigationState: NavigationState) => {
    this.navigator.dispatch(NavigationActions.navigate(navigationState));
  };

  authNavigate = (navigationState: NavigationState) => {
    if (!this.isAuthenticated) {
      const navigationParams = navigationState.params || {};
      const params = {
        ...navigationParams,
        routeName: navigationState.routeName,
      };
      this.navigate({
        ...navigationState,
        routeName: 'Login',
        params,
      });
    } else {
      this.navigate(navigationState);
    }
  };

  reset = action => {
    this.navigator.dispatch(action);
  };
}

const navigationService = new NavigationService();

export default navigationService;
