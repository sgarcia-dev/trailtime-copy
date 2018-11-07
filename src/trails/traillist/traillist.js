import React from 'react';
import TrailCreate from '../trailcreate/trailcreate';
import './index.css';
class TrailList extends React.Component {
    render() {
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
                </ul>
                <hr />
                <TrailCreate />
            </main>
        )
    }
}

export default TrailList;