/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'bookstoreapp/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstoreapp/books/REMOVE_BOOK';
const GET_BOOK = 'bookstoreapp/books/GET_BOOK';

const apiKey = 'kqkewfRoZMkq2lXZaEMG';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const getBooks = createAsyncThunk(
  (GET_BOOK),
  async () => {
    const response = await axios.get(baseUrl);
    const data = await response.data;
    return data;
  },
);

export const bookSlice = createSlice({
  name: 'bookData',
  initialState: {
    books: [],
    status: null,
  },

  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.status = 'success';
      const books = Object.keys(action.payload).map((itemId) => ({
        ...action.payload[itemId][0],
      }));
      state.books = books;
    }),

    builder.addCase(getBooks.pending, (state) => {
      state.status = 'loading';
    }),

    builder.addCase(getBooks.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default bookSlice;
