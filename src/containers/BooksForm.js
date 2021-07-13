import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

const BooksForm = () => (
  <div>
    <form>
      <label for="bookTitle">Book title:</label><br />
      <input type="text" id="bookTitle" /><br />
      <select id="bookCategory">
        <option value="volvo">Volvo</option>

      </select>
      <input type="submit" id="bookSubmit" />
    </form>
  </div>
);
