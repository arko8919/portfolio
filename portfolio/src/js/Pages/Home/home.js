import React from "react";
import {ContactButton} from "./contactButton";

const headingLetters = [
    <span>H</span>,
    <span>i</span>,
    <span>,</span>,
    <span>I</span>,
    <span>'</span>,
    <span>m</span>,
    <span>A</span>,
    <span>r</span>,
    <span>t</span>,
    <span>u</span>,
    <span>r</span>
];

let i = 0;
let firstParagraph = [];
let secondParagraph = [];
let thirdParagraph = [];

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            paragraphOne: [],
            paragraphTwo: [],
            paragraphThree: []

        };

    }

    componentDidMount() {
        const intervalOne = setInterval(function () {
            if ( i < 3) {
                firstParagraph.push(headingLetters[i]);
                this.setState({
                    paragraphOne: firstParagraph
                });
            }

            else if (  i < 6) {
                secondParagraph.push(headingLetters[i]);
                this.setState({
                    paragraphTwo: secondParagraph
                });
            }

            else if ( i >= 6 ) {
                thirdParagraph.push(headingLetters[i]);
                this.setState({
                    paragraphThree: thirdParagraph
                });
            }
            if(i === headingLetters.length) {
                clearInterval(intervalOne);
            }
            i++;
        }.bind(this), 100);
    }

    render() {
        return (
            <div id="home">
                <h1 className="heading">
                    <p>{this.state.paragraphOne}</p>
                    <p>{this.state.paragraphTwo}</p>
                    <p>{this.state.paragraphThree}</p>
                </h1>
                <p className="sub-heading">I am Web Developer</p>
                <ContactButton/>
            </div>
        )
    }
}