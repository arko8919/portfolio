import React from "react";
import $ from "jquery";

export class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {

        // Get the form.
        const form = $('#ajax-contact');

        // Get the messages div.
        const formMessages = $('#form-messages');

        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        const formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    }

    render() {
        return (
            <form id="ajax-contact" method="post" action="mailer.php" onSubmit={this.handleSubmit}>
                <input type="text" id="name" name="name" placeholder="Name" required/>
                <input type="email" id="email" name="email" placeholder="Enter email" required/>
                <textarea id="message" name="message" placeholder="Your Message" required>
                        </textarea>
                <input type="submit" value="SEND"/>
            </form>
        )
    }
}