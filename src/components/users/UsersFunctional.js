import React from 'react';
import UserItemFunctional from './UserItemFunctional';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';

function UsersFunctional(props) {
  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {props.users.map((u) => (
          <UserItemFunctional key={u.id} user={u} />
        ))}
      </div>
    );
  }
}
UsersFunctional.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
export default UsersFunctional;
