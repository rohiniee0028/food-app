import {LOGO_URL} from "../utils/constants";
import { useState } from 'react';
import ShimmarImg from './shimmar/ShimmarImg';

const Header = () => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [logoError, setLogoError] = useState(false);
    const [btnName, setBtnName] = useState("Login");

    console.log('Header rendered');

    return (
        <div className="header">
            <div className="logo-container">
                {/* show shimmer while logo is loading */}
                {!logoLoaded && !logoError && <ShimmarImg />}

                {/* actual image - hide until loaded to avoid layout shift */}
                {!logoError && (
                    <img
                        src={LOGO_URL}
                        alt="company-logo"
                        className="logo"
                        style={{ display: logoLoaded ? 'block' : 'none' }}
                        onLoad={() => setLogoLoaded(true)}
                        onError={() => { setLogoError(true); setLogoLoaded(false); }}
                    />
                )}

                {/* fallback content if image fails to load */}
                {logoError && (
                    <div className="logo-fallback">Company</div>
                )}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>
                        <button className="logo-btn" onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;