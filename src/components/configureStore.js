import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './redux/books/books';
import categoriesReducer from './redux/categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
