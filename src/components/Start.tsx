import React, {FC} from "react";
import {Link} from "react-router-dom";

const Start: FC = () => {
    return (
        <div className="route">
            <Link to="/instruction" className="button fill main">
                شروع
            </Link>
        </div>
    );
};

export default Start;
