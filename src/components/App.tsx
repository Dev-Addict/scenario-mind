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

function App() {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/rest/:index">
                        <Fixation isRest={true}/>
                    </Route>
                    <Route path="/answer/:index">
                        <Answer/>
                    </Route>
                    <Route path="/scenario/:index">
                        <Scenario/>
                    </Route>
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
            <div className="footer container">
                created and designed by
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a href="https://github.com/Dev-Addict" target="_blank" className="button">Dev Addict</a>
            </div>
        </Router>
    );
}

export default App;
