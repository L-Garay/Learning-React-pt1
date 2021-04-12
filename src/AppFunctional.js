import React from 'react';
import './App.css';
import UserFunctional from './components/users/UserFunctional';
import NavbarFunctional from './components/layouts/NavbarFunctional';
import Home from './components/pages/Home';
import AlertFunctional from './components/layouts/AlertFunctional';
import AboutFunctional from './components/pages/AboutFunctional';
import NotFound from './components/pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const AppFunctional = () => {
  const test = 'Not the Github you are looking for';

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavbarFunctional title="Github Explorer" test={test} />
            <p>
              <small>Hello from functional</small>
            </p>
            <div className="container">
              <AlertFunctional />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={AboutFunctional} />
                <Route exact path="/user/:login" component={UserFunctional} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
  // return (
  //   <div>
  //     <h1>Hello World</h1>
  //     <p>{test}</p>
  //   </div>
  // );
};

export default AppFunctional;
