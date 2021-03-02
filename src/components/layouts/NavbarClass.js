import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <p>{this.props.test}</p>
      </nav>
    );
  }
}

export default NavbarClass;
