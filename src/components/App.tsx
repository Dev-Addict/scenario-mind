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
import Scenario from "./Scenario";
import Answer from "./Answer";
import FinalRest from "./FinalRest";
import Result from "./Result";

function App() {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/result">
                        <Result/>
                    </Route>
                    <Route path="/finalrest">
                        <FinalRest/>
                    </Route>
                    <Route path="/rest/:index">
                        <Fixation/>
                    </Route>
                    <Route path="/answer/:index">
                        <Answer/>
                    </Route>
                    <Route path="/scenario/:index">
                        <Scenario/>
                    </Route>
                    <Route path="/instruction/:type">
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
