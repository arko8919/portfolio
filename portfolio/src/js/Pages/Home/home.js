import React from "react";
import {ContactButton} from "./contactButton";

const firstParagraph = [
    <span>H</span>,
    <span>i</span>,
    <span className="special">,</span>,
];

const secondParagraph = [
    <span>I</span>,
    <span className="special">'</span>,
    <span>m</span>,
];

const thirdParagraph = [
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
            element:
                <div id="home">
                    <h1 className="heading">
                        <p></p>
                        <p></p>
                        <p></p>
                    </h1>
                    <p className="subHeading">I am Web Developer</p>
                    <ContactButton/>
                </div>
        };
    }

    componentDidMount() {


        setInterval(function () {
            addFirstParagraph.push(firstParagraph[i]);
            addSecondParagraph.push(secondParagraph[i]);
            addThirdParagraph.push(thirdParagraph[i]);
            this.setState({
                element:
                    <div id="home">
                        <h1 className="heading">
                            <p>{addFirstParagraph}</p>
                            <p>{addSecondParagraph}</p>
                            <p>{addThirdParagraph}</p>
                        </h1>
                        <p className="subHeading">I am Web Developer</p>
                        <ContactButton/>
                    </div>
            });
            i++;
        }.bind(this), Math.floor(Math.random() * 400));
    }

    render() {
        return this.state.element;
    }
}