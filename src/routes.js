import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './views/Home';
import Dashboard from './views/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}
