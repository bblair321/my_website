import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Brady's Mod Installers</h1>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Installers</a></li>
          <li><a href="/contact">Mods</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
