import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

const LoggedIn = ({ logOut }) => {
    return (
        <span>
            <li>
                <NavLink className="navlink" to="/login" onClick={logOut}>Logout</NavLink>
            </li>
        </span>
    )
}

export default LoggedIn;