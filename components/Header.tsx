import styles from "./styles/Header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../fireb/firebApp";
import { signOut } from "firebase/auth";

//infix to postfix using stack

function Header({ toggleDrawer }: any) {
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
  function handleLogOut() {
    signOut(auth);
  }
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* <div className={styles.logoIcon}> */}
        <Image
          src="/header.png"
          fill
          alt="logoPic"
          className={styles.headerImg}
        />
        {/* </div> */}
        <h3 className={styles.headerTitle}>
          Graphic Era Department of Science and Journal
        </h3>
        <h5 className={styles.headerSubTitle}>
          Established to help students in their Research
          <br />
          <b>Transforming Dreams into Reality</b>
        </h5>
        <Link href="/login-signup">
          <nav>
            <span>Register</span>
            <span>Log In</span>
          </nav>
        </Link>
      </div>
      <nav className={styles.nav}>
        <span className={styles.icon}>
          <MenuIcon onClick={toggleDrawer(true)} />
        </span>
        <Link href="/">
          <Button className={styles.menus} variant="text">
            Home
          </Button>
        </Link>
        <Link href="/current-issue">
          <Button className={styles.menus} variant="text">
            Current Issue
          </Button>
        </Link>
        <div className={styles.menus}>
          <Button
            id="basic-button"
            aria-controls={openEdit ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openEdit ? "true" : undefined}
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
              "aria-labelledby": "basic-button",
            }}
          >
            {[
              "Publication Ethics",
              "Open Access Policy",
              "Peer-review Policy",
              "Digital prevention Policy",
              "Plagiarism Policy",
              "Journal Policy",
              "Repository Policy",
              "Copy Right Policy",
            ].map((value, i) => {
              return (
                <Link key={i} href="/editory-policy">
                  <MenuItem
                    onClick={() => {
                      handleCloseEdit();
                    }}
                  >
                    {value}
                  </MenuItem>
                </Link>
              );
            })}
          </Menu>
        </div>
        {/* <Button onClick={handleAboutUsPageButton} className={styles.menus} variant="text">About</Button> */}
        <div className={styles.menus}>
          <Button
            id="basic-button"
            aria-controls={openAbout ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openAbout ? "true" : undefined}
            onClick={handleClickAbout}
            // className={styles.menus}
          >
            About
            <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElAbout}
            open={openAbout}
            onClose={handleCloseAbout}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {["About The Journal", "Focus & Scope", "Editorial Team"].map(
              (value, i) => {
                return (
                  <Link key={i} href="/about-us">
                    <MenuItem
                      onClick={() => {
                        handleCloseAbout();
                      }}
                    >
                      {value}
                    </MenuItem>
                  </Link>
                );
              }
            )}
          </Menu>
        </div>
        <Link href="/login-signup">
          <Button className={styles.menus} variant="text">
            Sign In/Up
          </Button>
        </Link>
        <Button onClick={handleLogOut} className={styles.menus} variant="text">
          Log Out
        </Button>
      </nav>
    </header>
  );
}
export default Header;
