import React from "react";
import {Element} from 'react-scroll';

export const About = () => {
    return (
        <Element name="ABOUT">
            <div id="about">
                <h2>About me</h2>
                <hr/>
                <p>
                    <span>Welcome stranger</span>. I'm a Front-end developer living in Coventry. I enjoy building
                    everything from small sites to rich interactive web apps.
                </p>
                <p>
                    My expertise is coding and i'm always learn new things to get my web apps running faster, make
                    them dynamic and design more maintainable code.
                </p>
                <p>
                    I design layouts to work on any device and always make sure that web site UX/UI is easy to use
                    and intuitive.
                </p>
            </div>
        </Element>
    )
};