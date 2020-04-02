import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../src/pages/Home';
import { Hero } from '../src/pages/Hero';

const Routes = () => (
    <>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/hero/:id" component={Hero}></Route>
        </Switch>
    </>
)

export default Routes;