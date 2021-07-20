import React from 'react';
import PropTypes from 'prop-types';
import categories from '../categories/categories';

const CategoryFilter = ({ onChangeHandler }) => (
  <select onChange={(e) => onChangeHandler(e.target.value)} className="select-field">
    {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
  </select>
);

CategoryFilter.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
