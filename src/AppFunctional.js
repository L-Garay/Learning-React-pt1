import React from 'react';
import './App.css';
import UserFunctional from './components/users/UserFunctional';
import NavbarFunctional from './components/layouts/NavbarFunctional';
import Home from './components/pages/Home';
import AlertFunctional from './components/layouts/AlertFunctional';
import AboutFunctional from './components/pages/AboutFunctional';
import NotFound from './components/pages/NotFound';
// import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

// const github = axios.create({
//   baseURL: 'https://api.github.com',
//   timeout: 1000,
//   headers: {
//     Authorization: process.env.REACT_APP_GITHUB_TOKEN,
//   },
// });

const AppFunctional = () => {
  const test = 'Not the Github you are looking for';

  // useEffect(() => {
  //   getRandom();
  //   // eslint-disable-next-line
  // }, []);

  // Get 30 random users
  // const getRandom = async () => {
  //   setLoading(true);
  //   const res = await github.get(
  //     `/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setUsers(res.data);
  //   setLoading(false);
  // };

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
};

export default AppFunctional;
