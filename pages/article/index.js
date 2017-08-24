import { Component } from 'react';
import Layout from '../../styling/Layout';
import Comments from './Comments';

const styles = {
  article: {
    width: '70%',
    margin: '4rem auto',
  },
  title: {
    marginBottom: '2rem',
  },
  text: {
    whiteSpace: 'pre-wrap',
  },
};

export default class Article extends Component {
  render() {
    const { article } = this.props;

    return (
      <Layout>
        <article style={styles.article}>
          <h2 style={styles.title}>
            {article.title}
          </h2>
          <p style={styles.text}>
            {article.text}
          </p>

          {article.comments && <Comments comments={article.comments} />}
        </article>;
      </Layout>
    );
  }
}
