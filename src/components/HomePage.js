import { Routes, Route, Link } from 'react-router-dom';
import BookList from './BookList';
import Category from './Categories';
import './App.css';

const HomePage = () => (
  <main>
    <section>
      <nav>
        <ul className="ul-nav-elements">
          <h1 className="nav-brand">Bookstore CMS</h1>
          <Link to="book-list" className="nav-elements book-nav">BOOK</Link>
          <Link to="category" className="nav-elements category">CATEGORY</Link>
        </ul>
        <Routes>
          <Route path="book-list" element={<BookList />} />
          <Route path="category" element={<Category />} />
        </Routes>
      </nav>
    </section>
  </main>
);
export default HomePage;
