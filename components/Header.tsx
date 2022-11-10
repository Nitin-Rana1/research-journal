import styles from "./styles/Header.module.scss";
import {Menu} from '@mui/icons-material';
import { Button } from "@mui/material";

function Header({ toggleDrawer, handleloginOrSignUpButton, handleHomePageButton, handleAboutUsPageButton, handleCurrentIssuePageButton, handleEditoryPolicyPageButton, handleLogOut}: any) {
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
        {/* {['Home', 'Current Issue', 'Editorial Policy', 'About', 'Sign In', 'Sign Up'].map((val, index)=>(
          {index === 4 || index === 5 ? <Button key = {val} onClick={handleloginOrSignUpButton} className = {styles.menus} variant="text">{val}</Button> : <Button key = {val} className = {styles.menus} variant="text">{val}</Button>}
        ))} */}
        {/* {['Home', 'Current Issue', 'Editorial Policy', 'About', 'Sign In', 'Sign Up'].map((val, index)=>{
          {index === 4? <Button key = {val} onClick={handleloginOrSignUpButton} className = {styles.menus} variant="text">{val}</Button>  : <Button key = {val} className = {styles.menus} variant="text">{val}</Button>}
        })} */}
        <Button onClick={handleHomePageButton} className = {styles.menus} variant="text">Home</Button>
        <Button onClick = {handleCurrentIssuePageButton} className = {styles.menus} variant="text">Current Issue</Button>
        <Button onClick= {handleEditoryPolicyPageButton} className = {styles.menus} variant="text">Editorial Policy</Button>
        <Button onClick={handleAboutUsPageButton} className = {styles.menus} variant="text">About</Button>


        <Button onClick={handleloginOrSignUpButton} className = {styles.menus} variant="text">Sign In/Up</Button>
        <Button onClick={handleLogOut} className = {styles.menus} variant="text">Log Out</Button>


      </nav>
    </header>
  )
}
export default Header;