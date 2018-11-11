import React from 'react';
import { connect } from 'react-redux';
import TrailCreate from '../trailcreate/trailcreate';
import './index.css';
import { createTrail } from '../../../redux/actions'

class TrailList extends React.Component {
    testAction() {
        this.props.dispatch({
            type: 'TEST_ACTION',
            newTrail: {
                trailName: 'trail2',
                trailRating: 'hard',
                trailLocation: 'California'
            }
        })
    }
    createTrail(trailName, trailRating, trailLocation) {
        this.props.dispatch(createTrail(trailName, trailRating, trailLocation, this.props.index))
    }
    render() {
        //const { trails } = this.props.map((trail, index) => <li key={index}>{trailName}</li>);
        return (
            <main role="main">
                <form>
                    <label for="trailsearch">Search for trails</label><br />
                    <input id="trailsearch" name="trailsearch" type="text" placeholder="search for a trail" />
                </form>
                <ul>
                    <li class="graybox traillist">Trail 1</li>
                    <li class="graybox traillist">Trail 2</li>
                    <li class="graybox traillist">Trail 3</li>
                    <li class="graybox traillist">Trail 4</li>
                    {/*list.map(list => (
                        <li>{list = { list }}</li>
                    ))*/}
                </ul>

                <hr />
                <TrailCreate />
            </main>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.trail.list,
        trails: state.trails
    }
}

export default connect(mapStateToProps)(TrailList);