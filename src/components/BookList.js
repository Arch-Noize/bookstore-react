import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import styles from '../styles/Books.module.css';

const BookList = () => {
  const books = useSelector((state) => state.books);

  if (books.books.length === 0) {
    return (
      <>
        <div className={styles.container}>
          <h2>Currently, theres no Books!</h2>
        </div>
        <BookForm />
      </>
    );
  }

  return (
    <div className={styles.container}>
      <ul className={styles.bookList}>
        {books.books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.item_id}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default BookList;
