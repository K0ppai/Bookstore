/* eslint-disable */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const APP_ID = 'Cr1NFgvae4ISnLGHWK50';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const BOOKS_URL = `${BASE_URL}${APP_ID}/books`;

export const createAppId = createAsyncThunk('books/createAppId', async () => {
  try {
    const response = await axios.post(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addBooks = createAsyncThunk('books/addBooks', async (newBook) => {
  await axios.post(`${BOOKS_URL}`, newBook);
  return newBook;
});

export const getBooks = createAsyncThunk('books/getBook', async () => {
  const response = await axios.get(`${BOOKS_URL}`);
  return response.data;
});

export const removeBooks = createAsyncThunk('books/removeBooks', async (bookId) => {
  await axios.delete(`${BOOKS_URL}/${bookId}`);
  return bookId;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBooks.fulfilled, (state, action) => {
      const newBook = action.payload;
      state.books.push(newBook);
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const booksData = action.payload;
      const books = Object.entries(booksData).map(([item_id, bookArray]) => ({
        ...bookArray[0],
        item_id,
      }));
      state.books = books;
    });
    builder.addCase(removeBooks.fulfilled, (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
    });
  },
});

export default bookSlice.reducer;
