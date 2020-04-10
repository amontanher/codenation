import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Pokemon from '../src/pages/Pokemon';
import NotFound from '../src/pages/NotFound';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/pokemon/:id" component={Pokemon}></Route>
            <Route exact path="/404" component={NotFound}></Route>
            <Route exact path="*" component={NotFound}></Route>
        </Switch>
    )
}