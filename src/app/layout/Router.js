import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Projects from '../Projects';
import Work from '../Work';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/work' component={Work} />
    </Switch>
);

export default Router;
