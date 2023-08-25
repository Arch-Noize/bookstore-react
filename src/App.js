import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import Categories from './pages/Categories';
import BookNav from './components/BookNav';

function App() {
  return (
    <>
      <BookNav />
      <Routes>
        <Route path="/" element={<Frontpage />}>
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
