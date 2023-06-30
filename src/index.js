// Fichero src/index.js (código nuevo)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import {HashRouter} from 'react-router-dom';// indicamos que vamos a usar las rutas con Browser

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// HashRouter es ahora la madre de App. 
