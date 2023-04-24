import React from "react";
import Navbar from "../NavBar";
import Logo from "../Logo";

const Header = () => {
    return (
        <div className="header-container">
            <Logo />
            <Navbar />
        </div>
    );
};

export default Header;
