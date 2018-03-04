import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import NoMatch from '../../components/nomatch';

export default () => (
  <React.Fragment>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </React.Fragment>
);