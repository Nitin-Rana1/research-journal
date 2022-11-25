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
import AboutUsC from '../components/AboutUs/AboutUsC';
import EditoryPolicyC from '../components/EditorialPolicy/EditoryPolicyC';
import CurrentIssueC from '../components/CurrentIssueC';

import { auth } from "../fireb/firebApp";
import { signOut } from "firebase/auth";
import Link from 'next/link';
import ListC from '../components/Drawer';

const AboutUs: NextPage = () => {
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
                    <ListC toggleDrawer={toggleDrawer} handleLogOut={handleLogOut} />
                </Drawer>
            </Fragment>

            <Header toggleDrawer={toggleDrawer} />
            <main className={styles.main}>
                <AboutUsC />
                <SideBar />
            </main>
            <Footer />
        </div>
    )
}

export default AboutUs;
