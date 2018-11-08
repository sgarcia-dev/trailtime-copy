import React from 'react';

class TrailCreate extends React.Component {
    render() {
        return (
            <form>
                <label for="trailname">Add new trail</label><br />
                <input id="trailname" name="trailname" type="text" placeholder="name of trail" /><br />
                <label for="traildesc">Trail description</label><br />
                <input id="traildesc" name="traildesc" type="text" placeholder="description of trail" /><br />
                <label for="traillocation">location</label><br />
                <input id="traillocation" name="traillocation" type="text" placeholder="location of trail" /><br />
                <button type="submit">Submit Trail</button>
            </form>
        )
    }
}

export default TrailCreate;