/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeBook(id));
    console.log('removed book', id);
  };

  return (
    <li>
      {props.data.title}
      {props.data.author}
      <span>
        <button
          type="submit"
          onClick={() => handleRemoveItem(props.data.id)}
        >
          Remove
        </button>
      </span>
    </li>
  );
};
export default BookItem;
