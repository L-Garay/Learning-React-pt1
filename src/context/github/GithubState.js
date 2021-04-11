import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {
    Authorization: process.env.REACT_APP_GITHUB_TOKEN,
  },
});

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  // Use search input to search for users
  const searchUsers = async (searchText) => {
    setLoading();
    const res = await github.get(`/search/users?q=${searchText}`);
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  // Get User
  // Get single user
  const getUser = async (username) => {
    setLoading();
    const res = await github.get(`/users/${username}`);
    dispatch({ type: GET_USER, payload: res.data });
  };
  // Get Repos
  // Get user repositories
  const getUserRepos = async (username) => {
    const res = await github.get(
      `/users/${username}/repos?per_page=5&sort=created:asc`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };
  // Clear Users
  // Clear users from state
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };
  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    ></GithubContext.Provider>
  );
};

export default GithubState;
