import Nav from '../components/Nav';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottom: '1px solid gray',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '3em',
  },
};

export default ({ children }) =>
  <div>
    <header style={styles.header}>
      <h1 style={styles.title}>Blogísek</h1>

      <Nav />
    </header>

    {children}
  </div>;
