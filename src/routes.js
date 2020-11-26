import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './views/Home';
import Disciplines from './views/Disciplines';
import Discipline from './views/Discipline';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/disciplinas" exact component={Disciplines} />
                <Route path="/disciplina/matematica" exact component={Discipline} />
            </Switch>
        </BrowserRouter>
    );
}
