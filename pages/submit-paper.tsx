import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import SubmitRP from "../components/SubmitRP";
import HomePageContent from "../components/HomePageContent";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Inbox, Mail } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import LoginOrSignUp from "../components/LoginAndUser/LoginOrSignUp";
import AboutUs from "../components/AboutUs/AboutUsC";
import EditoryPolicy from "../components/EditorialPolicy/EditoryPolicyC";
import CurrentIssueC from "../components/CurrentIssueC";

import { auth } from "../fireb/firebApp";
import { signOut } from "firebase/auth";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import ListC from "../components/Drawer";

const SubmitPaper: NextPage = () => {
  const [drawerState, setDrawerState] = useState(false);

  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (!user && !loading && !error) {
      router.push("/login-signup");
      console.log("DONE");
    }
  }, [user, loading, error]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
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
      <Fragment key="left">
        <Drawer anchor="left" open={drawerState} onClose={toggleDrawer(false)}>
          <ListC toggleDrawer={toggleDrawer} handleLogOut={handleLogOut} />
        </Drawer>
      </Fragment>

      <Header toggleDrawer={toggleDrawer} />
      <main className={styles.main}>
        <SubmitRP />
        <SideBar />
      </main>
      <Footer />
    </div>
  );
};

export default SubmitPaper;
