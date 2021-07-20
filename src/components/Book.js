import React from 'react';
import PropTypes from 'prop-types';
import progress from '../assets/progress.png';

export default function Book({ book, handleRemoveBook }) {
  const { id, title, category } = book;

  return (
    <div className="book-container flex">
      <div className="book-info flex">
        <span className="book-category grey">
          {category}
          <span className="book-id">{id}</span>
        </span>
        <p className="book-title">{title}</p>
        <p className="book-author blue">Mr.Author</p>
        <div className="book-info-buttons">
          <button className="comments-button blue" type="button">Comments</button>
          <button className="remove-button blue" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <button className="blue" type="button">Edit</button>
        </div>
      </div>
      <div className="book-circle flex">
        <img src={progress} alt="circled progress bar" className="progress-bar align-self-center" />
        <div className="progress-description flex">
          <p className="percentage">25%</p>
          <p className="completed grey">Completed</p>
        </div>
      </div>
      <div className="divider align-self-center" />
      <div className="book-reading-info">
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter-number">Chapter 16</p>
        <button className="update-progress" type="button">UPDATE PROGRESS</button>
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
