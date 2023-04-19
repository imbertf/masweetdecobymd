import React, { useState } from "react";
import { Link } from "react-router-dom";

function onEmailClick() {
    window.open(`mailto:masweetdecobymd@hotmail.com`);
}

function onPhoneClick() {
    window.open(`tel:+33664641286`);
}

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showPepiteggs = () => {
        setIsOpen(!isOpen);
    };

    return (
        <footer
            className="footerContent"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
        >
            <div className="footerContent-social">
                <p>Contact</p>
                <ul>
                    <li onClick={onPhoneClick}>
                        <p>0664641286</p>
                    </li>
                    <li onClick={onEmailClick}>
                        <p>masweetdecobymd@hotmail.com</p>
                    </li>
                </ul>
            </div>
            <div className="pepiteggs-containter">
                <p>
                    | Website created by{" "}
                    <span onClick={showPepiteggs} className="showPepiteggs">
                        ©️imbertf
                    </span>{" "}
                    2023 |
                </p>
                <div className={isOpen ? "is-active" : "is-inactive"}>
                    <div className="pepiteggsContent">
                        <span className="pepiteggs">🐈‍⬛ MI MI MI ! </span>
                        <Link
                            to="https://www.imbertf.fr/"
                            className="pepiteggs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            www.imbertf.fr
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
