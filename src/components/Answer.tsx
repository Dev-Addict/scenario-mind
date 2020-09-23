import React, {FC, useEffect} from "react";
import {useParams} from 'react-router-dom';

import history from "../history";

const Answer: FC = () => {
    const {index} = useParams();

    useEffect(() => {
        setTimeout(() => {
            // history.push(`/rest/${index}`);
        }, 4000);
    }, [index]);

    return (
        <div className="route">
            <div>
                <div>
                    <label className="input-container">
                        گزینه 1
                        <input type="radio" name="answer" value={1} checked/>
                        <span className="checkmark"/>
                    </label>
                </div>
                <div>
                    <label className="input-container">
                        گزینه 2
                        <input type="radio" name="answer" value={2}/>
                        <span className="checkmark"/>
                    </label>
                </div>
                <div>
                    <label className="input-container">
                        گزینه 3
                        <input type="radio" name="answer" value={3}/>
                        <span className="checkmark"/>
                    </label>
                </div>
                <div>
                    <label className="input-container">
                        گزینه 4
                        <input type="radio" name="answer" value={4}/>
                        <span className="checkmark"/>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Answer;
