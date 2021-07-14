import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random()).toString(),
      title: 'Die Blechtrommel',
      category: 'History',
    },
    {
      id: Math.floor(Math.random()).toString(),
      title: 'Faust',
      category: 'Drama',
    },
    {
      id: Math.floor(Math.random()).toString(),
      title: 'Im Westen nichts Neues',
      category: 'History',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
