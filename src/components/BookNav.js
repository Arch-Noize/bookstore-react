import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const BookNav = () => (
  <nav className={styles.navbar}>
    <h1>Bookstore</h1>
    <ul className={styles.list}>
      <li className={styles.navItem}><Link to="/" style={{ textDecoration: 'none' }}>BOOKS</Link></li>
      <li className={styles.navItem}><Link to="categories" style={{ textDecoration: 'none' }}>CATEGORIES</Link></li>
    </ul>
  </nav>
);

export default BookNav;
