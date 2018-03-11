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
                            <h3>URL SHORTENER</h3>
                            <span>JavaScript + jQuery + AJAX</span>
                        </div>
                        <div className="overlayBottom">
                            <a href="https://arko8919.github.io/urlshortener.github.io/"
                               target="_blank"
                               rel="noopener noreferrer"
                            >go to site</a>
                        </div>
                    </div>
                    <div className="content">
                        <img src={require("./wordslinter.png")}
                             alt="OVERUSED & UNNECESSARY WORDS LINTER"/>
                        <div className="overlayTop">
                            <h3>OVERUSED & UNNECESSARY WORDS LINTER</h3>
                            <span>JavaScript + requireJS</span>
                        </div>
                        <div className="overlayBottom">
                            <a href="https://arko8919.github.io/minilinter.github.io/"
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