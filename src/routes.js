import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './views/Home';
import Disciplines from './views/Disciplines';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/disciplinas" exact component={Disciplines} />
            </Switch>
        </BrowserRouter>
    );
}
