import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

import history from "../history";
import Think from "../assets/Think";
import {RootState} from "../store";

const Scenario: FC = () => {
    const {index} = useParams();

    const questions = useSelector(({questions: {questions}}:RootState) => questions);

    useEffect(() => {
        setTimeout(() => {
            history.push(`/answer/${index}`);
        }, 9000);
    }, []);

    return (
        <div className="route">
            <div>{questions[+index - 1].text}</div>
            <Think/>
        </div>
    );
};

export default Scenario;
