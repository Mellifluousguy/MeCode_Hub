import WebDevImage from "./images/app_dev_06.jpg";

export default function WebDevelopment() {
    
    
    return (<div className="WebDev loop" id="WebDevelopment">
        <div className="content">
            <h1>Web Development</h1>
            <p>
                At <strong>MeCode</strong>, we specialize in crafting exceptional websites tailored to your needs. Our team of skilled developers brings your vision to life with custom solutions that elevate your online presence.

                From sleek landing pages to dynamic e-commerce platforms, we deliver user-friendly websites that captivate your audience and drive results. With a focus on modern design and seamless functionality, we ensure that your website stands out in today's digital landscape.

                Partner with <strong>MeCode</strong> to create a compelling online experience that showcases your brand and converts visitors into customers.</p>
        </div>
        <div className="image">
            <img src={WebDevImage} alt="Web Development" />
        </div>
    </div>)
}