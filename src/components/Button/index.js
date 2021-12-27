import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Button.scss";

const Button = ({icon, text, link, linkId}) => {
    console.log('this is link', link)
    if (link) {
        <a href={link} target="_blank" className="button" rel="noopener">
            <FontAwesomeIcon icon={icon} className="button__icon" />
            <span className="button__text">{text}</span>
        </a>
    }
    return (
        <a href={linkId} className="button">
            <FontAwesomeIcon icon={icon} className="button__icon" />
            <span className="button__text">{text}</span>
        </a>
    )
}
export default Button;