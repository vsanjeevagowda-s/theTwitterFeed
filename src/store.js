import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers';
import {
  watchGetFeeds,
  watchSearchFeeds,
  incrementNotificationWatch,
  showNotificationsWatcher,
  showErrorWatcher
} from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchGetFeeds);
sagaMiddleware.run(watchSearchFeeds);
sagaMiddleware.run(incrementNotificationWatch);
sagaMiddleware.run(showNotificationsWatcher);
sagaMiddleware.run(showErrorWatcher);
export default store;