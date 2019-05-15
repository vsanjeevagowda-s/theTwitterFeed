import FeedList from './FeedList'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { feeds, page, searchInput, notificationCount, error} = state.feed;
  return { feeds, page, searchInput, notificationCount, error }
};

const mapDispatchToProps = (dispatch) => {
  return {
    listFeeds: (data) => dispatch({ type: 'LIST_FEED_WATCH', data }),
    incrementNotification: (data) => dispatch({ type: 'INCREMENT_NOTIFICATION_WATCH' , data }),
    showNotifications: () => dispatch({ type: 'SHOW_NOTIFICATION_WATCH' }),
    showError: (data) => dispatch({ type: 'SHOW_ERROR_WATCHER', data })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);