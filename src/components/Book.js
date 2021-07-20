import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book, handleRemoveBook }) {
  const { id, title, category } = book;

  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
      </tr>
      <button type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
    </tbody>
  );
}

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  handleRemoveBook: PropTypes.func.isRequired,
};
