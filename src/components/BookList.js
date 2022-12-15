/* eslint-disable semi */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { getBooks } from '../redux/books/books';

const BookList = () => {
  const data = useSelector((state) => state.books);
  console.log(data)
  console.log(data.books[0].title)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <section>
      <ul>
        {data.books.map((item) => (
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
