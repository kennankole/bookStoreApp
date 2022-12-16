/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'bookstoreapp/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstoreapp/books/REMOVE_BOOK';
const GET_BOOK = 'bookstoreapp/books/GET_BOOK';

const apiKey = 'kqkewfRoZMkq2lXZaEMG';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;
export const addBook = createAsyncThunk(
  (ADD_BOOK),
  async (payload) => {
    const postData = await axios.post(
      baseUrl, payload,
    );
    return postData;
  },
);

export const deleteBooks = createAsyncThunk(
  (REMOVE_BOOK),
  async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response;
  },
);

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
  reducers: {
    removeBook(state, action) {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload.item_id,
      );
    },

    addingBooks(state, action) {
      state.books.push(...action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.status = 'success';
      const bookResults = Object.entries(action.payload);
      const books = bookResults.map(([key, item]) => ({
        ...item[0], item_id: key,
      }));
      state.books = books;
    });

    builder.addCase(getBooks.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(getBooks.rejected, (state) => {
      state.status = 'failed';
    });
  },
});
export default bookSlice.reducer;
