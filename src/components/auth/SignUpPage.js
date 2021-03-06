import React from 'react';
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';

class SignUpPage extends React.Component {

    signup = (values) => {
        alert(`User ${values.username} created. Redirecting login...`);
        this.props.history.push('/login');
    }
    render() {
        return (
            <SignUpForm onSubmit={this.signup/*bind up top with =()=> instead of this.signup.bind(this)*/} />
        )
    }
}
//export default connect()(SignUpPage);
export default SignUpPage;