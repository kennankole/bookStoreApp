/* eslint-disable semi */
/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const data = useSelector((state) => state.books);

  return (
    <section>
      <ul>
        {data.map((item) => (
          <BookItem
            key={item.id}
            data={item}
          />
        ))}
      </ul>
    </section>

  );
};
export default BookList;
