/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../redux/books/books';

const apiKkey = 'kqkewfRoZMkq2lXZaEMG';
export const baseUrls = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKkey}/books`;

const BookItem = (props) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(deleteBooks(id));
  };

  return (
    <li className="book-list-elements">
      {props.data.title}
      {props.data.author}
      <span className="delete-btn">
        <button
          type="submit"
          onClick={() => handleRemoveItem(props.data.item_id)}
        >
          Remove
        </button>
      </span>
    </li>
  );
};
export default BookItem;
