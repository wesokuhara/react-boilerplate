import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import NotFound from '../NotFound';

const Main = () => (
  <main className="app-main">
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  </main>
);

export default Main;
