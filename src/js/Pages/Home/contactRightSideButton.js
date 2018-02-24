import React from "react";
import {Link} from 'react-scroll';

export const ContactRightSideButton = () => {
    return (
        <Link to="CONTACT" smooth={true} duration={500} offset={-40}>
            <span className="right-side">
                ME
                <i className="mdi mdi-arrow-down-bold"> </i>
            </span>
        </Link>
    )
};