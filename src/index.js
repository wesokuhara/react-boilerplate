import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// Webpack will bundle CSS
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import './styles/styles.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
