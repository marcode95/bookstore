import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <tbody>
      {books.map((book) => (<Book book={book} key={book.id} />))}
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]),
};
