import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import dynostore, { dynamicReducers } from '@redux-dynostore/core';
import { persistStore } from 'redux-persist';
import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import navigationService from 'src/navigation/NavigationService';
import rootEpic from 'src/epics';
import rootReducer from 'src/ducks';

const epicMiddleware = createEpicMiddleware();
const dynamicReducerMiddleware = dynostore(dynamicReducers());
const enhancers = [epicMiddleware];

if (process.env.NODE_ENV !== 'production') {
  enhancers.push(require('redux-logger').createLogger());
}

const composedEnhancers = compose(
  applyMiddleware(...enhancers),
  dynamicReducerMiddleware
);

const initializeStore = initialState => {
  const store = createStore(rootReducer, initialState, composedEnhancers);
  navigationService.setStore(store);
  const epic$ = new BehaviorSubject(rootEpic);
  const hotReloadingEpic = (...args) => epic$.pipe(mergeMap(epic => epic(...args)));

  epicMiddleware.run(hotReloadingEpic);

  // inject async epic
  store.injectAsyncEpic = asyncEpic => epic$.next(asyncEpic);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('src/epics', () => {
      const nextRootEpic = require('src/epics').default;
      epic$.replaceEpic(nextRootEpic);
    });
    module.hot.accept('src/ducks', () => {
      const nextRootReducer = require('src/ducks').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  const persistor = persistStore(store);
  return { persistor, store };
};

const { persistor, store } = initializeStore({});

export { persistor, store };
