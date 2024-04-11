import React, { Component } from 'react'

export default class ServicesCard extends Component {
  render() {
    return (
      <div className='FeaturesCard'>
            <img src={this.props.src} alt='Logo'/>
            <h3>{this.props.heading}</h3>
            <p>{this.props.text}</p>
      </div>
    )
  }
}
