import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import categories from '../categories/categories';

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
    <div className="book-form">
      <h2 className="grey">ADD NEW BOOK</h2>
      <form method="POST" onSubmit={handleSubmit} className="book-form-container flex">
        <input type="text" className="input-field" placeholder="Title" name="title" value={state.title} onChange={handleChange} required />
        <br />
        <select onChange={handleChange} name="category" value={state.category} className="input-form">
          {categories.map((cat) => (<option key={cat}>{cat}</option>))}
        </select>
        <input type="submit" id="bookSubmit" className="input-submit blue" />
      </form>
    </div>
  );
};

export default connect(null, { createBook })(BooksForm);

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
