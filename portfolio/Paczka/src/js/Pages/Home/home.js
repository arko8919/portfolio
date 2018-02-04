import React from "react";
import { ContactButton } from "./contactButton";

export class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <h1 id="heading">
                    <p>Hi
                        <span>,</span>
                    </p>
                    <p>I
                        <span>'</span>m
                    </p>
                    <p>Artur</p>
                </h1>
                <p>I'am Web Developer</p>
                <ContactButton />
            </div>
        )
    }
}