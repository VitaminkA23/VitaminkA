import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from "./routing";
import './assets/styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Routing/>
  </React.StrictMode>
);


