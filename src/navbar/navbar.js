import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import LoggedIn from './loggedinoutoptions/loggedin';
import LoggedOut from './loggedinoutoptions/loggedout';
class Navbar extends React.Component {
    state = {
        loggedIn: false
    }
    handleLogIn = () => {
        this.setState({
            loggedIn: true
        });
    }
    handleLogOut = () => {
        this.setState({
            loggedIn: false
        });
        //this.history.push('/detail');
    }
    render() {
        const { loggedIn } = this.state;
        return (
            <div>
                <NavLink to="/">TRAIL TIME!  </NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
                {loggedIn ? <LoggedIn logout={this.handleLogOut} /> : <LoggedOut login={this.handleLogIn} />}&nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to="/trails">View Trails</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to="/create">Create Trail</NavLink>
            </div>

        )
    }
}

export default Navbar;
