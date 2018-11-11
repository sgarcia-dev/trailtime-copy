import React, { Component } from 'react';
import TrailListItem from '../traillistitem/traillistitem';

class TrailList extends Component {
    render() {
        const { trails } = this.props;
        return (
            <div>
                {/*double check trails are there with async stuff since sometimes it takes time before rendering otherwise get map error if tries to render before acync is done*/
                    trails && trails.map((trail) =>
                        <TrailListItem key={trail.id} trail={trail} />)}
            </div>
        );
    }
}

/*{
    trails.map(trail => (
        <TrailListItem key={trail.id} trail={trail} />
    ))
}*/

export default TrailList;