import React from 'react';

const HomePage = ({ history }) => {
    return (
        <div>
            <header role="banner">
                <div className="heroPic">picture in here</div>
                <h1>Trail Time</h1>
                <h5>(or Trail Log, or Jeep Meet)</h5>
                <div className="row">
                </div>
            </header>
            <main role="main">
                <div>
                    <p>Discover new trails, log your photos, and meet up with others.</p><br />
                    <button className="loginbtn" onClick={() => history.push('/login')} type="button">Log In</button>
                    <button className="signupbtn" onClick={() => history.push('/signup')} type="button">Sign Up</button>
                </div><br /><br />
            </main>
        </div>
    )
}

export default HomePage;