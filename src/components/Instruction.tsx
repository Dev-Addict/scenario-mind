import React, {FC, useEffect} from "react";

import history from "../history";

const Instruction: FC = () => {
    useEffect(() => {
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

export default Instruction;
