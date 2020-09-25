import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

import history from "../history";
import {RootState} from "../store";

type Props = {
    isRest?: boolean;
};

const Fixation: FC<Props> = ({isRest = false}) => {
    const {index} = useParams();

    const length = useSelector(({questions: {questions}}: RootState) => questions).length;

    useEffect(() => {
        setTimeout(() => {
            if (isRest) {
                if (+index === length)
                    history.push('/result');
                else
                    history.push(`/ready/${+index + 1}`);
            } else
                history.push(`/scenario/${+index}`);
        }, Math.random() * 2000 + 1000);
    }, [index, isRest, length]);

    return (
        <div className="route relax">
        </div>
    );
};

export default Fixation;
