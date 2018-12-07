// @flow
import React, { createContext } from 'react';

type Context = {
  store: Object,
};
const StoreContext = createContext<Context>({ store: {} });

const asyncEpicidentifiers = {};

type DucksProps = {
  path: string,
  reducer: Function,
};
const injectDucks = ({ path, reducer }: DucksProps) => (WrappedComponent: any) => {
  const WithReducer = (props: Object) => (
    <StoreContext.Consumer>
      {({ store }) => {
        store.attachReducers({ [path]: reducer });
        return <WrappedComponent {...props} />;
      }}
    </StoreContext.Consumer>
  );

  return WithReducer;
};

type EpicProps = {
  path: string,
  epic: Function,
};
const injectEpic = ({ epic, path }: EpicProps) => (WrappedComponent: any) => {
  const WithEpic = (props: Object) => (
    <StoreContext.Consumer>
      {({ store }) => {
        if (!asyncEpicidentifiers[path]) {
          asyncEpicidentifiers[path] = epic;
          store.injectAsyncEpic(epic);
        }
        return <WrappedComponent {...props} />;
      }}
    </StoreContext.Consumer>
  );

  return WithEpic;
};

type EpicDucksProps = {
  path: string,
  epic: Function,
  reducer: Function,
};
const injectEpicDucks = ({ path, reducer, epic }: EpicDucksProps) => (WrappedComponent: any) => {
  const WithEpicDucks = (props: Object) => (
    <StoreContext.Consumer>
      {({ store }) => {
        store.attachReducers({ [path]: reducer });
        if (!asyncEpicidentifiers[path]) {
          asyncEpicidentifiers[path] = epic;
          store.injectAsyncEpic(epic);
        }
        return <WrappedComponent {...props} />;
      }}
    </StoreContext.Consumer>
  );

  return WithEpicDucks;
};

export { injectDucks, injectEpic, injectEpicDucks };

export default StoreContext;
