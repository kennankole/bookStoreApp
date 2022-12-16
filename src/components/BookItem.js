/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../redux/books/books';

const apiKkey = 'kqkewfRoZMkq2lXZaEMG';
export const baseUrls = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKkey}/books`;

const BookItem = (props) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(deleteBooks(id));
  };

  return (
    <li>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">{props.data.category}</h4>
            <h2 className="book-title">{props.data.title}</h2>
            <h6 className="book-author">{props.data.author}</h6>
            <div className="action-buttons">
              <button className="button-outline" type="button">Comment</button>
              <div className="vertical-divider" />
              <button
                className="button-outline"
                type="button"
                onClick={() => handleRemoveItem(props.data.item_id)}
              >
                Remove
              </button>
              <div className="vertical-divider" />
              <button className="button-outline" type="button">Edit</button>
              <div className="vertical-divider" />
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
            <div className="progress-stat">
              <p className="percent-complete">89%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 17</p>
              </div>
              <div>
                <button className="primary-button" type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default BookItem;
