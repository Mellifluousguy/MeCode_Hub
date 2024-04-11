import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone, faAt
} from '@fortawesome/free-solid-svg-icons';

import { faTwitter, faLinkedinIn, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";



export default class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="MainPage">
                    <div className="FooterContent Logo">
                        <h1><a href="./Home.js">MeCode</a></h1>
                    </div>
                    <div className="FooterContent">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/services">Web Designing</Link></li>
                            <li><Link to="/services">Web Development</Link></li>
                            <li><Link to="/services">App Development</Link></li>
                        </ul>
                    </div>
                    <div className="FooterContent">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faPhone} /> &nbsp;<a href="tel:+1234567890">+1 (234) 567-890</a>
                            </li>
                            <li><FontAwesomeIcon icon={faPhone} /> &nbsp;<a href="tel:+1234567890">+1 (234) 567-890</a>
                            </li>
                            <li><FontAwesomeIcon icon={faAt} /> &nbsp; <a href="mailto:example@example.com">example@example.com</a></li>
                        </ul>
                    </div>
                    <div className="FooterContent">
                        <h3>Address:</h3>
                        <p>MeCode, Abc Colony, <br />Lucknow, Uttar Pradesh - 226028</p>

                        <nav>
                            <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link to="/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                            <Link to="/"><FontAwesomeIcon icon={faDiscord} /></Link>
                            <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                        </nav>

                    </div>
                    <div className="FooterContent">
                        <h3>About Us</h3>
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Customer Service</a></li>
                        </ul>
                    </div>
                </div>
                <footer>
                    ©MeCode. All rights reserved
                </footer>
            </div>
        )
    }
}
