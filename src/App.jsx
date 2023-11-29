
import React from "react";

import './index.css'
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Experience from './Component/Experience/Experience.jsx';
import Header from './Component/header/Header';
import Nav from './Component/nav/Nav';
// import Services from './Component/services/Services';
import Portfolio from './Component/portfolio/Portfolio';
import Testimonials from './Component/testimonials/Testimonials';
import Footer from './Component/footer/Footer';

const App = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <About />
            <Experience />
            {/* <Services/> */}
            <Portfolio/>
            <Testimonials/>
            <Contact />
            <Footer/>
        </>
    );
}

export default App;