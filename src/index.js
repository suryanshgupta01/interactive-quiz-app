import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseUserContext from './UseUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<UseUserContext>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</UseUserContext>
);

