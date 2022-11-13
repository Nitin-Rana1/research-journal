import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from "../components/Header";
import SubmitRP from "../components/SubmitRP";
import HomePageContent from "../components/HomePageContent";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Inbox, Mail } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Fragment, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import LoginOrSignUp from "../components/LoginOrSignUp";
import AboutUs from '../components/AboutUs/AboutUs';
import EditoryPolicy from '../components/EditorialPolicy/EditoryPolicy';
import CurrentIssue from '../components/CurrentIssue';

import { auth } from "../fireb/firebApp";
import { signOut } from "firebase/auth";

const Home: NextPage = () => {
  //different pages
  const [homePageContent, setHomePageContent] = useState(true);
  const [submitRP, setSubmitRP] = useState(false);
  const [loginOrSignUp, setLoginOrSignUp] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const [aboutUsMenu, setAboutUsMenu] = useState(0);

  const [editoryPolicy, setEditoryPolicy] = useState(false);
  const [editoryPolicyMenu, setEditoryPolicyMenu] = useState(0);

  const [currentIssue, setCurrentIssue] = useState(false);


  const setAllMainSectionFalse = () => {
    setHomePageContent(false);
    setSubmitRP(false);
    setLoginOrSignUp(false);
    setAboutUs(false);
    setEditoryPolicy(false);
    setCurrentIssue(false);
  }

  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerState(open);
    };
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {/* {['Home', 'Current Issue', 'Editorial Policy', 'About Us', 'Sign In/ Up', 'Log Out'].map((text, index) => ( */}
        <div onClick={toggleDrawer(false)}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText onClick={handleHomePageButton} primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText onClick={handleCurrentIssuePageButton} primary="Current Issue" />
            </ListItemButton>
          </ListItem>
        </div>


        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Editorial Policy</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List onClick={toggleDrawer(false)} >
                {["Publication Ethics", "Open Access Policy", "Peer-review Policy", "Digital prevention Policy", "Plagiarism Policy", "Journal Policy", "Repository Policy", "Copy Right Policy"].map((value, i) => {
                  return (

                    <ListItem onClick={toggleDrawer(false)} className={styles.editoryPolicyMenu}>
                      <ListItemButton>
                        <ListItemText onClick={() => handleEditoryPolicyPageButton(i)} primary={value} />
                      </ListItemButton>
                    </ListItem>
                  )
                })}
              </List>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* <ListItem disablePadding>
            <ListItemButton>
            <ListItemText onClick={handleAboutUsPageButton} primary="About Us" />
            </ListItemButton>
          </ListItem> */}
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>About Us</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List onClick={toggleDrawer(false)} >
                {["About The Journal", "Focus And Scope", "Editorial Team"].map((value, i) => {
                  return (

                    <ListItem onClick={toggleDrawer(false)} className={styles.editoryPolicyMenu}>
                      <ListItemButton>
                        <ListItemText onClick={() => handleAboutUsPageButton(i)} primary={value} />
                      </ListItemButton>
                    </ListItem>
                  )
                })}
              </List>
            </AccordionDetails>
          </Accordion>
        </div>
        <div onClick={toggleDrawer(false)}>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText onClick={handleLoginOrSignUpButton} primary="Sign In/Up" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText onClick={handleLogOut} primary="Log Out" />
            </ListItemButton>
          </ListItem>
        </div>

      </List >
    </Box >
  );

  //Page navigation
  function handleHomePageButton() {
    setAllMainSectionFalse();
    setHomePageContent(true);
  }
  const handleLoginOrSignUpButton = () => {
    setAllMainSectionFalse();
    setLoginOrSignUp(true);
  }
  function handleSubmitPageButton() {
    setAllMainSectionFalse();
    setSubmitRP(true);
  }
  function handleAboutUsPageButton(i: number) {
    setAllMainSectionFalse();
    setAboutUsMenu(i);
    setAboutUs(true);
  }
  function handleEditoryPolicyPageButton(i: number) {
    setAllMainSectionFalse();
    setEditoryPolicyMenu(i);
    setEditoryPolicy(true);
  }
  function handleCurrentIssuePageButton() {
    setAllMainSectionFalse();
    setCurrentIssue(true);
  }
  function handleLogOut() {
    signOut(auth);
  }
  return (

    <div className={styles.body}>
      <Fragment key='left'>
        <Drawer
          anchor='left'
          open={drawerState}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </Fragment>

      <Header toggleDrawer={toggleDrawer} handleloginOrSignUpButton={handleLoginOrSignUpButton} handleHomePageButton={handleHomePageButton} handleAboutUsPageButton={handleAboutUsPageButton} handleCurrentIssuePageButton={handleCurrentIssuePageButton} handleEditoryPolicyPageButton={handleEditoryPolicyPageButton} handleLogOut={handleLogOut} />
      <main className={styles.main}>
        {editoryPolicy && <EditoryPolicy part={editoryPolicyMenu} />}
        {currentIssue && <CurrentIssue />}
        {aboutUs && <AboutUs part={aboutUsMenu} />}
        {loginOrSignUp && <LoginOrSignUp />}
        {submitRP && <SubmitRP />}
        {homePageContent && <HomePageContent handleSubmitPageButton={handleSubmitPageButton} />}
        <SideBar />
      </main>
      <Footer />
    </div>
  )
}

export default Home
