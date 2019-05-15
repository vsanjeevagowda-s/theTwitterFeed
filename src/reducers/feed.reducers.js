import {
  LIST_FEED_SUCCESS,
  SEARCH_FEED_SUCCESS,
  SEARCH_FEED_FAILURE,
  INCREMENT_NOTIFICATION_SUCCESS,
  INCREMENT_NOTIFICATION_FAILURE,
  SHOW_NOTIFICATIONS,
  SHOW_ERROR
} from '../actions/feed.actions.js';


const initialState = {
  feeds: [],
  page: 1,
  searchInput: 'nodejs',
  notificationCount: 0,
  notifications: [],
  error: '',
}

const feed = (state = initialState, action) => {
  switch(action.type){
    case LIST_FEED_SUCCESS:
    return {
      ...state,
      feeds: state.feeds.concat(action.resp.tweets),
      page: action.resp.page,
      searchInput: action.resp.searchInput,
    }
    case SEARCH_FEED_SUCCESS:
    return {
      ...state,
      feeds: action.resp.tweets,
      page: 1,
    }
    case INCREMENT_NOTIFICATION_SUCCESS:
    console.log('action', action);
    const newArr = [];
    state.notifications.map(i => newArr.push(i));
    newArr.push(action.input.data)
    console.log('newArr ==>', newArr);
    return {
      ...state,
      notificationCount: state.notificationCount + 1,
      notifications: newArr,
    }
    case SHOW_NOTIFICATIONS:
    const newfeedArr = [];
    state.feeds.map(i => newfeedArr.push(i));
    state.notifications.map(i => newfeedArr.unshift(i));
    console.log('newfeedArr ==>', newfeedArr);
    return{
      ...state,
      feeds: newfeedArr,
      notifications: [],
      notificationCount: 0
    }
    case SHOW_ERROR:
    return {
      ...state,
      error: action.error.data.error,
    }
    default:
    return state;
  }
}
export default feed;