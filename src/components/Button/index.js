import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Button.scss";
const Button = ({icon, text}) => {
    return (
        <button className="button">
            <FontAwesomeIcon icon={icon} className="button__icon" />
          <span className="button__text">{text}</span>
        </button>
    )
}
export default Button;