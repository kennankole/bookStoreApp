import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const data = useSelector((state) => state.categories);
  const [click, setClicked] = useState(false);

  const dispatch = useDispatch();

  const handleStatusChange = () => {
    dispatch(checkStatus());
    setClicked(true);
  };

  return (
    <div className="category-section">
      {
        !click ? <button type="button" className="primary-button" onClick={handleStatusChange}>Check status</button>
          : <h2 className="categoryError">{data}</h2>
        }
    </div>
  );
};
export default Category;
