import React from 'react';
import { connect } from 'react-redux';
import TrailEditForm from './TrailEditForm';
import { createTrail, updateTrail } from '../../../redux/actions';
//import store from '../../../redux/store'
//import cuid = require('cuid');
import cuid from 'cuid';



//const mapStateToProps = state => ({
//    trail: state.trail
//});
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
//const TrailEditPage = ({ trail }) => {
class TrailEditPage extends React.Component {
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

    render() {
        return (
            <TrailEditForm onSubmit={this.onFormSubmit} />
        )
    }//trail={trail}
}

export default connect(mapStateToProps)(TrailEditPage);