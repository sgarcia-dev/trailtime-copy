import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import TrailDetailComments from './TrailDetailComments';
import TrailDetailCalendar from './TrailDetailCalendar';
import TrailDetailInfo from './TrailDetailInfo';

const mapStateToProps = (state, ownProps) => {
    const trailId = ownProps.match.params.id;
    let trail = {};
    if (trailId && state.trails.length > 0) {
        trail = state.trails.filter(trail => trail.id === trailId)[0]
    }
    return {
        trail
    }
}

const TrailDetailPage = ({ trail }) => {
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