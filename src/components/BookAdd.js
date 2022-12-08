import React from 'react';

const AddBook = () => (
  <section>
    <div>
      <h2>Add a book</h2>
      <form>
        <input type="text" placeholder="author" />
        <input type="text" placeholder="book" />
        <button type="submit">+Add</button>
      </form>
    </div>
  </section>
);
export default AddBook;
