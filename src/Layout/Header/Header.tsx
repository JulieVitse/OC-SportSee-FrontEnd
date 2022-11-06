import logo from 'assets/logo.svg'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="SportSee Logo" />
      <nav>
        <ul className={styles.nav}>
          <li>
            <a href="/" className={styles.navLink}>
              Accueil
            </a>
          </li>
          <li>
            <a href="/" className={styles.navLink}>
              Profil
            </a>
          </li>
          <li>
            <a href="/" className={styles.navLink}>
              Réglage
            </a>
          </li>
          <li>
            <a href="/" className={styles.navLink}>
              Communauté
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
