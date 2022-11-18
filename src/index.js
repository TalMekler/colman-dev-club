import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const body = document.body;
// body.style.backgroundColor = "darkgray";
body.classList.add("bg-dark");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);