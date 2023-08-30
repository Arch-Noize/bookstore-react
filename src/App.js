import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import BookList from './components/BookList';
import CategoriesPage from './pages/CategoriesPage';

function App() {
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
