const styles = {
  article: {
    margin: '1em 0',
  },
  link: {
    color: 'gray',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
};

const Article = ({ article }) =>
  <li style={styles.article}>
    <a style={styles.link}>
      {article.title}
    </a>
  </li>;

export default Article;
