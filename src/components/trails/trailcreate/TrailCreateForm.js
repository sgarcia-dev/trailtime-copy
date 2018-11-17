import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../app/common/form/TextInput';


//const TrailCreateForm = (props) => {
class TrailCreateForm extends React.Component {
    onTrailFormSubmit = values => {
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
    }
    render() {

        return (
            <form id='trail-create-form' onSubmit={this.props.handleSubmit(this.onTrailFormSubmit)}>
                <label for="trailName">Add new trail</label> <br />
                <Field name="trailName" component={TextInput} placeholder="name of trail" /> <br />
                <label for="trailRating">Trail description</label> <br />
                <Field name="trailRating" component={TextInput} placeholder="description of trail" /> <br />
                <label for="trailLocation">location</label> <br />
                <Field name="trailLocation" component={TextInput} placeholder="location of trail" /> <br />
                <button type="submit">Submit Trail</button>
            </form>
        )
    }
}



//export default reduxForm({
//    form: 'trailcreate'
//})(TrailCreateForm)
//
export default connect(mapStateToProps, actions)(
    reduxForm({ form: 'trailcreate', enableReinitialize: true })(TrailCreateForm)
);


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