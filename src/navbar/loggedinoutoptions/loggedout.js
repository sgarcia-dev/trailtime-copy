import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

const LoggedOut = ({ logIn }) => {
    return (
        <span>
            <NavLink to="/login" onClick={logIn} >Login</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink to="/signup">Signup</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
        </span>
    )
}

export default LoggedOut;