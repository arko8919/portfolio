import React from "react";

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
        } else {
            const xhr = new XMLHttpRequest();
            const url = "//formspree.io/arko8919@gmail.com";
            const data = JSON.stringify({name: name, email: email, message: msg});
            xhr.dataType = "json";
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    this.props.alertMsg("SUCCESS");
                    console.log(xhr.response);
                }
            };
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(data);
        }

        e.preventDefault();
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
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