import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4, HiOutlineMinusSm } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar">
            <div className="burger-menu" onClick={handleClick}>
                <HiOutlineMenuAlt4 />
            </div>
            <ul
                className={open ? "nav-links active" : "nav-links"}
                onClick={handleClick}
            >
                <HiOutlineMinusSm
                    onClick={handleClick}
                    className="burger-menu-close"
                />
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/décoration-d'intérieur">Déco</Link>
                </li>
                <li>
                    <Link to="/home-staging">Home staging</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/a-propos">A propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
