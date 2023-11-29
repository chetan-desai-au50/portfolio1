
import React, { useState } from "react";

import './nav.css'

import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {SiBookstack} from 'react-icons/si';
import {BiMessageAltDetail} from 'react-icons/bi';


const Nav=()=>{

    const [activeNav,setActiveNav]=useState("#header")

    return (
        <>
            <nav>
                <a href="#header" title="Home" onClick={()=>{setActiveNav("#header")}} className={activeNav === "#header" ? 'active':''}><AiOutlineHome/></a>
                <a href="#about" title="About" onClick={()=>{setActiveNav("#about")}} className={activeNav === "#about" ? 'active':''}><AiOutlineUser/></a>
                <a href="#experience" title="Experience" onClick={()=>{setActiveNav("#experience")}} className={activeNav === "#experience" ? 'active':''}><BiBook/></a>
                <a href="#portfolio" title="portfolio" onClick={()=>{setActiveNav("#portfolio")}} className={activeNav === "#portfolio" ? 'active':''}><SiBookstack/></a>
                <a href="#contact" title="Contact" onClick={()=>{setActiveNav("#contact")}} className={activeNav === "#contact" ? 'active':''} ><BiMessageAltDetail/></a>
            </nav>
        </>
    );
} 

export default Nav;