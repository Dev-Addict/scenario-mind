import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';

import history from "../history";

const Scenario: FC = () => {
    const {index} = useParams();

    useEffect(() => {
        setTimeout(() => {
            history.push(`/answer/${index}`);
        }, 9000);
    }, []);

    return (
        <div className="route">
            سناریو
        </div>
    );
};

export default Scenario;
