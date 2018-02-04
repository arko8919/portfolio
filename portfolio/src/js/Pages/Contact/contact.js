import React from "react";
import {PostForm} from "./postForm";

export class Contact extends React.Component {

    render() {
        return (
            <div id="contact">
                <h2>Contact</h2>
                <p>Have a question or want hire me?</p>
                <div id="form-messages"> </div>
                <PostForm/>
            </div>
        )
    }
}