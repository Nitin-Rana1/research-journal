import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { padding } from '@mui/system';
import Header from "../components/Header";
import SubmitRP from "../components/SubmitRP";
import HomePageContent from "../components/HomePageContent";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";


import { useState } from 'react';


const Home: NextPage = () => {
  const [submitRP, setSubmitRP] = useState(false);
  const [homePageContent, setHomePageContent] = useState(true);
  function handleSubmitButton(){
    console.log("hell1"); 
    setSubmitRP(true);
    setHomePageContent(false);
  }
  function handleHomePageButton(){
    console.log("hell2");
    setSubmitRP(false);
    setHomePageContent(true); 
  }
  return (
    <div className={styles.body}>
      <Header/>
      <nav></nav>
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
