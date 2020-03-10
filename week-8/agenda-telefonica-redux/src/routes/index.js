import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <div>HOME</div>}></Route>
      <Route exact path="/create" render={() => <div>CREATE</div>}></Route>
      <Route
        exact
        path="/:contato_id/edit"
        render={() => <div>EDIT</div>}
      ></Route>
      <Route exact path="/404" render={() => <div>404</div>}></Route>
    </Switch>
  );
}
