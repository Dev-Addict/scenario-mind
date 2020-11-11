import React, {useEffect} from "react";

import EndFrame from "../assets/EndFrame";
import history from "../history";

const FinalRest = () => {
    useEffect(() => {
        setTimeout(() => {
            history.push('result')
        }, 0)
    }, []);

    return (
        <div>
            <EndFrame/>
        </div>
    );
};

export default FinalRest;
