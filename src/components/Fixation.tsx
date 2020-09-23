import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';

import history from "../history";

const Fixation: FC = () => {
    const {index} = useParams();

    useEffect(() => {
        setTimeout(() => {
            history.push(`/scenario/${index}`);
        }, Math.random() * 2000 + 1000);
    }, []);

    return (
        <div className="route">
            آمادگی کسب کنید.
        </div>
    );
};

export default Fixation;
