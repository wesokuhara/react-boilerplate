import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from '../AboutPage';
import TodoPage from '../todo/TodoPage';
import NotFoundPage from '../NotFoundPage';

const Main = () => (
  <main className="app-main">
    <div className="container">
      <Switch>
        <Route exact path="/" component={TodoPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
    </div>
  </main>
);

export default Main;
