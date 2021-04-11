import React, { useContext } from 'react';
import UserItemFunctional from './UserItemFunctional';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/githubContext';

function UsersFunctional() {
  const githubContext = useContext(GithubContext);

  if (githubContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {githubContext.users.map((u) => (
          <UserItemFunctional key={u.id} user={u} />
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
export default UsersFunctional;
