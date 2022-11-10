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
const Home: NextPage = () => {
  //different pages
  const [homePageContent, setHomePageContent] = useState(true);
  const [submitRP, setSubmitRP] = useState(false);
  const [loginOrSignUp, setLoginOrSignUp] = useState(false);

  const setAllMainSectionFalse = () =>{
    // console.log("home", homePageContent);
    // console.log("sub", submitRP);
    // console.log("login", loginOrSignUp);
    setHomePageContent(false);
    setSubmitRP(false);
    setLoginOrSignUp(false);
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
        {['Home', 'Current Issue', 'Editorial Policy', 'About', 'Sign In', 'Sign Up'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <Inbox /> : index === 1 ? <Inbox/> : index === 2 ? <Inbox/> : index === 3 ? <Inbox/> : index === 4 ? <Inbox/> : index === 5 ? <Inbox/> : <Inbox/>}
              </ListItemIcon>
              {/* {index === 4 || index === 5 ? <ListItemText onClick={handleLoginOrSignUpButton} primary={text}/> : */}
            {index === 0 ? <ListItemText onClick={handleHomePageButton} primary={text}/> : index === 1 ? <ListItemText primary = {text} />: index === 2 ? <ListItemText primary = {text} /> : index === 3 ?<ListItemText primary = {text} />: <ListItemText onClick={handleLoginOrSignUpButton} primary = {text} />}
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
    setSubmitRP(true);
    setHomePageContent(false);
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

      <Header toggleDrawer = {toggleDrawer} handleloginOrSignUpButton = {handleLoginOrSignUpButton} handleHomePageButton = {handleHomePageButton}/>
      <main className={styles.main}>
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
