import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { NavBar } from '@/components/NavBar/NavBar'
import { SectionCont } from '@/components/SectionCont/SectionCont';
import { VideoContainer } from '@/components/VideoContainer/VideoContainer'
import { Hero } from '@/components/Hero/Hero';
import { ModalContext } from '@/contexts/ModalContext';
import { ContactBox } from '@/components/ContactBox/ContactBox';
import { AboutSection } from '@/components/AboutSection/AboutSection';
export const hookContext = React.createContext(''); 
import React from 'react'
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Project Website for Matthew Logan, Canadian developer residing in British Columbia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Next.js, Portfolio, Student, Developer, Canada, Full-stack, British Columbia, Job, Hire, Junior, Front End, Back End, Database, Networking, Java"></meta>
        <link rel="icon" href="./favicon.png" />
        <title>Matthew Logan | LocalNewsTV</title>
      </Head>
  
      <VideoContainer video={"bgVid.m4v"} />
      <NavBar title={"Matthew Logan"} />
      <SectionCont id={"hero"} background={"background"}>
        <Hero />
      </SectionCont>
      <SectionCont id={"about"} background={"background3"} title={"About"}>
        <AboutSection />
      </SectionCont>
      <SectionCont id={"projects"} title={"Projects"} >
        <ModalContext />
      </SectionCont>
      <SectionCont id={"contact"} background={"background2"} title={"Contact"}>
        <ContactBox />
      </SectionCont>
      <Footer />
    </>
  )
}
