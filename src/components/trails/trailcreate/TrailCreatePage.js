import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../app/common/form/TextInput';


class TrailCreatePage extends React.Component {
    onFormSubmit = (event) => {
        //event.preventDefault();
        this.props.createTrail(this.state.trail);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
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

const mapState = (state, props) => {
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

TrailCreatePage = reduxForm({
    // a unique name for the form
    form: 'trailcreateform'
})(TrailCreatePage)
export default TrailCreatePage;
//export default connect(mapState, actions)(reduxForm({ form: 'trailCreate', enableReinitialize: true })(TrailCreate))