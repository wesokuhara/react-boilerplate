import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const App = () => (
  <div className="app">
    <Header />
    <main className="app-main">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </main>
  </div>
);

export default App;
