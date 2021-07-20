const filterReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_FILTER':
      return state.filter((book) => book.category === payload);
    default:
      return state;
  }
};

export default filterReducer;