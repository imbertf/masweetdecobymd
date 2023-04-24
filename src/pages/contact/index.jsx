import React from "react";
import ScrollTopButton from "../../components/ScrollTopButton";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import bannerPicture from "../../medias/images/pictures/deco5.jpg";
import { CiMobile1, CiMail } from "react-icons/ci";

function onEmailClick() {
    window.open(`mailto:masweetdecobymd@hotmail.com`);
}

function onPhoneClick() {
    window.open(`tel:+33664641286`);
}

const Contact = () => {
    return (
        <div className="contact-container">
            <Header />
            <Banner image={bannerPicture} alt={"salle de bain design"} />
            <h1 data-aos="fade-up">Contactez moi</h1>
            <div className="card-wrapper">
                <div className="card-wrapper-card" data-aos="fade-up">
                    <CiMobile1 />
                    <p onClick={onPhoneClick}>0664641286</p>
                </div>
                <div className="card-wrapper-card" data-aos="fade-up">
                    <CiMail />
                    <p onClick={onEmailClick}>masweetdecobymd@hotmail.com</p>
                </div>
            </div>
            <ContactForm />
            <ScrollTopButton />
            <Footer />
        </div>
    );
};

export default Contact;
