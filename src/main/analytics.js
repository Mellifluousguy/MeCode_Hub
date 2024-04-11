import AppDevelopment1 from "./images/MobileFeatures.png";
import AppDevelopment2 from "./images/MobileFeatures2.png";
import AppDevelopment3 from "./images/MobileFeatures3.png";
import WebDevelopment1 from "./images/WebFeature.jpg";
import WebDevelopment2 from "./images/WebFeature2.png";
import WebDevelopment3 from "./images/WebFeature3.png";


export default function analytics() {
    return (
        <div className="features" id="Features">
            <div className="cards">
                <div class="card">
                    <img src={AppDevelopment1} alt=""/>
                    <h3>Custom Mobile Apps</h3>
                    <p>Tailored mobile applications crafted to meet specific business requirements and deliver unique user experiences, enhancing brand engagement and loyalty.</p>
                </div>
                <div class="card">
                    <img src={AppDevelopment2} alt=""/>
                    <h3>User-Centric Design</h3>
                    <p>Intuitive and visually appealing interfaces designed with the end-user in mind, ensuring seamless navigation and enhanced usability.</p>
                </div>
                <div class="card">
                    <img src={AppDevelopment3} alt=""/>
                    <h3>Platform Compatibility</h3>
                    <p>Cross-platform apps compatible with multiple operating systems (iOS and Android), maximizing reach and accessibility for users.</p>
                </div>
                <div class="card">
                    <img src={WebDevelopment1} alt=""/>
                    <h3>Custom Website Development</h3>
                    <p>Tailored web solutions built from scratch to suit your specific business needs and goals.</p>
                </div>
                <div class="card">
                    <img src={WebDevelopment2} alt=""/>
                    <h3>Responsive Design</h3>
                    <p>Websites optimized for seamless viewing across all devices, providing a consistent user experience and maximizing accessibility.</p>
                </div>
                <div class="card">
                    <img src={WebDevelopment3} alt=""/>
                    <h3>SEO Optimization</h3>
                    <p>Implementation of SEO best practices to improve website visibility and ranking on search engines, attracting organic traffic and boosting online presence.</p>
                </div>
            </div>
        </div>
    );
}