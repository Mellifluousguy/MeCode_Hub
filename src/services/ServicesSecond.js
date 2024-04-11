import React, { Component } from 'react'
import ServicesCard from './ServicesCard.js'

export default class ServicesSecond extends Component {
  render() {
    return (

      <div className='ServiceSecond'>
        <div className='ServicesCard'>
          <ServicesCard
            src="https://cdn-icons-png.flaticon.com/512/1804/1804352.png"
            heading="Web Designing"
            text="Transform your online presence with our expert web design services. We specialize in crafting visually stunning and user-friendly websites tailored to your brand's unique identity and goals."
          />
          <ServicesCard
            src="https://cdn-icons-png.flaticon.com/512/2210/2210153.png"
            heading="Web Development"
            text="Elevate your online presence with our custom web development solutions. From simple websites to complex web applications, we bring your ideas to life with cutting-edge technology and seamless functionality."
          />
          <ServicesCard
            src="https://cdn-icons-png.flaticon.com/512/5738/5738031.png"
            heading="App Development"
            text="Turn your app ideas into reality with our expert app development services. Whether it's iOS or Android, we create custom mobile applications tailored to your business needs, focusing on usability, performance, and scalability."
          />
          <ServicesCard
            src="https://cdn-icons-png.flaticon.com/512/8026/8026439.png"
            heading="Digital Marketing"
            text="Drive growth and engagement with our digital marketing solutions. From SEO and PPC to social media and content strategy, we help businesses succeed in the digital landscape through targeted and data-driven strategies."
          />
          <ServicesCard
            src="https://cdn-icons-png.flaticon.com/512/3445/3445817.png"
            heading="E-Commerce Solutions"
            text="Launch and grow your online store with our e-commerce solutions. We offer end-to-end services, from platform selection to design customization and payment integration, to help you maximize sales and customer satisfaction."
          />
          <ServicesCard
            src="https://cdn-icons-png.flaticon.com/512/5765/5765675.png"
            heading="Content Management Systems(CMS)"
            text="Streamline your website management with our content management system solutions. Whether you need a custom CMS or integration with popular platforms like WordPress, we provide flexible solutions to simplify content creation and publishing."
          />
        </div>
      </div>
    )
  }
}
