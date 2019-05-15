import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import './App.css';
import FeedList from './components/FeedList';
import Header from './components/Header';

class App extends Component {
  
  render() {
    return (
      <Container fluid>
        <Header />
        <Row>
          <Col sm={3}/>
          <Col className='bg-light' sm={6}>
            <FeedList />
          </Col>
          <Col sm={3}/>
        </Row>
      </Container>
    );
  }
}

export default App;
