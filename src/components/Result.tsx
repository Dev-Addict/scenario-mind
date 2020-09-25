import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store";

const Result = () => {
    const answers = useSelector(({questions: {answers}}: RootState) => answers);

    console.log(answers);

    return (
        <div className="route">
            <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(answers.join('\n'))}`} download="answers.txt"
               className="button">
                دانلود جواب ها
            </a>
            <Link to="/" className="button main fill">شروع از اول</Link>
        </div>
    );
};

export default Result;
