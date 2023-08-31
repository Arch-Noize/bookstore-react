import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Frontpage from './pages/Frontpage';
import BookList from './components/BookList';
import CategoriesPage from './pages/CategoriesPage';
import { getBooks } from './redux/books/booksSlices';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Frontpage />}>
          <Route index element={<BookList />} />
          <Route path="categories" element={<CategoriesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
