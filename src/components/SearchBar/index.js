import SearchBar from './SearchBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchFeeds: (searchInput) => dispatch({type: 'SEARCH_FEED_WATCH', searchInput})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);