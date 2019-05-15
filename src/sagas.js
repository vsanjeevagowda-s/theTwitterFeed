import { takeEvery } from 'redux-saga/effects'
import { getFeeds, searchFeeds, incrementNotification,
  showNotifications, showError } from './actions/feed.actions';


export function *watchGetFeeds(){
  yield takeEvery('LIST_FEED_WATCH', getFeeds)
}

export function *watchSearchFeeds(){
  yield takeEvery('SEARCH_FEED_WATCH', searchFeeds)
}

export function *incrementNotificationWatch(){
  yield takeEvery('INCREMENT_NOTIFICATION_WATCH', incrementNotification)
}

export function *showNotificationsWatcher(){
  yield takeEvery('SHOW_NOTIFICATION_WATCH', showNotifications)
}

export function *showErrorWatcher(){
  yield takeEvery('SHOW_ERROR_WATCHER', showError)
}