import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Podcast from './Podcast';

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/podcast/:id/" component={Podcast} />
    </Switch>
  </BrowserRouter>
);
