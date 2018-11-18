import React from 'react';
import { Field, reduxForm } from 'redux-form';
//import TextInput from '../../app/common/form/TextInput';

const TrailCreateForm = (props) => {
    return (
        <form id='trail-create-form' onSubmit={props.handleSubmit}>
            <label for="trailName">Trail Name</label> <br />
            <Field name="trailName" component='input' placeholder="name of trail" /> <br />
            <label for="trailRating">Trail Rating</label> <br />
            <Field name="trailRating" component='input' placeholder="rating of trail" /> <br />
            <label for="trailLocation">Trail Location</label> <br />
            <Field name="trailLocation" component='input' placeholder="description of trail" /> <br />
            <label for="trailDescription">Trail Description</label> <br />
            <Field name="trailDescription" component='input' placeholder="description of trail" /> <br />
            <label for="trailPictures">Trail Pictures</label> <br />
            <button type="trailPictures">Upload Pictures</button><br />
            <button type="submit">Submit Trail</button>
        </form>
    )
}


export default reduxForm({
    form: 'trailcreate'
})(TrailCreateForm)
//
//export default connect(mapStateToProps, actions)(
//    reduxForm({ form: 'trailcreate', enableReinitialize: true })(TrailCreateForm)
//);