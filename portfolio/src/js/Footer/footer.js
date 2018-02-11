import React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="icons">
                    <a className="mdi mdi-facebook-box" > </a>
                    <a className="mdi mdi-instagram"> </a>
                    <a className="mdi mdi-twitter-box"> </a>
                    <a className="mdi mdi-linkedin-box"> </a>
                </div>
                <p>Artur S-D
                    <span> @2018</span>
                </p>
            </footer>
        )
    }
}