import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlices';
import styles from '../styles/Books.module.css';

const Book = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <h3>{title}</h3>
      <ul className={styles.details}>
        <li>{author}</li>
        <li>{category}</li>
      </ul>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Delete</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
