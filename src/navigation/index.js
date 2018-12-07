import { StackActions, NavigationActions } from 'react-navigation';
import navigationService from './NavigationService';

export const goLogin = params => {
  navigationService.navigate({ params, routeName: 'Login' });
};

export const goTransition = params => {
  navigationService.navigate({ params, routeName: 'Transition' });
};

export const goHoldings = params => {
  navigationService.authNavigate({ params, routeName: 'Holdings' });
};

export const goProfile = params => {
  navigationService.authNavigate({ params, routeName: 'Profile' });
};

export const resetToTab = routeName => {
  const resetAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [
      NavigationActions.navigate({
        routeName: 'Main',
        action: NavigationActions.navigate({
          routeName,
        }),
      }),
    ],
  });
  navigationService.reset(resetAction);
};

export const resetToProfile = () =>
  Promise.resolve()
    .then(() => resetToTab('TabCart'))
    .then(() => goProfile());
