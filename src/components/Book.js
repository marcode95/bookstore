import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book, handleRemoveBook }) {
  const { id, title, category } = book;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <button type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
    </tr>
  );
}

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  handleRemoveBook: PropTypes.func.isRequired,
};
