import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { REMOVE_ALERT, SET_ALERT } from '../types';

const AlertState = () => {
  const initialState = {};

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  // Set error alert
  const setAlert = (message, type) => {
    setAlert({ message, type });
    dispatch({ type: SET_ALERT, payload: { message, type } });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 4000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    ></AlertContext.Provider>
  );
};

export default AlertState;
