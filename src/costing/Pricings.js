import React, { Component } from 'react'
import PriceTemplate from './PriceTemplate'

export default class Pricings extends Component {
    render() {
        return (
            <div className='PrisingContainer'>
                <div className='Pricing'>
                    <PriceTemplate
                        class="Basic"
                        type="Basic"
                        desc="Get Started Online with Our Basic Package"
                        feature1="Responsive Website Design"
                        feature2="Basic SEO Optimization"
                        feature3="Limited Pages (Up to 5)"
                        feature4="Standard Support"
                        price="500"
                    />
                    <PriceTemplate
                        class="Pro"
                        type="Pro"
                        desc="Elevate Your Online Presence with Our Pro Package"
                        feature1="Custom Website Design"
                        feature2="Advanced SEO Optimization"
                        feature3="Expanded Pages (Up to 10)"
                        feature4="Priority Support"
                        price="800"
                    />
                    <PriceTemplate
                        class="Premium"
                        type="Premium"
                        desc="Unlock Premium Solutions with Our Exclusive Package"
                        feature1="Premium Custom Website Design"
                        feature2="Unlimited Pages"
                        feature3="24/7 Priority Support"
                        feature4="Content Management System"
                        price="1200"
                    />
                </div>
            </div>
        )
    }
}
