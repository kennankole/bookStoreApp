import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();

  const handleStatusChange = () => {
    dispatch(checkStatus());
  };

  return (
    <section>
      <div>
        <button type="submit" onClick={handleStatusChange}>Check status</button>
      </div>
    </section>
  );
};
export default Category;
