import Link from 'next/link';

const styles = {
  nav: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  list: { listStyle: 'none', margin: 0, padding: 0, display: 'flex' },
  link: {
    color: 'gray',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
};

const Nav = () =>
  <nav style={styles.nav}>
    <ul style={styles.list}>
      <li>
        <Link href="/list">
          <a style={styles.link}>Home</a>
        </Link>
      </li>

      <li>
        <Link href={{ pathname: '/list', query: { category: 'cars' } }} prefetch>
          <a style={styles.link}>Cars</a>
        </Link>
      </li>
      <li>
        <Link href={{ pathname: '/list', query: { category: 'it' } }} prefetch>
          <a style={styles.link}>IT</a>
        </Link>
      </li>
      <li>
        <Link href={{ pathname: '/list', query: { category: 'xxx' } }} prefetch>
          <a style={styles.link}>XXX</a>
        </Link>
      </li>
    </ul>
  </nav>;

export default Nav;
