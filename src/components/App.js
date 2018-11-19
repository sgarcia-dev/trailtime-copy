import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './navbar/navbar';
import HomePage from './home/HomePage';
import SignUpPage from './auth/SignUpPage';
import LogInPage from './auth/LogInPage';
import TrailCreatePage from './trails/trailcreate/TrailCreatePage';
import TrailDetailPage from './trails/traildetail/TrailDetailPage';
import TrailEditPage from './trails/trailedit/TrailEditPage';
import TrailDashboard from './trails/trailDashboard/trailDashboard.js';
//import TrailForm from '../trails/trailcreate/TrailForm';
//import TrailCreatePage from '../trails/trailcreate/TrailCreatePage'

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
              <NavBar />
              <div className="main">
                <Switch>
                  <Route path="/login" component={LogInPage} />
                  <Route path="/signup" component={SignUpPage} />
                  <Route path="/create" component={TrailCreatePage} />
                  <Route path="/detail/:id" component={TrailDetailPage} />
                  <Route path="/edit/:id" component={TrailEditPage/*TrailEditPage*/} />
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