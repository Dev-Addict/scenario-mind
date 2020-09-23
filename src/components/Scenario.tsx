import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';

import history from "../history";
import Think from "../assets/Think";

const Scenario: FC = () => {
    const {index} = useParams();

    useEffect(() => {
        setTimeout(() => {
            history.push(`/answer/${index}`);
        }, 9000);
    }, []);

    return (
        <div className="route">
            <div>سناریو</div>
            <Think/>
        </div>
    );
};

export default Scenario;
