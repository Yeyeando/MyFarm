import "./Header.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function Header() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 760) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navigateHome = () => {
        navigate("/home");
    };

    const navigateGraphics = () => {
        navigate("/animals");
    };

    const navigateFarms = () => {
        navigate("/farms");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="my-header">
            <nav className="navbar">
                <div className="header-logo">
                    <img src="../../../public/img/granjamiga.png" alt="logo" />
                </div>
                <label className="label_hamburguesa" htmlFor="menu_hamburguesa">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="list_icon"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 
                            1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a
                            .5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 
                            1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                </label>
                <input
                    className="menu_hamburguesa"
                    type="checkbox"
                    checked={menuOpen}
                    onChange={toggleMenu}
                    id="menu_hamburguesa"
                />
                <ul className={`header-links ${menuOpen ? 'open' : ''}`}>
                    <div onClick={navigateHome} type="button"><p>Home</p></div>
                    <div onClick={navigateGraphics} type="button"><p>Graphics</p></div>
                    <div onClick={navigateFarms} type="button"> <p>Farms</p></div>
                </ul>
            </nav>
        </div>
    );
}

export default Header;