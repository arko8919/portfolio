import React from "react";
import {Link} from 'react-scroll';

export const ContactButton = () => {
    return (
        <Link to="CONTACT" smooth={true} duration={500}>
            <a href="#contact" className="heading-button">
                CONTACT ME
                <i className="mdi mdi-arrow-down-bold"> </i>
            </a>
        </Link>
    )
};