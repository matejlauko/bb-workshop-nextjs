import { Component } from 'react';
import Layout from '../styling/Layout';
import Router from 'next/router';

class Homepage extends Component {
  componentDidMount() {
    Router.replace('/list');
  }

  render() {
    return <div />;
  }
}

export default Homepage;
