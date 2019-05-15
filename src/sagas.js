import { takeEvery } from 'redux-saga/effects'
import { getFeeds, searchFeeds, incrementNotification } from './actions/feed.actions';


export function *watchGetFeeds(){
  yield takeEvery('LIST_FEED_WATCH', getFeeds)
}

export function *watchSearchFeeds(){
  yield takeEvery('SEARCH_FEED_WATCH', searchFeeds)
}

export function *incrementNotificationWatch(){
  yield takeEvery('INCREMENT_NOTIFICATION_WATCH', incrementNotification)
}