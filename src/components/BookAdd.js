import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const data = {
      item_id: nanoid(),
      ...bookData,
      category: 'Science',
    };
    dispatch(addBook(data));
    setBookData({
      title: '',
      author: '',
    });
  };

  const handleInputChange = (event) => {
    setBookData({
      ...bookData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section>
      <div>
        <h2>Add a book</h2>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            name="author"
            placeholder="author"
            value={bookData.author}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="title"
            placeholder="book"
            value={bookData.title}
            onChange={handleInputChange}
          />
          <button type="submit">Add New</button>
        </form>
      </div>
    </section>
  );
};
export default AddBook;
