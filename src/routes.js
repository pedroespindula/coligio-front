import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './views/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}
