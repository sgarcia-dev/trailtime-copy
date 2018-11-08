import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <form>
                <fieldset>
                    <legend>Log In</legend>
                    <label for="username">User Name</label><br />
                    <input type="text" name="username" id="username" placeholder="Enter your username" required /><br />
                    <label for="password">Password</label><br />
                    <input type="text" name="password" id="password" placeholder="Enter your password" required /><br />
                    <button type="submit">Log in</button>
                    <Link to="/signup"><button type="button">Or Sign Up Here</button></Link>
                </fieldset>
            </form >
        )
    }
}

export default Login;