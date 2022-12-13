const ADD_BOOK = 'bookstoreapp/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstoreapp/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'JavaScript ES6',
    author: 'Ankole',
    id: 1,
  },
  {
    title: 'React-Redux ',
    author: 'Anko',
    id: 2,
  },
  {
    title: 'TDD in React',
    author: 'Ankoe',
    id: 3,
  },
];

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
