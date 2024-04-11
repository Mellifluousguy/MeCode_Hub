import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ServicesCard extends Component {
    render() {
        return (
            <div className='ServicesCards'>
                <img src={this.props.src} alt='Logo' />
                <h3>{this.props.heading}</h3>
                <p>{this.props.text}</p>
                <h3><Link to="/costing"style={{color: "#2e0456"}}>{"Get Offers >>"}</Link></h3>
            </div>
        )
    }
}
