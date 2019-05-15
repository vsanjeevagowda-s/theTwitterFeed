import FeedList from './FeedList'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { feeds, page, searchInput, notificationCount } = state.feed;
  return { feeds, page, searchInput, notificationCount }
};

const mapDispatchToProps = (dispatch) => {
  return {
    listFeeds: (data) => dispatch({ type: 'LIST_FEED_WATCH', data }),
    incrementNotification: (data) => dispatch({ type: 'INCREMENT_NOTIFICATION_WATCH' , data })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);