import { combineReducers } from 'redux';
import { NAME } from './constants';
import auth from './auth';

export { NAME };
export default combineReducers({
  [auth.ducks.NAME]: auth.reducer,
});
