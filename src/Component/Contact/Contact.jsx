
import React from "react";

import './contact.css'
import { MdMailOutline } from 'react-icons/md';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';


//========Emailjs=========
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

        const form = useRef();
        const sendEmail = (e) => {

            emailjs.sendForm('service_fqvx5sk', 'template_jtjssrq', form.current, 'hJ2lTlKAbiQUWcy1L')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }

    
    return (
        <>
            <section id="contact">
                <h5 className="text-light">Get In Touch</h5>
                <h2>Contact Me</h2>

                <div className="container contact_container">

                    <div className="contact_options">
                        <article className="contact_option">
                            <MdMailOutline className="contact_option-icon" />
                            <h4>Email</h4>
                            <h5>desaichetan721@gmail.com</h5>
                            <a href="mailto:desaichetan721@gmail.com" target="__blank">Send A Message</a>
                        </article>

                        <article className="contact_option">
                            <FaInstagram className="contact_option-icon" />
                            <h4>Instagram</h4>
                            <h5>chetan_desai_2001</h5>
                            <a href="https://instagram.com/chetan_desai_2001?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="__blank">Send A Message</a>
                        </article>

                        <article className="contact_option">
                            <FaWhatsapp className="contact_option-icon" />
                            <h4>Whatsaap</h4>
                            <h5>9325184583</h5>
                            <a href="http://api.whatsaap.com/send?phone=+919325184583" target="__blank" >Send A Message</a>
                        </article>

                    </div>

                    {/* End Of Contact Option */}

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Your Full Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;