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
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmitForm} className="add-form">
        <input
          className="input title-input"
          type="text"
          name="author"
          placeholder="author"
          value={bookData.author}
          onChange={handleInputChange}
        />
        <input
          className="input title-input"
          type="text"
          name="title"
          placeholder="book"
          value={bookData.title}
          onChange={handleInputChange}
        />
        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};
export default AddBook;
