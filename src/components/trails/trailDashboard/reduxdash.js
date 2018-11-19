import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrailList from '../traillist/TrailList';
import { createTrail } from '../../../redux/actions'
import cuid from 'cuid';
import TrailForm from '../trailcreate/zzzTrailForm';


const mapStateToProps = (state) => ({
    trails: state.trail
});

const actions = {
    createTrail
}

class TrailDashboard extends Component {

    state = {
        isOpen: true,
        selectedTrail: null
    }

    handleFormOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    handleCancel = () => {
        this.setState({
            isOpen: false
        })
    }

    handleCreateTrail = (newTrail) => {
        newTrail.id = cuid();
        //newTrail.trailName = 'Black Bear';
        //newTrail.trailRating = 'hard';
        //newTrail.trailLocation = 'Colorado';
        const updatedTrails = [...this.state.trail, newTrail];
        this.setState({ trails: updatedTrails, isOpen: false });
    }

    handleEditTrail = (trailToUpdate) => () => {
        this.setState({
            selectedTrail: trailToUpdate,
            isOpen: true
        })
    }



    render() {
        const { trails } = this.props;
        console.log(trails);
        return (
            <div>
                <p>TRAILS</p>
                <TrailList
                    trails={trails/*trails is what you call in TrailList, trailslist comes from above fake data*/}
                /><br /><br />
                <button onClick={this.handleFormOpen}>Create Trail</button>
                {this.state.isOpen && <TrailForm createTrail={this.handleCreateTrail} handleCancel={this.handleCancel} />}

            </div>
        );
    }
}



export default connect(mapStateToProps)(TrailDashboard);