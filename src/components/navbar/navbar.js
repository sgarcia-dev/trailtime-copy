/*
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
            <div >
                <ul>
                    <li>
                        <NavLink className="trailtime" to="/">TRAIL TIME!</NavLink>
                    </li>
                    <li>
                        {loggedIn ? <LoggedIn logout={this.handleLogOut} /> : <LoggedOut login={this.handleLogIn} />}
                    </li>
                    <li>
                        <NavLink className="navlink" to="/trails">View Trails</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/create">Create Trail</NavLink>
                    </li>
                </ul>

            </div>

        )
    }
}

const mapStateToProps = state => {
    //return {state.loggedIn}
}

export default connect(mapStateToProps)(Navbar);

*/



import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { connect } from "react-redux";

class NavBar extends React.Component {
    logout() {
        this.props.dispatch({
            type: 'LOGOUT_SUCCESS'
        });
        alert('Now Logged Out');
    }
    render() {
        //LOGGED OUT LINKS (this ? true do this : false do this so not logged in means logged out, logged in means null and gets the authlink instead)
        const defaultLinks = !this.props.isLoggedIn ? (
            <React.Fragment>
                <li>
                    <NavLink className="navlink" to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/signup">Create an Account</NavLink>
                </li>
            </React.Fragment>
        ) : null;

        //LOGGED IN LINKS
        const authLinks = this.props.isLoggedIn ? (
            <React.Fragment>
                <li>
                    <NavLink className="navlink" to="/" onClick={this.logout.bind(this)}>Logout</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/trails">View Trails</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/create">Create Trail</NavLink>
                </li>
            </React.Fragment>
        ) : null;

        return (
            <div className="navbar">
                <ul className="navlinks">
                    <li>
                        <NavLink className="trailtime" to="/">TRAIL TIME!</NavLink>
                    </li>
                    {defaultLinks}
                    {authLinks}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(NavBar);