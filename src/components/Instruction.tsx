import React, {FC, useEffect} from "react";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";

import history from "../history";
import {setQuestions} from "../store/questions/actions";
import data from "../data";
import {AppDispatch} from "../store";

const Instruction: FC = () => {
    const {type}: {type: "1" | "2" | "3" | "4" | "5" | "6" | "7"} = useParams();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setQuestions(data[type].questions));
        setTimeout(() => {
            history.push('/scenario/1');
        }, 2000);
    }, []);

    return (
        <div className="route">
            {data[type].instruction}
        </div>
    );
};

export default Instruction;
