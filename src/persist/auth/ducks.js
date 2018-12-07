import { combineReducers } from 'redux';
import { createAction, createNamePrefix } from 'redux-observable-utils';
import get from 'lodash/get';
import { createSelector } from 'reselect';
import { NAME as PARENT_NAME } from '../constants';

export const NAME = 'AUTH';
export const PREFIXED_NAME = createNamePrefix(NAME, PARENT_NAME);

export const SET_TOKEN = `${PREFIXED_NAME}/SET_TOKEN`;
export const setToken = params => createAction(SET_TOKEN, { params });

const token = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      const newState = {
        ...state,
        ...action.params,
      };
      return newState;
    }
    default:
      return state;
  }
};

export const getAccessToken = state => get(state, `${NAME}.token.accessToken`);

export const HANDLE_AUTH = `${PREFIXED_NAME}/HANDLE_AUTH`;
export const handleAuth = params => createAction(HANDLE_AUTH, { params });
export const HANDLE_AUTH_SUCCESS = `${PREFIXED_NAME}/HANDLE_AUTH_SUCCESS`;
export const handleAuthSuccess = params => createAction(HANDLE_AUTH_SUCCESS, { params });
export const HANDLE_AUTH_FAILURE = `${PREFIXED_NAME}/HANDLE_AUTH_FAILURE`;
export const handleAuthFailure = params => createAction(HANDLE_AUTH_FAILURE, { params });

export const SET_ACCOUNT = `${NAME}/SET_ACCOUNT`;
export const setAccount = payload => createAction(SET_ACCOUNT, { payload });

const account = (state = {}, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getAccount = state => get(state, `${NAME}.account`);

export const getAccountNumber = createSelector(
  getAccount,
  selectAccount => get(selectAccount, 'accountNumber')
);

export const getRole = state => get(state, `${NAME}.role`);

export const isAuthenticated = createSelector(
  getAccountNumber,
  accountNumber => !!accountNumber
);

export const authorizeRequest = (conf, state) => {
  const config = { ...conf };
  const accessToken = getAccessToken(state);
  const originalHeaders = config.headers || {};
  if (accessToken && !originalHeaders.Authorization) {
    config.headers = {
      ...originalHeaders,
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return config;
};

const authReducer = combineReducers({
  account,
  token,
});

export default authReducer;
