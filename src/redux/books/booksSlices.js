import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      console.log(action);
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
