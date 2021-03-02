import React from 'react';
import PropTypes from 'prop-types';

function NavbarFunctional(props) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={props.icon}></i>
        {props.title}
      </h1>
      <p>{props.test}</p>
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
