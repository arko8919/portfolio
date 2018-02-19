import React from "react";
import {Element} from 'react-scroll';

export const MyWork = () => {
    return (
        <Element name="MY WORK">
            <div id="myWork">
                <h2>My Work</h2>
                <hr/>
                <div className="container">
                    <div className="content">
                        <img src={require("./homers-on-the-job.jpg")}
                             alt="Page Not Build. Work in progress."/>
                        <div className="overlayTop">
                            <h3>URL shortener</h3>
                            <span>JavaScript + jQuery</span>
                        </div>
                        <div className="overlayBottom">
                            <a href="#myWork">go to site</a>
                        </div>
                    </div>
                    <div className="content">
                        <img src={require("./homers-on-the-job.jpg")}
                             alt="Page Not Build. Work in progress."/>
                        <div className="overlayTop">
                            <h3>Title</h3>
                            <span>technology</span>
                        </div>
                        <div className="overlayBottom">
                            <a href="#myWork">go to site</a>
                        </div>
                    </div>
                    <div className="content">
                        <img src={require("./homers-on-the-job.jpg")}
                             alt="Page Not Build. Work in progress."/>
                        <div className="overlayTop">
                            <h3>Title</h3>
                            <span>technology</span>
                        </div>
                        <div className="overlayBottom">
                            <a href="#myWork">go to site</a>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
};