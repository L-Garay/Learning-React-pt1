import React, { Component } from 'react';
import UserItemClass from './UserItemClass';
import PropTypes from 'prop-types';
class Users extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  };
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((u) => (
          <UserItemClass key={u.id} user={u} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
