import React from "react";
export const MyWork = () => {
    return (
        <div id="myWork">
            <h2>My Work</h2>
            <div className="container">
                <div className="content">
                    <img src={require("./homers-on-the-job.jpg")}/>
                    <div className="overlayTop">
                        <h3>Title</h3>
                        <span>technology</span>
                    </div>
                    <div className="overlayBottom">
                        <a href="#myWork">Link</a>
                    </div>
                </div>
                <div className="content">
                    <img src={require("./homers-on-the-job.jpg")}/>
                    <div className="overlayTop">
                        <h3>Title</h3>
                        <span>technology</span>
                    </div>
                    <div className="overlayBottom">
                        <a href="#myWork">Link</a>
                    </div>
                </div>
                <div className="content">
                    <img src={require("./homers-on-the-job.jpg")}/>
                    <div className="overlayTop">
                        <h3>Title</h3>
                        <span>technology</span>
                    </div>
                    <div className="overlayBottom">
                        <a href="#myWork">Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
};
