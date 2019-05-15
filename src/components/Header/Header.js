import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import SearchBar from '../SearchBar'

class Header extends Component {
  render() {
    const { notificationCount } = this.props;
    return (
      <Row className='bg-secondary text-light mb-2 py-2'>
        <Col className='display-flex align-items-center' sm={2} xs={12}>
          <h2 className='text-center width-100pc'>Twitter</h2>
        </Col>
        <Col sm={6} />
        <Col sm={4} xs={12} className='display-flex align-items-center pos-rel'>
          <i className="cursor-pointer fa fa-bell fa-2x"></i><span className='pos-ab text-light notification-count text-center'>{notificationCount}</span>
          <SearchBar />
        </Col>
      </Row>
    )
  }
};

export default Header;
