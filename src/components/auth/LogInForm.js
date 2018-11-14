import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../app/common/form/TextInput';
import { Link } from 'react-router-dom';

const LogInForm = props => (
    <form>
        <fieldset>
            <legend>Log In</legend>
            <label for="username">User Name</label><br />
            <Field name="username" component={TextInput} placeholder="Enter your username" required /><br />
            <label for="password">Password</label><br />
            <Field name="password" component={TextInput} placeholder="Enter your password" required /><br />
            <button type="submit">Log in</button>
            <Link to="/signup"><button type="button">Or Sign Up Here</button></Link>
        </fieldset>
    </form >
);

export default reduxForm({
    form: 'login'
})(LogInForm)
