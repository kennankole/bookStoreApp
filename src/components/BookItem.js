/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const apiKkey = 'kqkewfRoZMkq2lXZaEMG';
// const appId = 'g7dj58UKgU7fzx0rJuTx';
export const baseUrls = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKkey}/books`;

const BookItem = (props) => {
  const dispatch = useDispatch();

  const handleDeletItems = async (id) => {
    axios.delete(`${baseUrls}/${id}`);
  };
  const handleRemoveItem = (id) => {
    // dispatch(removeBook(id));
    // props.data.filter((item) => props.id !== id);
    const removItem = async () => {
      axios.delete(`${baseUrls}/${id}`);
    };
    removItem();
  };

  return (
    <li>
      {props.data.title}
      {props.data.author}
      <span>
        <button
          type="submit"
          onClick={() => handleDeletItems(props.data.item_id)}
        >
          Remove
        </button>
      </span>
    </li>
  );
};
export default BookItem;
