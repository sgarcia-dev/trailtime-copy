import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogInForm from './LogInForm';

class LogInPage extends React.Component {
    render() {
        return (
            <LogInForm />
        )
    }
}

export default LogInPage;