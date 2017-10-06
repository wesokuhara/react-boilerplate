import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './common/Header';
import Main from './common/Main';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Main />
    </div>
  </BrowserRouter>
);

export default App;
