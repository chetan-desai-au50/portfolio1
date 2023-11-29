
import React from "react";

import './experience.css'

import { BsFillPatchCheckFill } from 'react-icons/bs'


const Experience = () => {
    return (
        <>
            <section id="experience">
                <h5 className="text-light">What Skill I Have</h5>
                <h2>My Experience</h2>

                <div className="container experience_container">

                    <div className="experience_frontend">
                        <h3>FrontEnd Devlopment</h3>
                        <div className="experience_content">
                            <article className="experience_detail">
                                <BsFillPatchCheckFill className="experience_detail-icon" />
                                <div>
                                    <h4>HTML</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>

                            <article className="experience_detail">
                                <BsFillPatchCheckFill className="experience_detail-icon"/>
                                <div>
                                    <h4>CSS</h4>
                                    <small className="text-light">Intermediate</small>
                               </div>
                            </article>

                            <article className="experience_detail">
                                <BsFillPatchCheckFill className="experience_detail-icon"/>
                                <div>
                                    <h4>JavaScript</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>

                            <article className="experience_detail">
                                <BsFillPatchCheckFill className="experience_detail-icon"/>
                                <div>
                                    <h4>BootStrap</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>

                            <article className="experience_detail">
                                <BsFillPatchCheckFill className="experience_detail-icon"/>
                                <div>
                                    <h4>React</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>


                    <div className="experience_backend">
                        <h3>BackEnd Devlopment</h3>
                        <div className="experience_content">
                            <article className="experience_detail">
                                <BsFillPatchCheckFill className="experience_detail-icon"/>
                                <div>
                                <h4>Node Js</h4>
                                <small className="text-light">Experienced</small>
                                </div>
                            </article>

                            <article className="experience_detail">
                                <BsFillPatchCheckFill className="experience_detail-icon"/>
                                <div>
                                <h4>Mongo-DB</h4>
                                <small className="text-light">Intermediate</small>
                                </div>
                            </article>

                            <article className="experience_detail">
                                <BsFillPatchCheckFill className="experience_detail-icon"/>
                                <div>
                                <h4>My SQL</h4>
                                <small className="text-light">Intermediate</small>
                                </div>
                            </article>

                            <article className="experience_detail">
                                <BsFillPatchCheckFill className="experience_detail-icon"/>
                                <div>
                                    <h4>Express js</h4>
                                <small className="text-light">Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;