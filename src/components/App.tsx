import React from 'react';
import {
    Router,
    Switch,
    Route
} from "react-router-dom";

import history from "../history";
import Start from "./Start";
import Instruction from "./Instruction";
import Fixation from "./Fixation";

function App() {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/ready/:index">
                        <Fixation/>
                    </Route>
                    <Route path="/instruction">
                        <Instruction/>
                    </Route>
                    <Route path="/">
                        <Start/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
