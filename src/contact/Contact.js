import React, { Component } from 'react'
import './Contact.css'
import MainContact from './MainContact'
import ContactForm from './ContactForm'
import Footer from '../footer/footer'
import QueriesTable from './QueriesTable'

export default class Contact extends Component {
    render() {
        this.props.setProgress(10);

        return (
            <>
                <div className="Contact">
                    <MainContact />
                    {this.props.setProgress(50)}

                    <ContactForm />
                    <QueriesTable />
                </div>

                <Footer />
                {this.props.setProgress(100)}

            </>
        )
    }
}
