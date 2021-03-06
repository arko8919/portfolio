import React from "react";
import {Element} from 'react-scroll';

export const Skills = () => {
    return (
        <Element name="SKILLS">
            <div id="skills">
                <h2>Skills</h2>
                <hr/>
                <div className="container">
                    <div className="content">
                        <i className="devicon-html5-plain colored"> </i>
                        <span>HTML 5</span>
                    </div>
                    <div className="content">
                        <i className="devicon-css3-plain colored"> </i>
                        <span>CSS 3</span>
                    </div>
                    <div className="content">
                        <i className="devicon-javascript-plain colored"> </i>
                        <span>JavaScript</span>
                    </div>
                    <div className="content">
                        <i className="devicon-react-original colored"> </i>
                        <span>REACT</span>
                    </div>
                    <div className="content">
                        <i className="devicon-jquery-plain colored"> </i>
                        <span>jQuery</span>
                    </div>
                    <div className="content">
                        <i className="devicon-sass-original colored"> </i>
                        <span>SCSS</span>
                    </div>
                </div>
            </div>
        </Element>
    )
};

