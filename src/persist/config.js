import createSensitiveStorage from 'redux-persist-sensitive-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import config from '../config';
import { NAME } from './constants';

const storage = createSensitiveStorage({
  keychainService: config.STORE_SECRET,
  sharedPreferencesName: 'rnLearning',
});

const persistConfig = {
  storage,
  key: 'ROOT',
  whitelist: [NAME],
  stateReconciler: autoMergeLevel2,
};

export default persistConfig;
