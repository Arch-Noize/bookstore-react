import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author, handleClick } = props;
  return (
    <li>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={handleClick}>Delete</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;
