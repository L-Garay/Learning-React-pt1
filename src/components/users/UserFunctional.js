import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const UserFunctional = (props) => {
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = props.user;
  return <div></div>;
};

UserFunctional.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};
export default UserFunctional;
