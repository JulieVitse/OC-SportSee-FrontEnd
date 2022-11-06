import styles from './SideNav.module.scss'
import iconBike from 'assets/icon_bike.svg'
import iconSwim from 'assets/icon_swimming.svg'
import iconYoga from 'assets/icon_yoga.svg'
import iconWeight from 'assets/icon_weight.svg'

function SideNav() {
    return (
      <aside className={styles.container}>
        
          <nav className={styles.nav}>
            <a className={styles.navItem} href="/">
              <img src={iconYoga} alt="Yoga" />
            </a>
            <a className={styles.navItem} href="/">
              <img src={iconSwim} alt="Swimming" />
            </a>
            <a className={styles.navItem} href="/">
              <img src={iconBike} alt="Biking" />
            </a>
            <a className={styles.navItem} href="/">
              <img src={iconWeight} alt="Weightlifting" />
            </a>
          </nav>
          <p className={styles.copyrights}>Copyright, SportSee 2020</p>
     
      </aside>
    )
}

export default SideNav