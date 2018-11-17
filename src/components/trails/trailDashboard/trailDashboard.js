import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrailList from '../traillist/TrailList';
import { deleteTrail } from '../../../redux/actions'
import cuid from 'cuid';
import TrailForm from '../trailcreate/TrailForm';


const mapStateToProps = (state) => ({
    trails: state.trails
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
        this.props.deleteTrail(trailId);
    }

    render() {
        const { trails } = this.props;
        return (
            //<Trail List {/** onOpenTrail={this.handleOpenTrail}*/}
            <div>
                <p>TRAILS</p>
                <TrailList deleteTrail={this.handleDeleteTrail}
                    trails={trails/*trails is what you call in TrailList, trailslist comes from above fake data*/}
                /><br /><br />

            </div>
        );
    }
}



export default connect(mapStateToProps, actions)(TrailDashboard);