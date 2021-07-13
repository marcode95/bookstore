import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div>
    {book}
  </div>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Array).isRequired,
};

export default Book;
