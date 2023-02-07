import React from 'react';
import { Logo } from './Logo/Logo.js';
import { AppNav } from './AppNav/AppNav.js';


export const NavBar = ({title}) => {
  return (
  <div id="nav">
    <div className="nav-left">
      <a className={"navLink"} href="#hero"><Logo title={title} /></a>
      <ul>
        <a className="navLink" href="#about">About Me</a>
        <a className="navLink" href="#projects">Projects</a>
        <a className="navLink" href="#contact">Contact Me</a>
      </ul>
    </div>
    <div className="nav-right">
      <AppNav/>
    </div>
  </div>
  )
}