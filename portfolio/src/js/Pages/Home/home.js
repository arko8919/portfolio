import React from "react";
import {Element} from 'react-scroll';
import {ContactRightSideButton} from "./contactRightSideButton";
import {ContactLeftSideButton} from "./contactLeftSideButton";

const headingLetters = [
    <span key="letter1">H</span>,
    <span key="letter2">i</span>,
    <span key="letter3">,</span>,
    <span key="letter4">I</span>,
    <span key="letter5">'</span>,
    <span key="letter6">m</span>,
    <span key="letter7">A</span>,
    <span key="letter8">r</span>,
    <span key="letter9">t</span>,
    <span key="letter10">u</span>,
    <span key="letter11">r</span>
];

let i = 0;
let container = [];

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            divOne: [],
            divTwo: [],
        };
    }

    componentDidMount() {
        const intervalOne = setInterval(function () {
            if (i < 6) {
                container.push(headingLetters[i]);
                this.setState({
                    divOne: container
                });
                if (i === 5) {
                    container = [];
                }
            }

            else if (i >= 6) {
                container.push(headingLetters[i]);
                this.setState({
                    divTwo: container
                });
            }
            if (i === headingLetters.length) {
                clearInterval(intervalOne);
            }
            i++;
        }.bind(this), 100);
    }

    render() {
        return (
            <Element name="HOME">
                <div id="home">
                    <h1 className="heading">
                        <div>{this.state.divOne}</div>
                        <div>{this.state.divTwo}</div>
                    </h1>
                    <p className="sub-heading">Front End Web Developer</p>
                    <div className="heading-button">
                        <ContactLeftSideButton/>
                        <ContactRightSideButton/>
                    </div>
                </div>
            </Element>
        )
    }
}