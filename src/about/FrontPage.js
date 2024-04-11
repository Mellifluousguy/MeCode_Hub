import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class FrontPage extends Component {
    render() {
        return (
            <div className='ContainerAbout'>
                <h1>Welcome to MeCode</h1>
                <p>Your one-stop destination for exceptional web development, web designing, and app development services.</p>
                <Link to="/services"><button>Explore Our Services</button></Link>
            </div>
        )
    }
}
