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
import LoginOrSignUp from "../components/LoginAndUser/LoginOrSignUp";
import AboutUs from '../components/AboutUs/AboutUsC';
import EditoryPolicy from '../components/EditorialPolicy/EditoryPolicyC';
import CurrentIssueC from '../components/CurrentIssueC';

import { auth } from "../fireb/firebApp";
import { signOut } from "firebase/auth";
import Link from 'next/link';

const CurrentIssue: NextPage = () => {
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
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <div onClick={toggleDrawer(false)}>
                    <ListItem disablePadding>
                        <Link href="/">
                            <ListItemButton>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link href="/current-issue">
                            <ListItemButton>
                                <ListItemText primary="Current Issue" />
                            </ListItemButton>
                        </Link>
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
                                        <ListItem key={i} onClick={toggleDrawer(false)} className={styles.editoryPolicyMenu}>
                                            <Link href="/editory-policy">
                                                <ListItemButton>
                                                    <ListItemText primary={value} />
                                                </ListItemButton>
                                            </Link>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </div>
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

                                        <ListItem key={i} onClick={toggleDrawer(false)} className={styles.editoryPolicyMenu}>
                                            <Link href="/about-us">
                                                <ListItemButton>
                                                    <ListItemText primary={value} />
                                                </ListItemButton>
                                            </Link>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div onClick={toggleDrawer(false)}>


                    <ListItem disablePadding>
                        <Link href="/login-signup">
                            <ListItemButton>
                                <ListItemText primary="Sign In/Up" />
                            </ListItemButton>
                        </Link>
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

            <Header toggleDrawer={toggleDrawer} />
            <main className={styles.main}>
                <CurrentIssueC />
                <SideBar />
            </main>
            <Footer />
        </div>
    )
}

export default CurrentIssue;
