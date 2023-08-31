import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7UcxFv8FAqQo5Ix5MjG4/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const res = await axios.get(url);
  return res.data;
});

export const postBook = async (book) => {
  await axios.post(url, book);
};

const bookList = (bookItems) => {
  const res = [];
  Object.keys(bookItems).forEach((itemId) => {
    const book = bookItems[itemId][0];
    book.item_id = itemId;
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
      return { ...state, books: state.books.filter((item) => item.item_id !== bookId) };
    },
  },
  extraReducers: {
    // [getBooks.pending]: (state) => {
    //   state.isLoading = true;
    // },
    [getBooks.fulfilled]: (state, action) => {
      const book = action.payload;
      console.log(book);
      console.log(bookList(book));
    },
    // [getBooks.rejected]: (state) => {
    //   state.isLoading = false;
    // },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
