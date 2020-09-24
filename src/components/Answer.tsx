import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import history from "../history";
import {AppDispatch, RootState} from "../store";
import {setAnswer} from "../store/questions/actions";
import Exam from "../assets/Exam";

const Answer: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const {index} = useParams();

    const {answers, questions} = useSelector(({questions}: RootState) => questions);

    const answer = answers[+index - 1];
    const question = questions[+index - 1];

    useEffect(() => {
        setTimeout(() => {
            history.push(`/rest/${index}`);
        }, 4000);
    }, [index]);

    console.log(answer);

    return (
        <div className="route">
            <div>
                <div>
                    <label className="input-container">
                        {question.option1}
                        <input type="radio" name="answer" value={1} checked={answer === 1} onChange={() => {
                            dispatch(setAnswer({
                                index: +index - 1,
                                answer: 1
                            }));
                        }}/>
                        <span className="checkmark"/>
                    </label>
                </div>
                <div>
                    <label className="input-container">
                        {question.option2}
                        <input type="radio" name="answer" value={2} checked={answer === 2} onChange={() => {
                            dispatch(setAnswer({
                                index: +index - 1,
                                answer: 2
                            }));
                        }}/>
                        <span className="checkmark"/>
                    </label>
                </div>
                <div>
                    <label className="input-container">
                        {question.option3}
                        <input type="radio" name="answer" value={3} checked={answer === 3} onChange={() => {
                            dispatch(setAnswer({
                                index: +index - 1,
                                answer: 3
                            }));
                        }}/>
                        <span className="checkmark"/>
                    </label>
                </div>
                <div>
                    <label className="input-container">
                        {question.option4}
                        <input type="radio" name="answer" value={4} checked={answer === 4} onChange={() => {
                            dispatch(setAnswer({
                                index: +index - 1,
                                answer: 4
                            }));
                        }}/>
                        <span className="checkmark"/>
                    </label>
                </div>
            </div>
            <Exam/>
        </div>
    );
};

export default Answer;
