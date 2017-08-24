import Link from 'next/link';

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
    <Link href={{ pathname: '/article', query: { id: article.id } }} as={`/article/${article.id}`}>
      <a style={styles.link}>
        {article.title}
      </a>
    </Link>
  </li>;

export default Article;
