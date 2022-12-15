/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
// import axios from 'axios';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // const postData = async () => {
    //   const results = await axios.post(baseUrl, {
    //     item_id: nanoid(),
    //     title,
    //     author,
    //     category: '',
    //   });
    //   console.log(results);
    // };
    // postData();
    dispatch(addBook(nanoid(), title, author));
    setTitle('');
    setAuthor('');
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <section>
      <div>
        <h2>Add a book</h2>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="author"
            value={author}
            onChange={handleAuthorChange}
          />
          <input
            type="text"
            placeholder="book"
            value={title}
            onChange={handleTitleChange}
          />
          <button type="submit">Add New</button>
        </form>
      </div>
    </section>
  );
};
export default AddBook;
