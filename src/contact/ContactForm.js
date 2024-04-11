import React, { Component } from 'react';

export default class ContactForm extends Component {
    render() {
        return (
            <div className='ContactForm'>
                <h2>Contact Us</h2>
                <span>Reach Out and Connect!<br />
                    We're just a message away – let's start a conversation.</span>
                <form>
                    <label htmlFor="FirstName">First Name: </label>
                    <input type="text" id="FirstName" />
                    <label htmlFor="LastName">Last Name: </label>
                    <input type="text" id="LastName" />
                    <label htmlFor="Email">Email-Id: </label>
                    <input type="email" name="Email" id="Email" />
                    <label htmlFor="ContactNumber">Contact Number: </label>
                    <input type="tel" name="ContactNumber" id="ContactNumber" />
                    <label htmlFor="Message">Enter your message: </label>
                    <textarea name="Message" id="Message" cols="30" rows="10" maxLength="250"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
