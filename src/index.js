import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { modalReducer } from './components/reduxComp/modalDispatch';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(modalReducer)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
