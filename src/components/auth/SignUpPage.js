import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUpForm from './LogInForm';

class SignUpPage extends React.Component {
    render() {
        return (
            <SignUpForm />
        )
    }
}

export default SignUpPage;