import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

const BooksList = ({ books, removeBook, changeFilter }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  return (
    <div>
      <div className="navbar flex">
        <h1 className="blue">Bookstore CMS</h1>
        <p className="navbar-books align-self-center">BOOKS</p>
        <CategoryFilter onChangeHandler={handleFilterChange} />
      </div>
      {books.map(
        (book) => (<Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />),
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { books } = state;
  const { filter } = state;
  if (filter !== 'All') {
    const result = books.filter((book) => book.category === filter);
    return { books: result };
  }
  return { books };
};

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);
