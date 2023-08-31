import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zfjKiymKKAMh6u4bLQpg/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const res = await axios.get(url);
  return res.data;
});

export const postBook = async (book) => {
  await axios.post(url, book);
};

export const deleteBook = async (id) => {
  await axios.delete(`${url}/${id}`);
};

const bookList = (bookItems) => {
  const res = [];
  Object.keys(bookItems).forEach((id) => {
    const book = bookItems[id][0];
    book.item_id = id;
    res.push(book);
  });
  return res;
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      state.books.push(book);
      postBook(book);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.item_id !== bookId);
      deleteBook(bookId);
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.books = bookList(action.payload);
      state.isLoading = false;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
