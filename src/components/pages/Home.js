import React, { Fragment } from 'react';
import UsersFunctional from '../users/UsersFunctional';
import SearchFunctional from '../users/SearchFunctional';

const Home = () => {
  return (
    <Fragment>
      <SearchFunctional />
      <UsersFunctional />
    </Fragment>
  );
};
export default Home;
