import React from 'react';
import './index.css';
class TrailDetail extends React.Component {
    render() {
        return (
            <main role="main">
                <div class="heroPic">pictures in here</div>
                <h2>TRAIL NAME</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br />
                <hr />
                <h3>Calendar</h3>
                <input type="datetime-local" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <br />
                <hr />
                <h3>Comments</h3>
                <p>comment 1</p>
                <p>comment 2</p>
                <p>comment 3</p>
                <br /><br />
            </main>
        )
    }
}

export default TrailDetail;