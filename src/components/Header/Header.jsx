import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Brady's Mod Installers</h1>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Installers</Link></li>
          <li><Link to="/contact">Mods</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
