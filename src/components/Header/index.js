import Header from './Header'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { notificationCount } = state.feed;
  return { notificationCount }
};

export default connect(mapStateToProps, {})(Header);