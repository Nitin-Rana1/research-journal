import styles from "./styles/Header.module.scss";
function Header (){
    return(
        <header className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo.png" />
        <h3 className={styles.headerTitle}>
          International Journal of Science and Journal
        </h3>
        <h5 className={styles.headerSubTitle}>
          Amet minim mollit non deserunt ullamco est sit Amet minim mollit non
          deserunt
        </h5>
      </header>
        )
}
export default Header;