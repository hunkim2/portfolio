import React from 'react';
import {faHome, faAtlas, faBriefcase, faFeather, faUserEdit} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Button from '../Button';
import "./NavBar.scss";
const NavBar = () => {
    return (
        <div className="navbar">
           <Button icon={faHome} linkId="#home" text="Home" />
           <Button icon={faBriefcase} linkId="#experiences" text="Experiences" />
           <Button icon={faUserEdit} linkId="#contactme" text="Contact Me" />
           <Button icon={faFeather} linkId="#resume" text="Resume" />
           <Button icon={faGithub} link="https://github.com/hunkim2" text="GitHub" />
           <Button icon={faLinkedin} link="https://www.linkedin.com/in/hkim142/" text="LinkedIn" />
        </div>
    )
}

export default NavBar;