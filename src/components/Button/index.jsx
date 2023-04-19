import React, { useState } from "react";

const Button = ({ type, text, className, onClick }) => {
    const [isActive, setIsActive] = useState(false);
    const toggleButton = () => {
        setIsActive(true);
    };

    return (
        <button
            className={isActive ? "btn-hover" : ""}
            type={type}
            onClick={onClick}
            onMouseEnter={toggleButton}
        >
            {text}
        </button>
    );
};

export default Button;
