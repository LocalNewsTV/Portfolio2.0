import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { NavBar } from '@/components/NavBar/NavBar'
import { SectionCont } from '@/components/SectionCont/SectionCont';
import { VideoContainer } from '@/components/VideoContainer/VideoContainer'
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { Modal } from '@/components/Modal/Modal.js'
export const hookContext = React.createContext(''); 
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Matthew Logan | LocalNewsTV</title>
      </Head>
      <Modal />
      <VideoContainer video={"bgVid.m4v"} />
      <NavBar title={"Matthew Logan"} />
      <SectionCont id={"hero"} background={"background"}/>
      <SectionCont id={"about"} background={"background3"}/>
      <SectionCont id={"projects"}>
        <ProjectCard />
      </SectionCont>
      <SectionCont id={"contact"} background={"background2"}/>
    </>
  )
}
