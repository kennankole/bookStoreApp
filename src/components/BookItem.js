/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const BookItem = (props) => (
  <li>
    {props.data.title}
    {' '}
    |
    {props.data.author}
  </li>
);
export default BookItem;
