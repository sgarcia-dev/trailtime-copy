import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import TextInput from '../../app/common/form/TextInput';


const TrailEditForm = (props) => {
    return (
        <form id='trail-edit-form' onSubmit={props.handleSubmit}>
            <label for="trailName">Edit Trail</label> <br />
            <Field name="trailName" component={TextInput} placeholder="name of trail" /> <br />
            <label for="traildesc">Trail description</label> <br />
            <Field name="traildesc" component={TextInput} placeholder="description of trail" /> <br />
            <label for="traillocation">location</label> <br />
            <Field name="traillocation" component={TextInput} placeholder="location of trail" /> <br />
            <button type="submit">Submit Trail Changes</button>
        </form>
    )
}


const reduxFormEditTrail = reduxForm({
    form: 'trailedit'
})(TrailEditForm)


const mapStateToProps = state => ({
    initialValues: state.trail
});

export default connect(mapStateToProps)(reduxFormEditTrail);


/*const mapState = (state, props) => {
    const trailId = props.match.params.id;
    let trail = {
        trailName: '',
        trailRating: '',
        traillocation: ''
    }

    if (trailId && state.event.length > 0) {
        trail = state.trails.filter(trail => trail.id === trailId)[0];
    }
    return { trail }
}

TraiLCreateForm = reduxForm({
    // a unique name for the form
    form: 'trailcreateform'
})(TraiLCreateForm)
export default TraiLCreateForm;
//export default connect(mapState, actions)(reduxForm({ form: 'trailCreate', enableReinitialize: true })(TrailCreate))

*/