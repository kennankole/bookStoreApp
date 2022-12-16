import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBooks } from '../redux/books/books';

const apiKkey = 'kqkewfRoZMkq2lXZaEMG';
export const baseUrls = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKkey}/books`;

const BookItem = (props) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(deleteBooks(id));
  };
  const {
    title, author, category, id,
  } = props;
  return (
    <li>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">{category}</h4>
            <h2 className="book-title">{title}</h2>
            <h6 className="book-author">{author}</h6>
            <div className="action-buttons">
              <button className="button-outline" type="button">Comment</button>
              <div className="vertical-divider" />
              <button
                className="button-outline"
                type="button"
                onClick={() => handleRemoveItem(id)}
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

BookItem.defaultProps = {
  title: 'title',
  author: 'author',
  category: 'category',
  id: 'id',
};

BookItem.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
};

export default BookItem;
