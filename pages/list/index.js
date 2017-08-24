import { Component } from 'react';
import { getArticlesList } from '../../api';
import Layout from '../../styling/Layout';
import List from './List';

class ArticlesList extends Component {
  /**
   * pathname - path section of URL
   * query - query string section of URL parsed as an object
   * asPath - the actual url path
   * req - HTTP request object (server only)
   * res - HTTP response object (server only)
   * jsonPageRes - Fetch Response object (client only)
   * err - Error object if any error is encountered during the rendering
   */
  static async getInitialProps({ query }) {
    let list = await getArticlesList();
    const category = query.category;

    if (category) {
      list = list.filter(article => article.category === category);
    }

    return { list };
  }

  render() {
    return (
      <Layout>
        <List articles={this.props.list} />
      </Layout>
    );
  }
}

export default ArticlesList;
