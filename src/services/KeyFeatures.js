import React, { Component } from 'react'
import FeaturesCard from './FeaturesCard'
import './services.css'

export default class KeyFeatures extends Component {
    render() {
        return (
            <div className="FeatureCard">
                    <h1>Key Features</h1>
                <div className='cards'>
                    <FeaturesCard
                        src="https://cdn-icons-png.flaticon.com/512/3281/3281104.png"
                        heading="Strategy"
                        text="Navigating the Digital Landscape: Our Roadmap for Online Growth"

                    />
                    <FeaturesCard
                        src="https://cdn-icons-png.flaticon.com/512/3502/3502858.png"
                        heading="Branding"
                        text="Crafting Your Brand Identity: Unveil the Essence of Your Business"

                    />
                    <FeaturesCard
                        src="https://cdn-icons-png.flaticon.com/512/3263/3263182.png"
                        heading="Development"
                        text="Elevating Your Digital Presence: Development Solutions Tailored to Your Needs"

                    />
                    <FeaturesCard
                        src="https://cdn-icons-png.flaticon.com/512/5234/5234318.png"
                        heading="Web-Design"
                        text="Transforming Ideas into Stunning Visual Experiences: Our Web Design Expertise Unleashed"

                    />
                    <FeaturesCard
                        src="https://cdn-icons-png.flaticon.com/512/3893/3893024.png"
                        heading="Social Media"
                        text="Fueling Connections: Unleash Your Brand's Potential with Social Media Strategy"

                    />
                    <FeaturesCard
                        src="https://cdn-icons-png.flaticon.com/512/4791/4791635.png"
                        heading="E-commerce"
                        text="Elevate Your Online Store: Tailored E-commerce Solutions for Success"

                    />
                </div>
            </div>
        )
    }
}
