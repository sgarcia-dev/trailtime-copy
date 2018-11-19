import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fourpeaks from '../traildetail/fourpeaks.jpg'
import './index.css';
class TrailListItem extends Component {
    render() {
        const { trail, deleteTrail } = this.props;
        //console.log('TrailListItem trial', trail)
        return (
            <React.Fragment>
                <img src={fourpeaks} className="width20" />
                <h3>{trail.trailName}</h3>
                <p>{trail.trailLocation} | {trail.trailRating}</p>
                <Link to={`/detail/${trail.id}`}>View trail details > </Link>
                <hr />
            </React.Fragment>
        );
    }
}
// /<Link to={`/edit/${trail.id}`} trail={trail}>edit</Link>
//<button onClick={deleteTrail(trail.id)}>delete</button>

export default TrailListItem;