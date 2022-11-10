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

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Home: NextPage = () => {
  const [submitRP, setSubmitRP] = useState(false);
  const [homePageContent, setHomePageContent] = useState(true);
  // const [anchorOpen, setAnchorOpen] = useState(false);
  function handleSubmitButton(){
    setSubmitRP(true);
    setHomePageContent(false);
  }
  function handleHomePageButton(){
    setSubmitRP(false);
    setHomePageContent(true); 
  }
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer =
    (open: boolean) =>
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
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
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

      <Header toggleDrawer = {toggleDrawer}/>
      <main className={styles.main}>
        {submitRP && <SubmitRP handleHomePageButton = {handleHomePageButton}/>}
        {homePageContent && <HomePageContent handleSubmitButton = {handleSubmitButton}/>}
        <SideBar/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
