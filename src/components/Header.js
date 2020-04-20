import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <div className = "header__content">
                    <NavLink to="/" className = "header__title" onClick={props.onResetPage}>TinyPriv</NavLink>
                    <h2 className = "header__subtitle">Make long URLs short Attach secret messages</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;
