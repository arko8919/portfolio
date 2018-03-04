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
                        <img src={require("./urlshortener.png")}
                             alt="URL SHORTENER"/>
                        <div className="overlayTop">
                            <h3>URL shortener</h3>
                            <span>JavaScript + jQuery + AJAX</span>
                        </div>
                        <div className="overlayBottom">
                            <a href="https://arko8919.github.io/urlshortener.github.io/"
                               target="_blank"
                               rel="noopener noreferrer"
                            >go to site</a>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
};