// @flow
import React from 'react';
import { Provider } from 'react-redux';
import StoreContext from './StoreContext';

type Props = {
  children: any,
  store: Object,
};

const StoreProvider = ({ children, store }: Props) => (
  <Provider store={store}>
    <StoreContext.Provider value={{ store }}>{children}</StoreContext.Provider>
  </Provider>
);

export default StoreProvider;
