import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlices';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (!title || !author || category === 'Category') {
      e.preventDefault();
    }
    if (title && author && category) {
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
      setCategory('Category');
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Book Title"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Writer"
        onChange={(event) => setAuthor(event.target.value)}
        value={author}
      />
      <select name="category" onChange={(event) => setCategory(event.target.value)}>
        <option value="">Category</option>
        <option value="Action">Action</option>
        <option value="Economy">Economy</option>
        <option value="Sci-fi">Science Fiction</option>
        <option value="Fiction">Fiction</option>

      </select>
      <button
        type="button"
        onClick={handleSubmit}
      >
        Add Book
      </button>
    </form>
  );
};
export default BookForm;
