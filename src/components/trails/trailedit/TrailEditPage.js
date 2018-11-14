import React from 'react';
import { connect } from "react-redux"
import TrailEditForm from './TrailEditForm';


class TrailEditPage extends React.Component {
    onFormSubmit = (values) => {
        //event.preventDefault();
        //this.props.createTrail(this.state.trail);
        alert(`${values.trailname} trail created`);
        this.props.history.push("/trails");
    }


    render() {
        return (
            <TrailEditForm onSubmit={this.onFormSubmit} />
        )
    }
}


const mapStateToProps = state => ({
    trail: state.trail
});

export default connect(mapStateToProps)(TrailEditPage);