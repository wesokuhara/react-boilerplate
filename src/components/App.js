import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './shared/Header';
import Main from './shared/Main';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Main />
    </div>
  </BrowserRouter>
);

export default App;
