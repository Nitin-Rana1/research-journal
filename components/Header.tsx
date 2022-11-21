import styles from "./styles/Header.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Image from "next/image";

function Header({ toggleDrawer, handleloginOrSignUpButton, handleHomePageButton,
  handleAboutUsPageButton, handleCurrentIssuePageButton,
  handleEditoryPolicyPageButton, handleLogOut }: any) {
  const [anchorElEdit, setAnchorElEdit] = useState<null | HTMLElement>(null);
  const [anchorElAbout, setAnchorElAbout] = useState<null | HTMLElement>(null);

  const openEdit = Boolean(anchorElEdit);
  const openAbout = Boolean(anchorElAbout);

  const handleClickEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElEdit(event.currentTarget);
  };
  const handleCloseEdit = () => {
    setAnchorElEdit(null);
  };
  const handleClickAbout = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElAbout(event.currentTarget);
  };
  const handleCloseAbout = () => {
    setAnchorElAbout(null);
  };

  return (
    <header className={styles.header}>

      <div className={styles.headerContent}>
        <div className={styles.logoIcon}>
          <Image src="/logo.png" fill alt="logoPic" />
        </div>
        <h3 className={styles.headerTitle}>
          Graphic Era Department of Science and Journal
        </h3>
        <h5 className={styles.headerSubTitle}>
          Established to help students in their Research<br />
          <b>Transforming Dreams into Reality</b>
        </h5>
        <nav onClick={handleloginOrSignUpButton}>
          <span>Register</span>
          <span>Log In</span>
        </nav>
      </div>
      <nav className={styles.nav}>
        <span className={styles.icon}>
          <MenuIcon onClick={toggleDrawer(true)} />
        </span>
        <Button onClick={handleHomePageButton} className={styles.menus} variant="text">Home</Button>
        <Button onClick={handleCurrentIssuePageButton} className={styles.menus} variant="text">Current Issue</Button>
        <div className={styles.menus}>
          <Button
            id="basic-button"
            aria-controls={openEdit ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openEdit ? 'true' : undefined}
            onClick={handleClickEdit}
          // className={styles.menus}
          >
            Editorial Policies <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElEdit}
            open={openEdit}
            onClose={handleCloseEdit}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {["Publication Ethics", "Open Access Policy", "Peer-review Policy", "Digital prevention Policy", "Plagiarism Policy", "Journal Policy", "Repository Policy", "Copy Right Policy"].map((value, i) => {
              return (
                <MenuItem key={i} onClick={() => { handleCloseEdit(); handleEditoryPolicyPageButton(i) }}>{value}</MenuItem>
              )
            })}
          </Menu>
        </div>
        {/* <Button onClick={handleAboutUsPageButton} className={styles.menus} variant="text">About</Button> */}
        <div className={styles.menus}>
          <Button
            id="basic-button"
            aria-controls={openAbout ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openAbout ? 'true' : undefined}
            onClick={handleClickAbout}
          // className={styles.menus}
          >
            About<KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElAbout}
            open={openAbout}
            onClose={handleCloseAbout}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {["About The Journal", "Focus & Scope", "Editorial Team"].map((value, i) => {
              return (
                <MenuItem key={i} onClick={() => { handleCloseAbout(); handleAboutUsPageButton(i) }}>{value}</MenuItem>
              )
            })}
          </Menu>
        </div>

        <Button onClick={handleloginOrSignUpButton} className={styles.menus} variant="text">Sign In/Up</Button>
        <Button onClick={handleLogOut} className={styles.menus} variant="text">Log Out</Button>


      </nav>
    </header>
  )
}
export default Header;