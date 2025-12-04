import { Link } from "react-router";
import logo from "url:../../foodie-logo.png"
// The url: tells Parcel, "I don't just want you to process this file; I want you to give me the final, absolute URL to this file as a string."
// header component
const Header = () => (
    <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div >
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="contact">contact Us</Link></li>
                <li><i className="fa-solid fa-cart-shopping"></i></li>
            </ul>
        </div>
    </div>
)

export default Header;