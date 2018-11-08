import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Navbar from '../navbar/navbar';
import Home from '../home/home';
import Signup from '../auth/signup';
import Login from '../auth/login';
import TrailCreate from '../trails/trailcreate/trailcreate';
import TrailDetail from '../trails/traildetail/traildetail';
import TrailEdit from '../trails/trailedit/trailedit';
import TrailList from '../trails/traillist/traillist';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Route path="/(.+)" render={() => ( //regular expression so navbar isn't on home page above
            <div>
              <Navbar />
              <div className="main">
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/create" component={TrailCreate} />
                  <Route path="/detail" component={TrailDetail} />
                  <Route path="/edit" component={TrailEdit} />
                  <Route path="/trails" component={TrailList} />
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