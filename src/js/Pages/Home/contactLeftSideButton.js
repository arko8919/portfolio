import React from "react";
import {Link} from 'react-scroll';

export const ContactLeftSideButton = () => {
    return (
        <Link to="CONTACT" smooth={true} duration={500}>
            <span className="left-side">
                CONTACT
            </span>
        </Link>
    )
};