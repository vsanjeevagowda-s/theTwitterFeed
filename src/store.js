import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers';
import {
  watchGetFeeds,
  watchSearchFeeds,
  incrementNotificationWatch
} from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchGetFeeds);
sagaMiddleware.run(watchSearchFeeds);
sagaMiddleware.run(incrementNotificationWatch);

export default store;