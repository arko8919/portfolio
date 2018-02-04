import React from "react";

export class MyWork extends React.Component {
    render() {
        return (
            <div id="myWork">
                <h2>My Work</h2>
                <div className="container">
                    <div className="content">
                        <img src={require("./computer.png")}/>
                        <div className="overlayTop">
                            <h3>Title</h3>
                            <span>technology</span>
                        </div>
                        <div className="overlayBottom">
                            <a href="#myWork">Link</a>
                        </div>
                    </div>
                    <div className="content">
                        <img src={require("./computer.png")}/>
                        <div className="overlayTop">
                            <h3>Title</h3>
                            <span>technology</span>
                        </div>
                        <div className="overlayBottom">
                            <a href="#myWork">Link</a>
                        </div>
                    </div>
                    <div className="content">
                        <img src={require("./computer.png")}/>
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
    }
}