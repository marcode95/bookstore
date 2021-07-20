import React, { useState } from 'react';
import categories from '../categories/categories';
import { changeFilter } from '../actions/index';

const CategoryFilter = ({ createBook }) => {
  
  const handleChange = (e) => {
    changeFilter(e.target.value)
  };

  return (
  <select onClick={handleChange}>
    {categories.map((cat) => (<option name="category" key={cat}>{cat}</option>))}
  </select>
  );
};

export default CategoryFilter;