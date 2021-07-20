const initialState = [
  {
    id: Math.floor(Math.random() * 100),
    title: 'Die Blechtrommel',
    category: 'History',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Faust',
    category: 'Drama',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Im Westen nichts Neues',
    category: 'History',
  },
];

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CREATE_BOOK':
      return state.concat(payload);
    case 'REMOVE_BOOK':
      return state.filter((oldBook) => oldBook !== payload);
    default:
      return state;
  }
};

export default booksReducer;
