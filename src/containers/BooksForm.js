import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'Drama', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState(
    {
      id: '',
      title: '',
      category: '',
    },
  );

  const handleChange = (e) => {
    const newState = { ...state };
    newState[e.target.name] = e.target.value;
    setState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook({ ...state, id: Math.floor(Math.random() * 100) });
    setState({
      title: '',
      category: '',
    });
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <p>Book title:</p>
        <br />
        <input type="text" id="bookTitle" name="title" value={state.title} onClick={handleChange} />
        <br />
        <select id="bookCategory" onClick={handleChange}>
          {categories.map((cat) => (<option name="category" value={state.category} key={cat}>{cat}</option>))}
        </select>
        <input type="submit" id="bookSubmit" />
      </form>
    </div>
  );
};

export default connect(null, { createBook })(BooksForm);

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
