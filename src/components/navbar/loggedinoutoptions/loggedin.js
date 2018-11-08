import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

const LoggedIn = ({ logOut }) => {
    return (
        <span>
            <NavLink to="/login" onClick={logOut}>Logout</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
            </span>
    )
}

export default LoggedIn;