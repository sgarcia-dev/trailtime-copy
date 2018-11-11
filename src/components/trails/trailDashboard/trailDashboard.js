import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrailList from '../traillist/traillist';
import { createTrail } from '../../../redux/actions'
import cuid from 'cuid';

const trailslist = [
    {
        id: '1',
        trailName: 'Last Dollar Road',
        trailRating: 'easy',
        trailLocation: 'Colorado'
    }, {
        id: '2',
        trailName: 'Schnebly Hill',
        trailRating: 'easy',
        trailLocation: 'Arizona'
    }, {
        id: '3',
        trailName: 'Rubicon',
        trailRating: 'hard',
        trailLocation: 'Nevada'
    }];


const mapStateToProps = (state) => ({
    trails: state.trails
});

const actions = {
    createTrail
}

class TrailDashboard extends Component {

    state = {
        isOpen: true,
        selectedTrail: null
    }

    handleCreateTrail = (newTrail) => {
        newTrail.id = cuid();
        newTrail.trailName = 'Black Bear';
        newTrail.trailRating = 'hard';
        newTrail.trailLocation = 'Colorado';
        const updatedTrails = [...this.state.trails, newTrail];
        this.setState({ trails: updatedTrails });
    }


    render() {
        const { trails } = this.state;
        return (
            <div>
                <p>TRAILS</p>
                <TrailList
                    trails={trails/*trails is what you call in TrailList, trailslist comes from above fake data*/}
                />


            </div>
        );
    }
}



export default connect(mapStateToProps)(TrailDashboard);