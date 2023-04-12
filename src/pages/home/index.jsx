import React from "react";
import Slideshow from "../../components/Slideshow";
import NavBar from "../../components/NavBar";
import ScrollTopButton from "../../components/ScrollTopButton";

const Home = () => {
    return (
        <div className="homepage-container">
            <NavBar />
            <div className="homepage-h1">
                <h1>Ma sweet deco by MD</h1>
            </div>
            <Slideshow />
            <div>
                <ScrollTopButton />
            </div>
        </div>
    );
};

export default Home;
