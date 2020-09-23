import React, {FC, useEffect} from "react";

import history from "../history";

const Instruction: FC = () => {
    useEffect(() => {
        setTimeout(() => {
            history.push('/ready/1')
        }, 1700);
    }, []);

    return (
        <div className="route">
            خود انتقا گری
        </div>
    );
};

export default Instruction;
