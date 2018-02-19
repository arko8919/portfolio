import React from "react";
import $ from "jquery";

export class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const name = e.target.name.value,
            email = e.target.email.value,
            msg = e.target.message.value;
        if (!name || !email || !msg) {
            this.props.alertMsg("Please check your entries");
            e.preventDefault();
        } else {
            $.ajax({
                url: "https://formspree.io/arko8919@gmail.com",
                method: "POST",
                data: {name: name, email: email, message: msg},
                dataType: "json"
            });
            e.preventDefault();
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.message.value = "";

            this.props.alertMsg("SUCCESS");
        }
    }

    render() {
        return (
            <form id="ajax-contact" onSubmit={this.handleSubmit}>
                <input type="text" id="name" name="name" placeholder="Name"/>
                <input type="email" id="email" name="_replyto" placeholder="Enter email"/>
                <textarea id="message" name="message" placeholder="Your Message">
                </textarea>
                <input type="submit" value="SEND"/>
            </form>
        )
    }
}