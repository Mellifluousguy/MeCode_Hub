import React, { Component } from 'react';

export default class QueriesTable extends Component {
    render() {
        return (
            <div id="QueriesRoot">
                <div class='QueriesContainer'>
                    <h1>Frequently Asked Questions?</h1>
                    <div class='query'>
                        <input type="radio" name="accordion" id="Question1" class="query-toggle" />
                        <label htmlFor='Question1' class='query-header'>What services do you offer? <span>&#x3e;</span></label>
                        <div class='Answer'>
                            <p>We offer a comprehensive range of services including web development, web designing, app development, digital marketing, e-commerce solutions, and content management systems.</p>
                        </div>
                    </div>

                    <div class='query'>
                        <input type="radio" name="accordion" id="Question2" class="query-toggle" />
                        <label htmlFor='Question2' class='query-header'>What makes your services unique? <span>&#x3e;</span></label>
                        <div class='Answer'>
                            <p>Our team of experienced professionals is dedicated to delivering tailored solutions that meet our clients' specific needs. We prioritize creativity, innovation, and cutting-edge technology to ensure our services stand out in the competitive market.</p>
                        </div>
                    </div>

                    <div class='query'>
                        <input type="radio" name="accordion" id="Question3" class="query-toggle" />
                        <label htmlFor='Question3' class='query-header'>How do you approach projects? <span>&#x3e;</span></label>
                        <div class='Answer'>
                            <p>We follow a collaborative approach, working closely with our clients from the initial concept stage to final implementation. Our process involves thorough research, strategic planning, and agile development methodologies to ensure successful project delivery on time and within budget.</p>
                        </div>
                    </div>

                    <div class='query'>
                        <input type="radio" name="accordion" id="Question4" class="query-toggle" />
                        <label htmlFor='Question4' class='query-header'>How do you ensure the quality of your services? <span>&#x3e;</span></label>
                        <div class='Answer'>
                            <p>Quality is our top priority. We adhere to industry best practices, conduct rigorous testing, and continuously refine our processes to deliver high-quality solutions that exceed our clients' expectations.</p>
                        </div>
                    </div>

                    <div class='query'>
                        <input type="radio" name="accordion" id="Question5" class="query-toggle" />
                        <label htmlFor='Question5' class='query-header'>What support do you provide after the project is completed? <span>&#x3e;</span></label>
                        <div class='Answer'>
                            <p>We believe in building long-term partnerships with our clients. We offer ongoing support, maintenance, and updates to ensure your website or application remains secure, up-to-date, and optimized for performance.</p>
                        </div>
                    </div>

                    <div class='query'>
                        <input type="radio" name="accordion" id="Question6" class="query-toggle" />
                        <label htmlFor='Question6' class='query-header'>How can I get started with your services? <span>&#x3e;</span></label>
                        <div class='Answer'>
                            <p>Getting started is easy! Simply reach out to us through our contact form or schedule a consultation to discuss your project requirements. Our team will work with you to develop a customized plan that meets your needs and goals.</p>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
