import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './actions';

const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  payload: category,
});

export {
  createBook,
  removeBook,
  changeFilter,
};
