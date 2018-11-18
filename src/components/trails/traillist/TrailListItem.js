import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TrailListItem extends Component {
    render() {
        const { trail, deleteTrail } = this.props;
        //console.log('TrailListItem trial', trail)
        return (
            <div>
                <p>{trail.trailName} {trail.trailRating} {trail.trailLocation}</p>
                <Link to={`/detail/${trail.id}`}>view trail details</Link>
                <Link to={`/edit/${trail.id}`} trail={trail}>edit</Link>
                <button onClick={deleteTrail(trail.id)}>delete</button>

            </div>
        );
    }
}


export default TrailListItem;