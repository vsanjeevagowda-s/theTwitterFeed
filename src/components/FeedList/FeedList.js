import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';
import {
  Row,
  Col,
  CardImg,
} from 'reactstrap';

const io = sailsIOClient(socketIOClient);
io.sails.url = process.env.REACT_APP_ROOT_URL;

class Feed extends Component {
  render() {
    const { item } = this.props;
    console.log('item', item);
    console.log('=========')
    return (
      <Row className='border p-2'>
        <Col sm={2} xs={2}>
          <CardImg src={item.user.profile_image_url_https}
            className='border-radius-50pc' />
        </Col>
        <Col sm={10}>
          <Row>
            <Col sm={12}>
              <span className='font-weight-bold'>{item.user.name}</span>
              <span className='ml-2 text-secondary'>@{item.user.screen_name}</span>
            </Col>
            <Col sm={12}>
              <p>{item.text}</p>
            </Col>
            <Col sm={12}>
              <CardImg src={item.user.profile_banner_url} />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

class FeedList extends Component {
  constructor(props){
    super(props);
    this.handleNotifiySuccessEvent = this.handleNotifiySuccessEvent.bind(this);
    this.handleNotifyErrorEvent = this.handleNotifyErrorEvent.bind(this);

  }

  handleNotifiySuccessEvent(data){
    const { incrementNotification } = this.props;
    incrementNotification(data);
  }

  handleNotifyErrorEvent(error){
    const { showError } = this.props;
    showError(error);
  }

  componentDidMount() {
    const { listFeeds, page, searchInput } = this.props;
    io.socket.on('notificationSuccessEvent', this.handleNotifiySuccessEvent);
    io.socket.on('notificationErrorEvent', this.handleNotifyErrorEvent);
    const data = {
      searchInput,
      page,
    }
    listFeeds(data);
  }

  loadMoreFeeds() {
    const { listFeeds, page, searchInput } = this.props;
    const data = {
      searchInput,
      page: page+1,
    }
    listFeeds(data);
  }

  render() {
    const { feeds, page } = this.props;
    return <div>
      {feeds.map(item => {
        return <Feed item={item} key={item.id} />
      })}
      {(page !== 10) && <Row className='mt-2'>
        <Col>
          <div onClick={() => this.loadMoreFeeds()} className='text-center text-secondary  cursor-pointer'>Load More...</div>
        </Col>
      </Row>}
    </div>
  }
}
export default FeedList;