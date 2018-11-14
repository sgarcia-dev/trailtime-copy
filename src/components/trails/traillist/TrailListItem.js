import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TrailListItem extends Component {
    render() {
        const { trail } = this.props;
        console.log(this.props);
        return (
            <div>
                <p>{trail.trailName} {trail.trailRating}{trail.id} {trail.trailLocation}</p>
                <Link to={`/detail/${trail.id}`}>view trail details</Link>
                <Link to={`/edit/${trail.id}`}>edit</Link>
            </div>
        );
    }
}

//const mapStateToProps = (state) => {
//    trail: state.trail0
//}

//<p>{trail}</p>
export default TrailListItem;