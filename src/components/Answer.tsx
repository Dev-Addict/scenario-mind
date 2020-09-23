import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';

import history from "../history";

const Answer: FC = () => {
    const {index} = useParams();

    useEffect(() => {
        setTimeout(() => {
            history.push(`/rest/${index}`);
        }, 4000);
    }, [index]);

    return (
        <div className="route">
            <div>
                <div>
                    <input type="radio" name="answer" value={1} checked/><
                    label>گزینه 1</label>
                </div>
                <div>
                    <input type="radio" name="answer" value={2}/>
                    <label>گزینه 2</label>
                </div>
                <div>
                    <input type="radio" name="answer" value={3}/>
                    <label>گزینه 3</label>
                </div>
                <div>
                    <input type="radio" name="answer" value={4}/>
                    <label>گزینه 4</label>
                </div>
            </div>
        </div>
    );
};

export default Answer;
