import React from 'react';
import TrailCreateForm from './TrailCreateForm';


class TrailCreatePage extends React.Component {
    onFormSubmit = (values) => {
        //event.preventDefault();
        //this.props.createTrail(this.state.trail);
        alert(`${values.trailname} trail created`);
        this.props.history.push("/trails");
    }


    render() {
        return (
            <TrailCreateForm onSubmit={this.onFormSubmit} />
        )
    }
}


export default TrailCreatePage;