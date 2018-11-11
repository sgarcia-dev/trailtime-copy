import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TrailListItem extends Component {
    render() {
        const { trail } = this.props;
        return (
            <div>
                <p>{trail.trailName}</p>
                <Link to="/detail/${trail.id}">view trail details</Link>
            </div>
        );
    }
}
//<p>{trail}</p>
export default TrailListItem;