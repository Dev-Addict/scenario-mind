import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';

import history from "../history";
import Relax from "../assets/Relax";

type Props = {
    isRest?: boolean;
};

const Fixation: FC<Props> = ({isRest = false}) => {
    const {index} = useParams();

    useEffect(() => {
        setTimeout(() => {
            if (isRest)
                history.push(`/ready/${+index + 1}`);
            else
                history.push(`/scenario/${+index}`);
        }, Math.random() * 2000 + 1000);
    }, [index]);

    return (
        <div className="route">
            <div className="title">آمادگی کسب کنید.</div>
            <Relax/>
        </div>
    );
};

export default Fixation;
