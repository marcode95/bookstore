const booksReducer = (state = [], action) => {
  const { type, book } = action;
  switch (type) {
    case 'CREATE_BOOK':
      return state.concat(book);
    case 'REMOVE_BOOK':
      return state.filter((oldBook) => oldBook.id !== book.id);
    default:
      return state;
  }
};

export default booksReducer;
