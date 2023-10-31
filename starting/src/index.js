import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Button2 from './components/Button';
// import Button from './components/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App />
    {/* <Button />
    <Button />
    <Button2 /> */}
  </React.StrictMode>
);


reportWebVitals();
