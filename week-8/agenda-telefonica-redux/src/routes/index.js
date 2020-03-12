import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/create" render={() => <div>CREATE</div>}></Route>
      <Route
        exact
        path="/:contato_id/edit"
        render={() => <div>EDIT</div>}
      ></Route>
      <Route exact path="/404" component={NotFound}></Route>
    </Switch>
  );
}
