import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './combinedReducers'; // where reducers is a object of reducers
import sagas from './combinedSaga';

const config = {
  timeout: 50000,
  key: 'root',
  storage: AsyncStorage,
  debug: true, //to get useful logging
  transforms: [],
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
  middleware.push(createLogger());
}

const persistedReducer = persistReducer(config, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: () => middleware,
});
const persistor = persistStore(store);
const storeConfig = () => {
  return {persistor, store};
};

sagaMiddleware.run(sagas);

export default storeConfig;
