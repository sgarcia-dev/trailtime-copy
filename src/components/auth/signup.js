import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    render() {
        return (
            <form>
                <fieldset>
                    <legend>Sign Up</legend>
                    <label for="username">User Name</label><br />
                    <input type="text" name="username" id="username"
                        placeholder="Enter your username" required /><br />
                    <label for="password">Password</label><br />
                    <input type="text" name="password" id="password"
                        placeholder="Enter your password" required /><br />
                    <input type="text" name="email" id="email"
                        placeholder="Enter your email" required /><br />
                    <input type="text" name="phone" id="phone number"
                        placeholder="Enter your phone number" required /><br />
                    <button type="submit">Sign up</button>
                    <Link to="/login"><button type="button">Or Log In Here > </button></Link>
                </fieldset>
            </form>
        );
    }
}

export default Signup;