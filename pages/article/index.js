import { Component } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../styling/Layout';
import { getArticle } from '../../api';

const DynamicComments = dynamic(import('./Comments'), { ssr: false, loading: () => <p>Lading Comments...</p> });

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
  static async getInitialProps({ query }) {
    const article = await getArticle({ id: query.id });

    return { article };
  }

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

          {article.comments && <DynamicComments comments={article.comments} />}
        </article>;
      </Layout>
    );
  }
}
