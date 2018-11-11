import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../app/common/form/TextInput';


class TrailCreate extends React.Component {
    onFormSubmit = values => {
        console.log(values);
        /*if (this.props.initialValues.id) {
            this.props.updateTrail(values);
            this.props.history.goBack();
        } else {
            const newTrail = {
                ...values,
                id: cuid(),
                creator: ''
            };
            this.props.createTrail(newTrail);
            this.props.history.push('/trails');
        }*/
    }


    //let TrailCreate = props => {
    //const { handleSubmit } = props
    render() {
        //<form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        return (
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <label for="trailname">Add new trail</label> <br />
                <Field name="trailname" component={TextInput} placeholder="name of trail" /> <br />
                <label for="traildesc">Trail description</label> <br />
                <Field name="traildesc" component={TextInput} placeholder="description of trail" /> <br />
                <label for="traillocation">location</label> <br />
                <Field name="traillocation" component={TextInput} placeholder="location of trail" /> <br />
                <button type="submit">Submit Trail</button>
            </form>
        )
    }
}

TrailCreate = reduxForm({
    // a unique name for the form
    form: 'trailcreateform'
})(TrailCreate)
export default TrailCreate;
//export default connect(mapState, actions)(reduxForm({ form: 'trailCreate', enableReinitialize: true })(TrailCreate))