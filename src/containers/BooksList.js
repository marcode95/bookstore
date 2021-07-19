import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  return (
    <table>
      <tbody>
        {books.map(
          (book) => (<Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />),
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({ books: state.books });

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]),
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeBook })(BooksList);
