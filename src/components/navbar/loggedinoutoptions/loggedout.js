import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

const LoggedOut = ({ logIn }) => {
    return (
        <span>
            <li>
                <NavLink className="navlink" to="/login" onClick={logIn} >Login</NavLink>
            </li>
            <li>
                <NavLink className="navlink" to="/signup">Signup</NavLink>
            </li>
        </span>
    )
}

export default LoggedOut;