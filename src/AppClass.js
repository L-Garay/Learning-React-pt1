import React from 'react';
import './App.css';
import NavbarClass from './components/layouts/NavbarClass';
import UsersClass from './components/users/UsersClass';
import NavbarFunctional from './components/layouts/NavbarFunctional';
import UsersFunctional from './components/users/UsersFunctional';
import SearchClass from './components/users/SearchClass';
import AlertFunctional from './components/layouts/AlertFunctional';
import axios from 'axios';
// import PropTypes from 'prop-types';

const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {
    Authorization: process.env.REACT_APP_GITHUB_TOKEN,
  },
});
// NOTE Class based component
// It needs to extend the base React Component class
// There are multiple lifecycle hooks, but 'render()' is required and is used to render the DOM when the component is created
class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // static propTypes = {
  //   searchUsers: PropTypes.func.isRequired,
  //   clearhUsers: PropTypes.func.isRequired,
  //   showClear: PropTypes.bool.isRequired,
  // };

  // Get 30 random profiles when component is first mounted
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await github.get(
      `/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data });
  }

  // Use search input to search for users
  searchUsers = async (searchText) => {
    this.setState({ loading: true });
    const res = await github.get(`/search/users?q=${searchText}`);
    this.setState({ loading: false, users: res.data.items });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // Set error alert
  setAlert = (message, type) => {
    this.setState({ alert: { msg: message, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 4000);
  };
  render() {
    const useClass = false;
    const test = 'Not the Github you are looking for';
    if (useClass) {
      return (
        <div className="App">
          <NavbarClass title="Github Explorer" test={test} />
          <div className="container">
            <AlertFunctional alert={this.state.alert} />
            <SearchClass
              searchUsers={this.searchUsers}
              clearUsers={this.clearUsers}
              showClear={this.state.users.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
            <UsersClass loading={this.state.loading} users={this.state.users} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <NavbarFunctional title="Github Explorer" test={test} />
          <p>
            <small>Hello from functional</small>
          </p>
          <div className="container">
            <AlertFunctional alert={this.state.alert} />
            <SearchClass
              searchUsers={this.searchUsers}
              clearUsers={this.clearUsers}
              showClear={this.state.users.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
            <UsersFunctional
              loading={this.state.loading}
              users={this.state.users}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
