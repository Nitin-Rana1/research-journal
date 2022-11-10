import styles from "./styles/Header.module.scss";
import {Menu} from '@mui/icons-material';

function Header({ toggleDrawer }: any) {
  return (
    <header className={styles.header}>
          
      <div className={styles.headerContent}>
        <img className={styles.logoIcon} alt="" src="/logo.png" />
        <h3 className={styles.headerTitle}>
          International Journal of Science and Journal
        </h3>
        <h5 className={styles.headerSubTitle}>
          Amet minim mollit non deserunt ullamco est sit Amet minim mollit non
          deserunt
        </h5>
      </div>
      <nav  className={styles.nav}>
        <span className={styles.icon}>
        <Menu onClick={toggleDrawer(true)} />
        </span>
        {['Home', 'Current Issue', 'Editorial Policy', 'About', 'Sign In', 'Sign Up'].map((val)=>(
          <div key={val} className={styles.menus}>
            {val}
          </div>
        ))}
      </nav>
    </header>
  )
}
export default Header;