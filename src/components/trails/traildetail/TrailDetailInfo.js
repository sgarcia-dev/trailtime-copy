import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import fourpeaks from '../traildetail/fourpeaks.jpg'
//import TrailImages from './TrailImages';
import TrailImages from '../traildetail/TrailImages';
//{/*src={trail.images[0]}*/}<img src={fourpeaks} />
const TrailDetailInfo = ({ trail }) => {
    return (
        <React.Fragment>
            <div><img className="heroPic" src={fourpeaks} /></div>
            <TrailImages />
            <h2>{trail.trailName}</h2>
            <p>{trail.trailDescription}
            </p>
            <Link to={`/edit/${trail.id}`}>edit</Link>
        </React.Fragment>
    );
}

export default TrailDetailInfo;