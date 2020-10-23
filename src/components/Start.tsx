import React, {FC} from "react";
import {Link} from "react-router-dom";

const Start: FC = () => {
    return (
        <div className="route">
            <Link to="/instruction" className="button fill main start">
                شروع
            </Link>
            <Link to="/kinstruction" className="button fill main start">
                خنثی
            </Link>
        </div>
    );
};

export default Start;
