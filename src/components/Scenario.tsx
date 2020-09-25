import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

import history from "../history";
import {RootState} from "../store";

const Scenario: FC = () => {
    const {index} = useParams();

    const questions = useSelector(({questions: {questions}}:RootState) => questions);

    useEffect(() => {
        setTimeout(() => {
            history.push(`/answer/${index}`);
        }, 9000);
    }, [index]);

    return (
        <div className="route">
            <div>{questions[+index - 1]}</div>
        </div>
    );
};

export default Scenario;
