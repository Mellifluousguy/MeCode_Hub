import './Header.css'
import { Link } from "react-router-dom";
export default function () {

    return (

        <div className='header'>
            <nav>
                <Link to="/"><h1>MeCode</h1></Link>
                <ul>
                    <li class="nav-items"><Link to="/">Home</Link></li>
                    <li class="nav-items"><Link to="/services">Services</Link>
                        <ul className='services'>
                            <li><Link to="/services">Web Designing</Link></li>
                            <li><Link to="/services">Web Development</Link></li>
                            <li><Link to="/services">App Development</Link></li>
                            <li><Link to="/services">Digital Marketing</Link></li>
                            <li><Link to="/services">E-Commerce Solution</Link></li>
                            <li><Link to="/services">Content Management Systems(CMS)</Link></li>
                        </ul></li>
                    <li class="nav-items"><Link to="/contact">Contact</Link></li>
                    <li class="nav-items"><Link to="/about">About</Link></li>
                    <li class="nav-items"><Link to="/costing">Costing</Link></li>
                </ul>
            </nav>
        </div>
    )
}