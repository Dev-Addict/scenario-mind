import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import history from "../history";
import {AppDispatch, RootState} from "../store";
import {setAnswer} from "../store/questions/actions";

const Answer: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const {index} = useParams();

    const {answers} = useSelector(({questions}: RootState) => questions);

    const answer = answers[+index - 1];

    useEffect(() => {
        setTimeout(() => {
            history.push(`/rest/${index}`);
        }, 3000);
    }, [index]);

    const setAnswerState = (answer: (1|2|3|4|5)) => {
        dispatch(setAnswer({
            index: +index - 1,
            answer
        }))
    };

    return (
        <div className="route">
            <div className="answer-box">
                <div className={`answer-item easy${answer === 1 ? ' active' : ''}`} onClick={() => setAnswerState(1)}>خیلی کم</div>
                <div className={`answer-item easy${answer === 2 ? ' active' : ''}`} onClick={() => setAnswerState(2)}>کم</div>
                <div className={`answer-item medium${answer === 3 ? ' active' : ''}`} onClick={() => setAnswerState(3)}>متوسط</div>
                <div className={`answer-item medium${answer === 4 ? ' active' : ''}`} onClick={() => setAnswerState(4)}>زیاد</div>
                <div className={`answer-item hard${answer === 5 ? ' active' : ''}`} onClick={() => setAnswerState(5)}>خیلی زیاد</div>
            </div>
        </div>
    );
};

export default Answer;
