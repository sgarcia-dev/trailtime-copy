import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrailList from '../traillist/TrailList';
import { deleteTrail } from '../../../redux/actions'
import { DELETE_TRAIL } from '../../../redux/trailConstants';
//import cuid from 'cuid';
//import TrailForm from '../trailcreate/TrailForm';


const mapStateToProps = (state) => ({
    trails: state.trails.trails
});

const actions = {
    deleteTrail
}


class TrailDashboard extends Component {
    /*   handleCreateTrail = (newTrail) => {
           newTrail.id = cuid();
           this.props.createTrail(newTrail);
                  this.setState({
               //trails: updatedTrails,
               isOpen: false
           });
       }*/

    handleDeleteTrail = (trailId) => () => {
        console.log('delete id', this.props.dispatch);
        this.props.deleteTrail(trailId);
        //this.props.dispatch(DELETE_TRAIL(trailId));
        //this.props.dispatch({
        //type: 'DELETE_TRAIL',
        //trailName: trailName,
        //trailRating: trailRating,
        //trailLocation: trailLocation,
        //trailId: trailId
        //});
    }




    render() {
        const { trails } = this.props;
        console.log('DASHTRAILS', trails)
        return (
            //<Trail List {/** onOpenTrail={this.handleOpenTrail}*/}
            <div>
                <h1>TRAILS</h1><hr />
                <TrailList deleteTrail={this.handleDeleteTrail}
                    trails={trails/*trails is what you call in TrailList, trailslist comes from above fake data*/}
                /><br /><br />

            </div>
        );
    }
}



export default connect(mapStateToProps, actions)(TrailDashboard);