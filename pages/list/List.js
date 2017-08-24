import Article from './Article';

const styles = {
  list: {
    listStyle: 'square',
    width: '70%',
    margin: '4rem auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  },
};

const List = ({ articles }) =>
  <ul style={styles.list}>
    {articles.map(article => <Article article={article} key={article.id} />)}
  </ul>;

export default List;
