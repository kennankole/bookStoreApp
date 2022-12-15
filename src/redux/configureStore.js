import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './books/books';

import { categoriesReducer } from './categories/categories';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: bookSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
