import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { getBooks } from '../redux/books/books';

const BookList = () => {
  const data = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <section>
      <ul className="book-list">
        {data.books.map((item) => (
          <BookItem
            key={item.item_id}
            data={item}
          />
        ))}
      </ul>
    </section>

  );
};

export default BookList;
