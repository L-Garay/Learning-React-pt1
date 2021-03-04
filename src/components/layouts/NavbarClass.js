import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavbarClass extends Component {
  static defaultProps = {
    icon: 'fab fa-github',
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    test: PropTypes.string.isRequired,
  };
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavbarClass;
