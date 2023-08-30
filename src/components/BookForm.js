import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/BookForm.module.css';
import { addBook } from '../redux/books/booksSlices';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  return (
    <form className={styles.container}>
      <input
        type="text"
        placeholder="Book..."
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Writer..."
        onChange={(event) => setAuthor(event.target.value)}
        value={author}
      />
      <button type="button" onClick={() => dispatch(addBook({ title, author, id: uuidv4() }))}>Add Book</button>
    </form>
  );
};
export default BookForm;
