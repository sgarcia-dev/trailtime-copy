import React from 'react';
import './index.css';
import logo from './logo.svg';

const HomePage = ({ history }) => {
    return (
        <React.Fragment>
            <div className='bg'>
                <header role="banner">
                    <img src={logo} />
                    <div className="row">
                    </div>
                </header>
                <main role="main">
                    <div>
                        <span className="circle">Discover new trails</span>
                        <span className="circle">Add your trails</span>
                        <span className="circle">Meet up with others</span>
                        <button className="loginbtn" onClick={() => history.push('/login')} type="button">Start Adventuring > </button>
                    </div><br /><br />
                </main>
            </div>
        </React.Fragment>
    )
}

export default HomePage;