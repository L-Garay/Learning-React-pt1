import React, { Fragment, useContext, useEffect } from 'react';
import UsersFunctional from '../users/UsersFunctional';
import SearchFunctional from '../users/SearchFunctional';
import GithubContext from '../../context/github/githubContext';

const Home = () => {
  const githubContext = useContext(GithubContext);
  const { getRandom } = githubContext;
  useEffect(() => {
    console.log('Hello world');
    getRandom();
    console.log('Bye world');
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <SearchFunctional />
      <UsersFunctional />
    </Fragment>
  );
};
export default Home;
