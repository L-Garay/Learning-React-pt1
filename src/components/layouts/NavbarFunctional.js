import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavbarFunctional(props) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={props.icon}></i>
        {props.title}
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
NavbarFunctional.defaultProps = {
  icon: 'fab fa-github',
};
NavbarFunctional.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};

export default NavbarFunctional;
