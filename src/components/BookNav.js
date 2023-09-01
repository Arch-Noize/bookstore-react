import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const BookNav = () => (
  <nav className={styles.navbar}>
    <h1>Bookstore</h1>
    <ul className={styles.list}>
      <li className={styles.navItem}><Link to="/" style={{ textDecoration: 'none' }}>BOOKS</Link></li>
      <li className={styles.navItem}><Link to="categories" style={{ textDecoration: 'none' }}>CATEGORIES</Link></li>
    </ul>
    <img src="https://www.apkmirror.com/wp-content/themes/APKMirror/ap_resize/ap_resize.php?src=https%3A%2F%2Fdownloadr2.apkmirror.com%2Fwp-content%2Fuploads%2F2023%2F06%2F27%2F649982c38215a_com.meizu.account.png&w=96&h=96&q=100" alt="" />
  </nav>
);

export default BookNav;
