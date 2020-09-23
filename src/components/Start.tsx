import React, {FC} from "react";
import {Link} from "react-router-dom";

import Meditation from "../assets/Meditation";

const Start: FC = () => {
    return (
        <div className="route">
            <div className="title">برسی موقعیت ها</div>
            <div>آزمون روانشناسی</div>
            <Link to="/instruction" className="button fill main start">
                شروع
            </Link>
            <Meditation/>
        </div>
    );
};

export default Start;
