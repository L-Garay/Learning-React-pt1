import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const SearchFunctional = (props) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      props.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id="Search Users"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {props.showClear && (
        <button className="btn btn-light btn-block" onClick={props.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
SearchFunctional.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default SearchFunctional;
