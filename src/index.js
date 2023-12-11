import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import gameSlice from './lesson8/Store/CardSlice'
import SliceBook from './lesson9/Store/SliceBook';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

const myStore = configureStore({
  reducer: {
    SliceBook
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={myStore}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
