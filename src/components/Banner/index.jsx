import React from "react";

const Banner = ({ image, alt, title }) => {
    return (
        <div className="banner-container">
            <div className="banner-container-img">
                <img src={image} alt={alt} />
            </div>
            <h1 className="banner-container-h1">{title}</h1>
        </div>
    );
};

export default Banner;
