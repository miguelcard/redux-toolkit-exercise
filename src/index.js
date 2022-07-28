import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import userReducer from './features/userSlice'
import themeReducer from './features/themeSlice'

const root = ReactDOM.createRoot(document.getElementById('root'));

// defines the store, pass a collection of reducers inside
// normally you declare this in a file called "store.js"
const store = configureStore({
  reducer: {
    user: userReducer,    // here we will add all our reducers
    theme: themeReducer,
  },
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// reportWebVitals();
