import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const NotFound = () => {
    return (
        <div className="notFound-container">
            <Header />
            <div className="notFound-container-txt">
                <h1>
                    La page que vous recherchez n'existe pas en revanche besoin
                    d'une designer d'intérieur ?
                </h1>
                <Link to="/">
                    <Button text={"C'est par ici !"} />
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default NotFound;
