import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// Webpack will bundle CSS
import 'bootstrap-css-only/css/bootstrap.min.css';
import './styles/styles.css';

ReactDOM.render(<App />, document.getElementById('app'));
