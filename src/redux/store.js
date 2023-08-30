import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlices';
import categoriesReducer from './categories/categoriesSlices';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});
