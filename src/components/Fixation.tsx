import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

import history from "../history";
import {RootState} from "../store";

const Fixation: FC = () => {
    const {index} = useParams();

    const length = useSelector(({questions: {questions}}: RootState) => questions).length;

    useEffect(() => {
        setTimeout(() => {
            if (+index === length)
                history.push('/result');
            else
                history.push(`/scenario/${+index + 1}`);
        }, 1000);
    }, [index, length]);

    return (
        <div className="route relax">
        </div>
    );
};

export default Fixation;
