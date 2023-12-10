import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import "./Header.css";

function Header() {
    const navRef = useRef();

    const showHeader = () => {
        navRef.current.classList.toggle("responsive-navigation");
    };

    return (
        <header className="header">
            <h3 className="logo"><span>#</span>Portfolio_</h3>
            <nav className="navigation" ref={navRef}>
                <a href="/#" className="navigation-link" onClick={showHeader}><span>#</span>home_</a>
                <a href="/#about-me" className="navigation-link" onClick={showHeader}><span>#</span>about-me_</a>
                <a href="/#my-works" className="navigation-link" onClick={showHeader}><span>#</span>my-works_</a>
                <a href="/#get-in-touch" className="navigation-link" onClick={showHeader}><span>#</span>get-in-touch_</a>
                <button
                    className="navigation-button navigation-close-button"
                    onClick={showHeader}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="navigation-button"
                onClick={showHeader}>
                <CgMenuGridR />
            </button>
        </header>
    );
}

export default Header;