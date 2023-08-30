import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlices';
import categoriesReducer from './categories/categoriesSlices';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
