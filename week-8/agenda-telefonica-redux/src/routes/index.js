import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import Edit from '../pages/Edit/Edit';
import Create from '../pages/Create/Create';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/create" component={Create}></Route>
      <Route
        exact
        path="/:contato_id/edit"
        component={Edit}
      ></Route>
      <Route exact path="/404" component={NotFound}></Route>
      <Route exact path="/*" component={NotFound}></Route>
    </Switch>
  );
}
