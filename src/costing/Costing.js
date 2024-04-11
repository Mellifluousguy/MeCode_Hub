import React, { Component } from 'react'
import './Costing.css'
import CostingHeading from './CostingHeading'
import Footer from '../footer/footer'
import Pricings from './Pricings'

export default class Costing extends Component {

    render() {
        this.props.setProgress(10);
        return (
            <>

                <CostingHeading />
            {this.props.setProgress(80)}
                <Pricings />
                <Footer />
            {this.props.setProgress(100)}
            </>
        )
    }
}
