import React from 'react';
import '../Styles/ContactPage.css'
import ContactForm from '../Components/ContactForm.js';


class ContactPage extends React.Component {
    render () {
        return (
            <div>
                <ContactForm className="contactAnimation"/>
            </div>
        )
    }
}

export default ContactPage;