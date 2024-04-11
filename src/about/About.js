import './About.css';
import React, { Component } from 'react'
import Footer from '../footer/footer'
import FrontPage from './FrontPage';
import AboutUs from './AboutUs';
import Review  from './review/Review';

export default class About extends Component {
    render() {
        this.props.setProgress(10);
        return (
            <div>
                <FrontPage/>
                <AboutUs/>
                {this.props.setProgress(50)}
                <Review/>
                <Footer />
                {this.props.setProgress(100)}
            </div>
        )
    }
}
