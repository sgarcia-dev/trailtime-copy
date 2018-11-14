import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Navbar from '../navbar/navbar';
import HomePage from '../home/HomePage';
import Signup from '../auth/signup';
import LogInPage from '../auth/LogInPage';
import TrailCreatePage from '../trails/trailcreate/TrailCreatePage';
import TrailDetailPage from '../trails/traildetail/TrailDetailPage';
import TrailEditPage from '../trails/trailedit/TrailEditPage';
import TrailDashboard from '../trails/traildashboard/TrailDashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Route path="/(.+)" render={() => ( //regular expression so navbar isn't on home page above
            <div>
              <Navbar />
              <div className="main">
                <Switch>
                  <Route path="/login" component={LogInPage} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/create" component={TrailCreatePage} />
                  <Route path="/detail/:id" component={TrailDetailPage} />
                  <Route path="/edit" component={TrailEditPage} />
                  <Route path="/trails" component={TrailDashboard} />
                </Switch>
              </div>
            </div>
          )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
//add basic router, navbar with urls to the components links, views to look like the jquery wireframes, 
//no logic/communication (onclick events) cuz thats what redux is for

/* 
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
*/
//And for the links to navigate between views/routes, 
//just review the example above, and add statements ilke like this to your Navbar:  `<Link to="/">Home</Link>`