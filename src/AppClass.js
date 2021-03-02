import React from 'react';
import './App.css';
import NavbarClass from './components/layouts/NavbarClass';
import UsersClass from './components/users/UsersClass';
import NavbarFunctional from './components/layouts/NavbarFunctional';
import UsersFunctional from './components/users/UsersFunctional';
import axios from 'axios';

// NOTE Class based component
// It needs to extend the base React Component class
// There are multiple lifecycle hooks, but 'render()' is required and is used to render the DOM when the component is created
class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data });
  }
  render() {
    const useClass = false;
    const test = 'Not the Github you are looking for';
    if (useClass) {
      return (
        <div className="App">
          <NavbarClass title="Github Explorer" test={test} />
          <div className="container">
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
