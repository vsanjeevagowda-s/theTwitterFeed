import {
  LIST_FEED_SUCCESS,
  SEARCH_FEED_SUCCESS,
  SEARCH_FEED_FAILURE,
  INCREMENT_NOTIFICATION_SUCCESS,
  INCREMENT_NOTIFICATION_FAILURE,
} from '../actions/feed.actions.js';


const initialState = {
  feeds: [],
  page: 1,
  searchInput: 'nodejs',
  notificationCount: 0,
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
    return {
      ...state,
      notificationCount: state.notificationCount + 1,
    }
    default:
    return state;
  }
}
export default feed;