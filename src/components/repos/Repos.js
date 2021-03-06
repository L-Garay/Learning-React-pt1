import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map((r) => {
    return <RepoItem repo={r} key={r.id} />;
  });
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default Repos;
