import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlices';

const Book = (props) => {
  const { title, author , id } = props;
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Delete</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
