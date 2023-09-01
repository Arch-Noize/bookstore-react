import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlices';
import styles from '../styles/Books.module.css';
import circle from '../styles/circle.png';

const Book = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <li key={id}>
        <div className={styles.card}>
          <div className={styles.gridItem}>
            <div className={styles.details}>
              <h3 className={styles.category}>{category}</h3>
              <h2 className={styles.title}>{title}</h2>
              <h4 className={styles.author}>{author}</h4>
            </div>
            <div className={styles.buttons}>
              <button type="button"> Comments </button>
              <hr />
              <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
              <hr />
              <button type="button"> Edit </button>
            </div>
          </div>
          <img src={circle} alt="percentage" />
          <div className={styles.gridItem} id={styles.percentage}>
            <h3>66%</h3>
            <p>Completed</p>
          </div>
          <hr />
          <div className={styles.gridItem} id={styles.chapter}>
            <h4> CURRENT CHAPTER </h4>
            <h3> Chapter 17 </h3>
            <button type="button"> UPDATE PROGRESS</button>
          </div>
        </div>
      </li>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
