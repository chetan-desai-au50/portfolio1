import React from 'react'

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocial = () => {
    return (
        <>
            <div className="header_socials">
                <a href="https://www.linkedin.com/in/chetan-desai-604ab4259/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub /></a>
                <a href="https://instagram.com/chetan_desai_2001?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noreferrer"><FiDribbble /></a>
            </div>
        </>
    )
}

export default HeaderSocial;

