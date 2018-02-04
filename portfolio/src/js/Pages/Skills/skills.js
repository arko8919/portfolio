import React from "react";

export class Skills extends React.Component {
    render() {
        return (
            <div id="skills">
                <h2>Skills</h2>
                <div className="container">
                    <div className="content">
                        <i class="devicon-html5-plain colored"></i>
                        <span>HTML 5</span>
                    </div>
                    <div className="content">
                        <i class="devicon-css3-plain colored"></i>
                        <span>CSS 3</span>
                    </div>
                    <div className="content">
                        <i class="devicon-javascript-plain colored"></i>
                        <span>JavaScript</span>
                    </div>
                    <div className="content">
                        <i class="devicon-react-original colored"></i>
                        <span>REACT</span>
                    </div>
                    <div className="content">
                        <i class="devicon-jquery-plain colored"></i>
                        <span>jQuery</span>
                    </div>
                    <div className="content">
                        <i class="devicon-sass-original colored"></i>
                        <span>SCSS</span>
                    </div>

                </div>
            </div>
        )
    }
}