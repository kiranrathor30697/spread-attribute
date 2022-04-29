import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let p = {
  name:'Kiran',
  surname:'Rathor',
  mob:675464356
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App {...p} />
  </React.StrictMode>
);

reportWebVitals();
