import React, { Component } from 'react'

export default class PriceTemplate extends Component {
    render() {
        return (
            <div className='PriceTemplate'>
                <div className={this.props.class}>
                    <section>
                        <h1>{this.props.type}</h1>
                        <span>{this.props.desc}</span>
                    </section>
                    <article>
                        <div className='PriceTag'>
                            <h1>${this.props.price}</h1>
                        </div>
                        <div className='Features'>
                            <h2>Key Features</h2>
                            <ul>
                                <span>✔</span>
                                <li>{this.props.feature1}</li>
                                <span>✔</span>

                                <li>{this.props.feature2}</li>
                                <span>✔</span>
                                <li>{this.props.feature3}</li>
                                <span>✔</span>
                                <li>{this.props.feature4}</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}
