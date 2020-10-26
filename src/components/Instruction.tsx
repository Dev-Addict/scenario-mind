import React, {FC, useEffect} from "react";

import history from "../history";
import {setQuestions} from "../store/questions/actions";
import {questions} from "../data";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";

const Instruction: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setQuestions(questions));
        setTimeout(() => {
            history.push('/ready/1');
        }, 1700);
    }, []);

    return (
        <div className="route">
            نسبت به موقعیت داده شده خودانتقادگر باشید
        </div>
    );
};

export default Instruction;
