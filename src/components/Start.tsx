import React, {FC, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";

import Meditation from "../assets/Meditation";
import {setQuestions} from "../store/questions/actions";
import {questions} from "../data";

const Start: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setQuestions(questions));
    }, []);

    return (
        <div className="route">
            <div className="title">برسی موقعیت ها</div>
            <div>آزمون روانشناسی</div>
            <Link to="/instruction" className="button fill main start">
                شروع
            </Link>
            <Meditation/>
        </div>
    );
};

export default Start;
