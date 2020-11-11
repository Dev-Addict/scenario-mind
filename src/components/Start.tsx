import React, {FC} from "react";
import {Link} from "react-router-dom";

const Start: FC = () => {
    return (
        <div className="route">
            <Link to="/instruction/1" className="button fill main start">
                خودانتقادگری 1
            </Link>
            <Link to="/instruction/2" className="button fill main start">
                خودانتقادگری 2
            </Link>
            <Link to="/instruction/3" className="button fill main start">
                خوداطمینان بخشی 1
            </Link>
            <Link to="/instruction/4" className="button fill main start">
                خوداطمینان بخشی 2
            </Link>
            <Link to="/instruction/5" className="button fill main start">
                تمرین 1
            </Link>
            <Link to="/instruction/6" className="button fill main start">
                تمرین 2
            </Link>
            <Link to="/instruction/7" className="button fill main start">
                تمرین 3
            </Link>
        </div>
    );
};

export default Start;
