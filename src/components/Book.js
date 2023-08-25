import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, handleClick } = props;
  return (
    <li>
      <h3>{title}</h3>
      <button type="button" onClick={handleClick}>Delete</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;
