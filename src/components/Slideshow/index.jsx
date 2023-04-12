import React, { useState } from "react";
import { Link } from "react-router-dom";

const Slideshow = () => {
    const [clicked, setClicked] = useState(false);
    const [activeCard, setActiveCard] = useState(0);

    const cards = [
        { title: "Décoration d'interieur" },
        { title: "Home staging" },
    ];

    const handleCardChange = () => {
        setActiveCard((activeCard + 1) % cards.length);
    };

    return (
        <div className="card-switcher-container">
            <div className="card-switcher-cards">
                <Link
                    to="/decoration-interieur"
                    className={`card-switcher-card ${
                        activeCard === 0 ? "active" : ""
                    }`}
                    style={{
                        backgroundImage: `url("/pictures/deco1-small.webp")`,
                    }}
                >
                    <h2>{cards[0].title}</h2>
                </Link>
                <Link
                    to="/home-staging"
                    className={`card-switcher-card ${
                        activeCard === 1 ? "active" : ""
                    }`}
                    style={{
                        backgroundImage: `url("/pictures/homestaging1-small.webp")`,
                    }}
                >
                    <h2>{cards[1].title}</h2>
                </Link>
                <div
                    className={`card-switcher-button ${
                        clicked ? "clicked" : ""
                    }`}
                >
                    <span
                        className={`switcher-dot ${
                            activeCard === 0 ? "active" : ""
                        }`}
                        onClick={() => {
                            setClicked(!clicked);
                            handleCardChange();
                        }}
                    ></span>
                    <span
                        className={`switcher-dot ${
                            activeCard === 1 ? "active" : ""
                        }`}
                        onClick={() => {
                            setClicked(!clicked);
                            handleCardChange();
                        }}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
