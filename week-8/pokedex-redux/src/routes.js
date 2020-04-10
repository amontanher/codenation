import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Pokemon from '../src/pages/Pokemon';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/pokemon/:id" component={Pokemon}></Route>
        </Switch>
    )
}