import { Component } from 'react';
import Layout from '../../styling/Layout';
import List from './List';

class ArticlesList extends Component {
  render() {
    return (
      <Layout>
        <List articles={this.props.list} />
      </Layout>
    );
  }
}

export default ArticlesList;
