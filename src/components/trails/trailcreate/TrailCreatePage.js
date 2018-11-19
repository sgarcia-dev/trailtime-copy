import React from 'react';
import { connect } from 'react-redux';
import TrailCreateForm from './TrailCreateForm';
import { createTrail, updateTrail } from '../../../redux/actions';
//import store from '../../../redux/store'
//import cuid = require('cuid');
import cuid from 'cuid';




/*const mapStateToProps = (state, ownProps) => {
    console.log('MAP STATE TRAIL CREATE');
    const trailId = ownProps.match.params.id;

    let trail = {}
    if (trailId && state.trail > 0) {
        trail = state.trail.filter(trail => trail.id === trailId)[0];
    }
    return {
        initialValues: trail
    }
}*/
class TrailCreatePage extends React.Component {
    /*onFormSubmit = values => {
        console.log(this.props);
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
    }*/
    //////////////////////
    onFormSubmit = (values) => {
        console.log('VALUES', values);
        //if (this.props.trail.id) {
        // this.props.updateTrail(values);
        //this.props.history.goBack();
        //} else {
        this.props.dispatch({
            type: 'CREATE_TRAIL',
            trailName: values.trailName,
            trailRating: values.trailRating,
            trailLocation: values.trailLocation,
            trailId: cuid()
        });
        alert(`${values.trailName} ${values.trailRating} ${values.trailLocation} trail created`);
        //}
        this.props.history.push('/trails');
    }
    /////////////////////////

    render() {
        return (
            <TrailCreateForm onSubmit={this.onFormSubmit} />
        )
    }
}


//export default connect(mapStateToProps, actions)(TrailCreatePage);
export default connect()(TrailCreatePage);