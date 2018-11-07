import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './index.css';
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/">TRAIL TIME!  </NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to="/login">Login</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to="/signup">Signup</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to="/login">Logout</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to="/trails">View Trails</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to="/create">Create Trail</NavLink>
            </div>

        )
    }
}
//<a as={NavLink} to='/login' name="Login">Login</a>

export default Navbar;