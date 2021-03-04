import React from 'react';
// import PropTypes from 'prop-types';

const AlertFunctional = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i>
        {alert.msg}
      </div>
    )
  );
};

export default AlertFunctional;
