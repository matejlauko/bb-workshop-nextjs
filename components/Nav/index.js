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
        <a style={styles.link}>Home</a>
      </li>

      <li>
        <a style={styles.link}>Cars</a>
      </li>
      <li>
        <a style={styles.link}>IT</a>
      </li>
      <li>
        <a style={styles.link}>XXX</a>
      </li>
    </ul>
  </nav>;

export default Nav;
