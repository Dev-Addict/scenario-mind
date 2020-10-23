import React, {FC, useEffect} from "react";

import history from "../history";
import {setQuestions} from "../store/questions/actions";
import {kQuestions} from "../data";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";

const KInstruction: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setQuestions(kQuestions));
        setTimeout(() => {
            history.push('/ready/1');
        }, 1700);
    }, []);

    return (
        <div className="route">
            سعی کنید خود را در موقعیت مطرح شده تصور کنید
        </div>
    );
};

export default KInstruction;
