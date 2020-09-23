import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Start from "./Start";
import Instruction from "./Instruction";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Start/>
                </Route>
                <Route path="/instruction">
                    <Instruction/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
