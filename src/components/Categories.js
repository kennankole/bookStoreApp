import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const data = useSelector((state) => state.categories);
  // const [display, setDisplay] = useState(null);
  const [click, setClicked] = useState(false);

  const dispatch = useDispatch();

  const handleStatusChange = () => {
    dispatch(checkStatus());
    // setDisplay('None');
    setClicked(true);
  };

  return (
    <div className="category-section">
      {
        !click ? <button type="button" className="primary-button" onClick={handleStatusChange}>Check status</button>
          : <p className="categoryError">{data}</p>
        }
    </div>
  );
};
export default Category;
