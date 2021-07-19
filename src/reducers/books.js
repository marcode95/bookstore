const initialState = [
  {
    id: Math.floor(Math.random() * 100).toString(),
    title: 'Die Blechtrommel',
    category: 'History',
  },
  {
    id: Math.floor(Math.random() * 100).toString(),
    title: 'Faust',
    category: 'Drama',
  },
  {
    id: Math.floor(Math.random() * 100).toString(),
    title: 'Im Westen nichts Neues',
    category: 'History',
  },
];

const booksReducer = (state = initialState, action) => {
  const { type, book } = action;
  switch (type) {
    case 'CREATE_BOOK':
      return state.concat(book);
    case 'REMOVE_BOOK':
      return state.filter((oldBook) => oldBook !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
