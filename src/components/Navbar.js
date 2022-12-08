import { Routes, Route, Link } from 'react-router-dom';
import BookList from './BookList';
import AddBook from './BookAdd';
import Category from './Categories';
import './App.css';

const NavigationMenu = () => (
  <section>
    <nav>
      <Link to="book-list">Books</Link>
      |
      <Link to="add-book">Book Add</Link>
      |
      <Link to="category">Category</Link>
    </nav>
    <nav>
      <Routes>
        <Route path="book-list" element={<BookList />} />
        <Route path="add-book" element={<AddBook />} />
        <Route path="category" element={<Category />} />
      </Routes>
    </nav>
  </section>
);
export default NavigationMenu;
