
import React from "react";

import './About.css'
import Me from '../../Assets/pixiz-14-08-2023-18-08-29.jpg'
import { FaAward } from 'react-icons/fa';
// import {FiUserPlus} from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
    return (
        <>
            <section id="about">
                <h5 className="text-light">Get To Know</h5>
                <h2>About Me</h2>

                <div className="container about_container">
                    <div className="about_me">
                        <div className="about_me-image">
                            <img src={Me} alt="About_Image" />
                        </div>
                    </div>

                    <div className="about_content">
                        <div className="about_cards">
                            <article className="about_card">
                                <FaAward className="about_icon" />
                                <h5>Experience</h5>
                                <small>Fresher</small>
                            </article>

                            {/* <article className="about_card">
                                <FiUserPlus className="about_icon"/>
                                <h5>Clints</h5>
                                <small>200+ clints</small>
                            </article> */}

                            <article className="about_card">
                                <VscFolderLibrary className="about_icon" />
                                <h5>Projects</h5>
                                <small>5 completed</small>
                            </article>
                        </div>

                        <p>Whether I'm working on a small website or a large-scale application, I always strive for excellence and attention to detail.
                            Take a look around my portfolio to see some of my past work and get a sense of what I can do. If you're interested in working together, please don't hesitate to get in touch!
                        </p>

                        <a href="#contact" className="btn btn-primary" id="bb">Let's Talk</a>
                    </div>

                </div>
            </section>
        </>
    );
}

export default About;