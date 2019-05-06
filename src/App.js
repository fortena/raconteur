import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Podcast from './Podcast';
import { StateProvider } from './state';
import { initialState, reducer } from './reducer';

export default () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/podcast/:id/" component={Podcast} />
      </Switch>
    </div>
  </StateProvider>
);
