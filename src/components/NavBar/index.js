import React from 'react';
import {faHome, faAtlas, faBriefcase, faFeather} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import "./NavBar.scss";
const NavBar = () => {
    return (
        <div className="navbar">
           <Button icon={faHome} text="Home" />
           <Button icon={faAtlas} text="About Me" />
           <Button icon={faBriefcase} text="Experiences" />
           <Button icon={faFeather} text="Contact Me" />
        </div>
    )
}

export default NavBar;