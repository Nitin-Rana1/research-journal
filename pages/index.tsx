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
import { Inbox , Mail} from '@mui/icons-material';
import { Fragment, useState } from 'react';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LoginOrSignUp from "../components/LoginOrSignUp";
import AboutUs from '../components/AboutUs';
import EditoryPolicy from '../components/EditoryPolicy';
import CurrentIssue from '../components/CurrentIssue';

import { auth } from "../fireb/firebApp";
import { signOut } from "firebase/auth";

const Home: NextPage = () => {
  //different pages
  const [homePageContent, setHomePageContent] = useState(true);
  const [submitRP, setSubmitRP] = useState(false);
  const [loginOrSignUp, setLoginOrSignUp] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const [editoryPolicy, setEditoryPolicy] = useState(false);
  const [currentIssue, setCurrentIssue] = useState(false);

  const setAllMainSectionFalse = () =>{
    setHomePageContent(false);
    setSubmitRP(false);
    setLoginOrSignUp(false);
    setAboutUs(false);
    setEditoryPolicy(false);
    setCurrentIssue(false);
  }
 
  const [drawerState, setDrawerState] = useState(false);
  
  const toggleDrawer =(open: boolean) =>
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
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      >
      <List>
        {['Home', 'Current Issue', 'Editorial Policy', 'About Us', 'Sign In/ Up', 'Log Out'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <Inbox /> : index === 1 ? <Inbox/> : index === 2 ? <Inbox/> : index === 3 ? <Inbox/> : index === 4 ? <Inbox/> : index === 5 ? <Inbox/> : <Inbox/>}
              </ListItemIcon>
              {/* {index === 4 || index === 5 ? <ListItemText onClick={handleLoginOrSignUpButton} primary={text}/> : */}
            {index === 0 ? <ListItemText onClick={handleHomePageButton} primary={text}/> : index === 1 ? <ListItemText onClick={handleCurrentIssuePageButton} primary = {text} />: index === 2 ? <ListItemText onClick={handleEditoryPolicyPageButton} primary = {text} /> : index === 3 ?<ListItemText onClick={handleAboutUsPageButton} primary = {text} />: index === 4 ? <ListItemText onClick={handleLoginOrSignUpButton} primary = {text} />: <ListItemText onClick={handleLogOut} primary = {text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  //Page navigation
  function handleHomePageButton(){
    setAllMainSectionFalse();
    setHomePageContent(true); 
  }
  const handleLoginOrSignUpButton = () =>{
    setAllMainSectionFalse();
    setLoginOrSignUp(true);
  }
  function handleSubmitPageButton(){
    setAllMainSectionFalse();
    setSubmitRP(true);
  }
  function handleAboutUsPageButton(){
    setAllMainSectionFalse();
    setAboutUs(true);
  }
  function handleEditoryPolicyPageButton(){
    setAllMainSectionFalse();
    setEditoryPolicy(true);
  }
  function handleCurrentIssuePageButton(){
    setAllMainSectionFalse();
    setCurrentIssue(true);
  }
  function handleLogOut(){
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

      <Header toggleDrawer = {toggleDrawer} handleloginOrSignUpButton = {handleLoginOrSignUpButton} handleHomePageButton = {handleHomePageButton} handleAboutUsPageButton = {handleAboutUsPageButton} handleCurrentIssuePageButton={handleCurrentIssuePageButton} handleEditoryPolicyPageButton={handleEditoryPolicyPageButton} handleLogOut = {handleLogOut}/>
      <main className={styles.main}>
        {editoryPolicy && <EditoryPolicy/>}
        {currentIssue && <CurrentIssue/>}
        {aboutUs && <AboutUs/>}
        {loginOrSignUp && <LoginOrSignUp/>}
        {submitRP && <SubmitRP handleHomePageButton = {handleHomePageButton}/>}
        {homePageContent && <HomePageContent handleSubmitPageButton = {handleSubmitPageButton}/>}
        <SideBar/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
