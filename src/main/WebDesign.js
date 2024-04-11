import WebDesigningImage from "./images/WebDesigning.jpg";
import DecorWeb from "./images/WebDesigningDecor.png";

export default function WebDesigning() {


    return (<div className="webDesigning loop" id="WebDesign">
        <img src={DecorWeb} className="Decor" />
        <div className="content">
            <h1 >Web Design</h1>
            <p>
                Transform your online presence with our expert web design service
                s. At <strong>MeCode</strong>, we specialize in crafting visually stunning and user-friendly websites that leave a lasting impression. Our team of talented designers works closely with you to understand your brand identity, goals, and target audience, ensuring that every aspect of your website reflects your unique vision.
                <br />
                From concept to execution, we prioritize creativity, usability, and functionality to deliver exceptional results. Whether you're a startup looking to establish your online presence or a seasoned enterprise seeking to refresh your website, we're here to bring your vision to life. Let us help you stand out in the digital landscape and drive results for your business with our professional web design services.

            </p>
        </div>
        <div className="image">
            <img src={WebDesigningImage} alt="Web Designing Image" />
        </div>
    </div>)
}