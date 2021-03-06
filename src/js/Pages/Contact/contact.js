import React from "react";
import {Element} from 'react-scroll';
import {PostForm} from "./postForm";
import {PopupWindow} from "./popupWindow";

export class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: "none",
            text: ""
        };

        this.alertMsg = this.alertMsg.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    alertMsg(result) {
        this.setState({
            display: "block",
            text: result
        });
    }

    onClick() {
        this.setState({display: "none"});
    }

    render() {
        return (
            <Element name="CONTACT">
                <div id="contact">
                    <h2>Contact</h2>
                    <hr/>
                    <p>Have a question or want hire me ?</p>
                    <div className="msgForm">
                        <PostForm alertMsg={this.alertMsg}/>
                        <PopupWindow display={{display: this.state.display}} onClick={this.onClick}>
                            <span>{this.state.text}</span>
                        </PopupWindow>
                    </div>
                </div>
            </Element>
        )
    }
}