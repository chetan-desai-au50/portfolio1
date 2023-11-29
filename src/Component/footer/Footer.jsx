
import React from "react";

import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {FaTwitterSquare,FaCompactDisc} from 'react-icons/fa';

const Footer=()=>{
    return (
        <footer>
            <a href="header" className="footer_logo"><FaCompactDisc/></a>

            <ul className="links">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_social">
                <a href="http://facebook.com"><AiOutlineFacebook/></a>
                <a href="https://instagram.com/chetan_desai_2001?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><BsInstagram/></a>
                <a href="http://twitter.com"><FaTwitterSquare/></a>
            </div>

            <div className="footer_copywrite">
                <small>© 2023 Domain. All rights reserved.</small>
            </div>

        </footer>
    );
}

export default Footer;