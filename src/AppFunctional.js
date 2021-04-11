import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import UserClass from './components/users/UserClass';
import NavbarFunctional from './components/layouts/NavbarFunctional';
import UsersFunctional from './components/users/UsersFunctional';
import SearchFunctional from './components/users/SearchFunctional';
import AlertFunctional from './components/layouts/AlertFunctional';
import AboutFunctional from './components/pages/AboutFunctional';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import GithubState from './context/github/GithubState';

const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {
    Authorization: process.env.REACT_APP_GITHUB_TOKEN,
  },
});

const AppFunctional = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const test = 'Not the Github you are looking for';

  useEffect(() => {
    getRandom();
    // eslint-disable-next-line
  }, []);

  // Get 30 random users
  const getRandom = async () => {
    setLoading(true);
    const res = await github.get(
      `/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data);
    setLoading(false);
  };

  // Get single user
  const getUser = async (username) => {
    setLoading(true);
    const res = await github.get(`/users/${username}`);
    setUser(res.data);
    setLoading(false);
  };

  // Get user repositories
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await github.get(
      `/users/${username}/repos?per_page=5&sort=created:asc`
    );
    setRepos(res.data);
    setLoading(false);
  };

  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Set error alert
  const setAlerts = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <NavbarFunctional title="Github Explorer" test={test} />
          <p>
            <small>Hello from functional</small>
          </p>
          <div className="container">
            <AlertFunctional alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <SearchFunctional
                      {...props}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={setAlerts}
                    />
                    <UsersFunctional loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={AboutFunctional} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <UserClass
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default AppFunctional;
