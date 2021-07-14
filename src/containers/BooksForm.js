import React from 'react';

const categories = ['Action', 'Biography', 'Drama', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <div>
    <form>
      <p>Book title:</p>
      <br />
      <input type="text" id="bookTitle" />
      <br />
      <select id="bookCategory">
        {categories.map((cat) => (<option value={cat} key={cat}>{cat}</option>))}
      </select>
      <input type="submit" id="bookSubmit" />
    </form>
  </div>
);

export default BooksForm;
