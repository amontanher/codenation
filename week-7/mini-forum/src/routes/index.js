import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';
import Slug from '../pages/Thread/Slug';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/sobre" component={About}></Route>
      <Route exact path="/404" component={NotFound}></Route>
      <Route exact path="/thread/:slug" component={Slug}></Route>
      <Route path="*" render={() => <Redirect to="/404" />}></Route>
    </Switch>
  </>
);

export default Routes;
