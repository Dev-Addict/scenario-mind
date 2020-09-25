import React, {FC, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";

import {setQuestions} from "../store/questions/actions";
import {questions} from "../data";

const Start: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setQuestions(questions));
    }, [dispatch]);

    return (
        <div className="route">
            <Link to="/instruction" className="button fill main start">
                شروع
            </Link>
        </div>
    );
};

export default Start;
