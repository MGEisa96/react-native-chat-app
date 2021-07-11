import {createStore} from 'redux';

import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

import changeMsgReducer from '../reducer/changeMsgReducer';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['msgReduce'],
};
const persistedReducer = persistReducer(config, changeMsgReducer);
const store = createStore(persistedReducer);

export default store;
