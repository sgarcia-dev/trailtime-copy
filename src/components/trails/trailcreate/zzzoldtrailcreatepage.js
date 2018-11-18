

/////////////////////////
///////////////////////////////
////////////////////////////
import React from 'react';
import { connect } from 'react-redux';
import TrailCreateForm from './TrailCreateForm';
import { createTrail, updateTrail } from '../../../redux/actions';
import store from '../../../redux/store'
//import cuid = require('cuid');
import cuid from 'cuid;'

class TrailCreatePage extends React.Component {
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
        //event.preventDefault();
        //this.props.createTrail(this.state.trail);
        //alert(`${values.trailName} trail created`);
        //this.props.history.push("/trails");
        //createTrail(this.props.dispatch(createTrail(values this.props.trailName))) {

        //console.log('values', values);
        //console.log('trailName', values.trailName);
        //console.log('trailName', values.trailName);
        /*this.props.dispatch({
            //store.dispatch({
            type: 'CREATE_TRAIL',
            trailName: values.trailName
        });
        alert(`${values.trailName} created`);
        this.props.history.push('/trails');*/
    }

    render() {
        return (
            <TrailCreateForm onSubmit={this.props.handleSubmit(this.onFormSubmit)} />
        )
    }
}


export default connect()(TrailCreatePage);
//export default connect(mapState, actions)(