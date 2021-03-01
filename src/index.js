import React from 'react';
import ReactDOM from 'react-dom';
import AppClass from './AppClass';
import reportWebVitals from './reportWebVitals';

// Takes in two arguments, the element you want to render and where you want to render it.
ReactDOM.render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
