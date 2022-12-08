/* eslint-disable array-callback-return */
import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const state = {
    data: [
      {
        title: 'JavaScript ES6',
        author: 'Ankole',
        id: 1,
      },
      {
        title: 'React-Redux ',
        author: 'Anko',
        id: 2,
      },
      {
        title: 'TDD in React',
        author: 'Ankoe',
        id: 3,
      },
    ],
  };
  return (
    <section>
      <ul>
        {state.data.map((item) => (
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
