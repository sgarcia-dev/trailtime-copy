import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import TrailDetailComments from './TrailDetailComments';
import TrailDetailCalendar from './TrailDetailCalendar';
import TrailDetailInfo from './TrailDetailInfo';
/*
const mapStateToProps = (state, ownProps) => {
    const trailId = ownProps.match.params.id;
    let trail = {};
    if (trailId && state.trails.length > 0) {
        trail = state.trails.filter(trail => trail.id === trailId)[0]//brings back an array of 1 item
    }
    return {
        trail
    }
}*/

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


const TrailDetailPage = ({ trail }) => {
    console.log(trail);
    return (
        <main role="main">
            <TrailDetailInfo trail={trail} />
            <br />
            <hr />
            <TrailDetailCalendar />
            <br />
            <hr />
            <TrailDetailComments />
            <br />
            <br />
        </main>
    );
}

export default connect(mapStateToProps)(TrailDetailPage);