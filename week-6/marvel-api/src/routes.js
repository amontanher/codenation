import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../src/pages/Home';

const Routes = () => (
    <>
        <Switch>
            <Route exact path="/" component={Home}></Route>
        </Switch>
    </>
)

export default Routes;