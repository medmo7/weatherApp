import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer, createTransform } from 'redux-persist';

import thunk from 'redux-thunk';
import JSOG from 'jsog';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducers/index';

const initialState = {};
const middleware = [thunk];

const JSOGTransform = createTransform(
  (inboundState, key) => JSOG.encode(inboundState),
  (outboundState, key) => JSOG.decode(outboundState),
);
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [JSOGTransform],
  //blacklist: [// add reducer],
  // use blacklist to reset redux states that
  // must be set to default every time the app launches
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
);
export const persistor = persistStore(store);
