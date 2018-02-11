import React from "react";
import {ContactButton} from "./contactButton";

const firstParagraph = [
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
let addFirstParagraph = [];
let addSecondParagraph = [];
let addThirdParagraph = [];

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
                addFirstParagraph.push(firstParagraph[i]);
                this.setState({
                    paragraphOne: addFirstParagraph
                });
            }

            else if (  i < 6) {
                addSecondParagraph.push(firstParagraph[i]);
                this.setState({
                    paragraphTwo: addSecondParagraph
                });
            }

            else if ( i >= 6 ) {
                addThirdParagraph.push(firstParagraph[i]);
                this.setState({
                    paragraphThree: addThirdParagraph
                });
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
                <p className="subHeading">I am Web Developer</p>
                <ContactButton/>
            </div>
        )
    }
}