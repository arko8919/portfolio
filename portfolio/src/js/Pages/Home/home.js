import React from "react";
import {ContactButton} from "./contactButton";

const elements = [
    <p>Hi <span>,</span></p>,
    <p>I<span>'</span>m</p>,
    <p>Artur</p>];
let i = 0;
let test = [];

export class Home extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            element:
                <div id="home">
                    <h1 id="heading">
                    </h1>
                    <p>I am Web Developer</p>
                    <ContactButton/>
                </div>
        };
    }

    componentDidMount() {
        setInterval(function () {
            test.push(elements[i]);
            this.setState({
                element:
                    <div id="home">
                        <h1 id="heading">
                            {test}
                        </h1>
                        <p>I am Web Developer</p>
                        <ContactButton/>
                    </div>
            });
            i++;
        }.bind(this), 1000)
    }

    render() {
        return this.state.element;
    }
}