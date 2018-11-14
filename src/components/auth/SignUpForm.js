import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../app/common/form/TextInput';

const SignUpForm = props => (
    <form>
        <fieldset>
            <legend>Sign Up</legend>
            <label for="username">User Name</label><br />
            <Field component={TextInput} name="username"
                placeholder="Enter your username" required /><br />
            <label for="password">Password</label><br />
            <Field component={TextInput} name="password"
                placeholder="Enter your password" required /><br />
            <label for="email">Email</label><br />
            <Field component={TextInput} name="email"
                placeholder="Enter your email" required /><br />
            <label for="phone">Phone</label><br />
            <Field component={TextInput} name="phone"
                placeholder="Enter your phone number" required /><br />
            <button type="submit">Sign up</button>
            <Link to="/login"><button type="button">Or Log In Here > </button></Link>
        </fieldset>
    </form>
);


export default reduxForm({
    form: 'signup'
})(SignUpForm)
