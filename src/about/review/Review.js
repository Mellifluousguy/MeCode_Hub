import React, { Component } from 'react'
import ReviewCards from './ReviewCards'

export default class Review extends Component {
  render() {
    return (
      <div className='ReviewContainer'>
        <h1>Customer Review</h1>
        <div className='Reviews'>
          <ReviewCards/>
          <ReviewCards/>
          <ReviewCards/>
          <ReviewCards/>
          <ReviewCards/>
          <ReviewCards/>
        </div>
      </div>
    )
  }
}
