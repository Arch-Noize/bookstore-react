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
    <div className={styles.card}>
      <li key={id}>
        <div className={styles.details}>
          <h3>{author}</h3>
          <h2>{title}</h2>
          <h4>{category}</h4>
        </div>
        <div className={styles.buttons}>
          <button type="button"> Comments </button>
          <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button"> Edit </button>
        </div>
      </li>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
