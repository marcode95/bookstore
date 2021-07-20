import React from 'react';
import PropTypes from 'prop-types';
import progress from '../assets/progress.png';

export default function Book({ book, handleRemoveBook }) {
  const { id, title, category } = book;

  return (
    <div className="book-container">
      <div className="book-info">
        <span className="book-category">
          {category}
          <span className="book-id">{id}</span>
        </span>
        <p className="book-title">{title}</p>
        <p className="book-author">Mr.Author</p>
        <div className="book-info-buttons">
          <button className="comments-button" type="button">Comments</button>
          <button className="remove-button" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-circle">
        <img src={progress} alt="circled progress bar" className="progress-bar" />
        <div className="progress-description">
          <p className="percentage">25%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="book-reading-info">
        <p>Current Chapter</p>
        <p>Chapter 16</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
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
