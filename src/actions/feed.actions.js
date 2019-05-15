import { put, call } from 'redux-saga/effects'

export const LIST_FEED = 'LIST_FEED';
export const LIST_FEED_SUCCESS = 'LIST_FEED_SUCCESS';
export const LIST_FEED_FAILURE = 'LIST_FEED_FAILURE';
export const SEARCH_FEED_SUCCESS = 'SEARCH_FEED_SUCCESS';
export const SEARCH_FEED_FAILURE = 'SEARCH_FEED_FAILURE';
export const INCREMENT_NOTIFICATION_SUCCESS = 'INCREMENT_NOTIFICATION_SUCCESS';
export const INCREMENT_NOTIFICATION_FAILURE = 'INCREMENT_NOTIFICATION_FAILURE';

const ROOT_URL = process.env.REACT_APP_ROOT_URL;

const requestData = async (path) => {
  const resp = await fetch(path);
  return resp.json()

}

export function* getFeeds(input) {
  const { data } = input;
  console.log('data', data);
  const URL = `${ROOT_URL}/feeds?searchInput=${data.searchInput}&page=${data.page}`;
  try {
    const resp = yield call(requestData, URL);
    yield put({ type: LIST_FEED_SUCCESS, resp });
  } catch (error) {
    yield put({ type: LIST_FEED_FAILURE, error });
  }
};

export function* searchFeeds(input) {
  console.log('data ===>', input);
  const URL = `${ROOT_URL}/searchFeed?searchInput=${input.searchInput}`;
  try {
    const resp = yield call(requestData, URL);
    yield put({ type: SEARCH_FEED_SUCCESS, resp });
  } catch (error) {
    yield put({ type: SEARCH_FEED_FAILURE, error });
  }
};

export function* incrementNotification(input){
  try{
    yield put({ type: INCREMENT_NOTIFICATION_SUCCESS, input });
  }catch(error){
    yield put({ type: INCREMENT_NOTIFICATION_FAILURE, error });
  }
}