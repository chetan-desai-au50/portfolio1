
import React from "react";

import './header.css'
import HeaderSocial from './HeaderSocial'
import Cv from "../../Assets/chetan desai_CV.pdf";
import Me from '../../Assets/—Pngtree—little boy in office_4537061.png';


const Header=()=>{
    return ( 
        <>
            <header>
                <div className="container header_container" id="header">
                    <h5>Hello I'm</h5>
                    <h1>Chetan Desai</h1>
                    <h5 className="text-light">Fullstack WEB Devloper</h5>

                    <div className="cta">
                        <a href={Cv} download className="btn">Download CV</a>
                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>

                    <HeaderSocial/>
                                                        
                    <div className="me">
                        <img src={Me} alt="me" className="me2"></img>
                    </div>

                    <a href="#contact" className="scroll_down">Scroll Down</a>
                </div>
            </header>
        </>
    );
}

export default Header;