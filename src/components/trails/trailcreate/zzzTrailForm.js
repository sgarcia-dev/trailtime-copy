import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import TextInput from '../../app/common/form/TextInput';
import { createTrail, updateTrail } from '../../../redux/actions'
import cuid from 'cuid';

const actions = {
    createTrail, updateTrail
}

const mapStateToProps = (state, ownProps) => {
    const trailId = ownProps.match.params.id;

    let trail = {}
    if (trailId && state.trails > 0) {
        trail = state.trails.filter(trail => trail.id === trailId)[0];
    }
    return {
        initialValues: trail
    }
}


class TrailForm extends React.Component {
    onFormSubmit = values => {
        if (this.props.initialValues.id) {
            this.props.updateTrail(values);
            this.props.history.goBack();
        } else {
            const newTrail = {
                ...values,
                id: cuid()
            };
            this.props.createTrail(newTrail);
            this.props.history.push('/trails');
        }
    };
    //    onInputChange = (event) => {
    //      const newTrail = this.state.trail;
    //    newTrail[event.target.name] = event.target.value;
    //  this.setState({
    //    trail: newTrail
    //      })
    //}


    render() {
        //const { handleCancel } = this.props;
        //const { trail } = this.state;onChange={this.onInputChange} value={trail.trailLocation}
        return (
            <form id='trail-create-form' onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <label for="trailName">Add new trail</label> <br />
                <Field name='trailName' type='text' component={TextInput} placeholder="name of trail" /> <br />
                <label for="trailRating">Trail rating</label> <br />
                <Field name="trailRating" type='text' component={TextInput} placeholder="description of trail" /> <br />
                <label for="trailLocation">location</label> <br />
                <Field name="trailLocation" type='text' component={TextInput} placeholder="location of trail" /> <br />
                <button type="submit">Submit Trail</button>
                <button onClick={this.props.history.goBack()/*handleCancel*/}>Cancel</button>
            </form>
        );
    }
}

export default connect(mapStateToProps, actions)(
    reduxForm({ form: 'trailform', enableReinitialize: true })
        (TrailForm)
);

