import React from 'react';
import {NavLink} from 'react-router-dom'

const Footer = (props) => (

    <div className="footer">
        <div className= "footer--container">
            <NavLink to="/" className = "footer__link" onClick={props.onResetPage}>New Message</NavLink>
            <a className = "footer__link" href="mailto: info@tinypriv.com">Email us</a>
            <a className = "footer__link" href="https://www.facebook.com">Facebook</a>

        </div>
    </div>
)

export default Footer;
