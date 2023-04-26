import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import bannerPicture from "../../medias/images/pictures/deco6.webp";
import profilPicture from "../../medias/images/profil/profil.webp";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

const About = () => {
    return (
        <div className="about-container">
            <Header />
            <Banner
                image={bannerPicture}
                alt={
                    "Marie Decroix, designer d'intérieur et spécialiste Home staging"
                }
                title={"Marie Decroix"}
            />
            <div className="main-wrapper">
                <div className="profil-wrapper">
                    <div className="profil-picture">
                        <img
                            src={profilPicture}
                            alt="Marie Decroix, Home staging et design d'intérieur à Lille"
                            data-aos="fade-up"
                        />
                    </div>
                    <div className="profil-picture-border1">
                        <div className="profil-picture-border2"></div>
                    </div>
                </div>
                <section className="introduction-container">
                    <h2 data-aos="fade-up">
                        « Ma mission est de comprendre vos envies, de vous
                        proposer un projet sur mesure pour créer un lieu unique
                        »
                    </h2>
                    <div className="introduction-wrapper">
                        <p
                            className="introduction-wrapper-txt"
                            data-aos="fade-up"
                        >
                            Dans la grande distribution depuis 2006, j’ai évolué
                            au travers différents métiers tels que hôtesse de
                            caisse, hôtesse d’accueil, gestionnaire
                            approvisionnement et gestionnaire de parc.
                            <br />
                            Ces métiers ou le contact clients ainsi que l'écoute
                            sont au coeur des préocupations.
                            <br />
                            <br />
                            Etant passionnée de décoration, je me suis inscrite
                            à la formation de décoratrice d’intérieur à L’ECOLE
                            FRANCAISE dont j’ai obtenu ma certification.
                            <br /> Je suis à l’écoute de mes clients pour
                            pouvoir répondre au mieux à leurs envies et leur
                            donner pleine satisfaction tout en prenant compte de
                            leur confort, de leurs goûts, de leur mode de vie et
                            de leurs contraintes.
                        </p>
                        <div className="introduction-wrapper-border1">
                            <div className="introduction-wrapper-border2"></div>
                        </div>
                    </div>
                </section>
            </div>

            <ContactForm />
            <Footer />
        </div>
    );
};

export default About;
