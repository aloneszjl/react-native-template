import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import persist from '../persist';
import persistConfig from '../persist/config';

const appReducer = combineReducers({
  [persist.ducks.NAME]: persist.reducer,
});

// const enhancer = compose(logoutReducer);

// const persistedState = state => ({
//   [persist.NAME]: state[persist.NAME],
// });

const rootReducer = persistReducer(persistConfig, appReducer);

export default rootReducer;
