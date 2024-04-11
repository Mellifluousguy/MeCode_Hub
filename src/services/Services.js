import './services.css'
import React, { Component } from 'react'
import Footer from '../footer/footer'
import ServicesFront from './ServicesFront.js'
import KeyFeatures from './KeyFeatures.js'
import ServicesSecond from './ServicesSecond.js'

export default class Services extends Component {
  render() {
    this.props.setProgress(10);

    return (
      <div className='ServicesPage'>
{        this.props.setProgress(50)}

        <ServicesFront />
        <ServicesSecond/>
        <KeyFeatures />
        <Footer />
        {this.props.setProgress(100)}

      </div>
    )
  }
}
