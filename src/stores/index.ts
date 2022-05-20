import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['storage'],
};
let middleware = [];
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, ...middleware)),
);
sagaMiddleware.run(rootSaga);
// persistStore(store).purge()
persistStore(store);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
