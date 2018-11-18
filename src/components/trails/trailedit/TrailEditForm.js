import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import TextInput from '../../app/common/form/TextInput';

const mapStateToProps = (state, ownProps) => {
    //console.log('traildetail', state.trails.trails);
    //console.log('traildetial', ownProps);
    const trailId = ownProps.match.params.id;
    let trail = {};
    if (trailId && state.trails.trails.length > 0) {
        trail = state.trails.trails.filter(trail => trail.id === trailId)[0]//brings back an array of 1 item
    }
    return {
        trail
    }
}

//const TrailEditForm = ({ trail }) => {
let TrailEditForm = (props) => {
    const { handleSubmit, load, pristine, reset, submitting } = props

    return (
        <form id='trail-edit-form' onSubmit={props.handleSubmit}>
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

//export default connect(mapStateToProps)(reduxForm({
//    form: 'trailedit'
//})(TrailEditForm))
export default reduxForm({
    form: 'trailedit'
})(TrailEditForm)
