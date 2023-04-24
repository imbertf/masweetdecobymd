import React from "react";
import ScrollTopButton from "../../components/ScrollTopButton";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import bannerPicture from "../../medias/images/pictures/homestaging1.webp";

const Deco = () => {
    return (
        <div className="decoration-container">
            <Header />
            <Banner
                image={bannerPicture}
                alt={"Home staging plan"}
                title={"Home staging"}
            />
            <section className="decoration-container-services">
                <article
                    className="decoration-container-services-card"
                    data-aos="fade-up"
                >
                    <h4>Diagnostic conseils</h4>
                    <ul className="decoContainer-services">
                        <li>Mise en avant des atouts du bien</li>
                        <li>
                            Reperer les points faibles pouvant être un axe
                            d'amélioration en vue d'une vente
                        </li>
                        <li>Compte rendu</li>
                    </ul>
                    <div className="priceTagContainer">
                        <p className="priceTagContainer-price">200€/h</p>
                    </div>
                </article>
                <article className="decoration-container-services-card services-array">
                    <h4 data-aos="fade-up">Home staging virtuel</h4>
                    <ul className="decoContainer-services" data-aos="fade-up">
                        <li>Envoyez votre plan avec les mesures</li>
                        <li>Des photos des 4 coins de la pièce</li>
                        <li>
                            Instructions tels que les meubles à conserver, ceux
                            à retirer etc...
                        </li>
                        <li>Je vous renvoie le projet finalisé par mail</li>
                        <li>Vue 3D incluse</li>
                    </ul>
                    <div className="services-array-wrapper" data-aos="fade-up">
                        <ul>
                            <li>Désencombrement</li>
                            <li>Aménagement</li>
                        </ul>
                        <div className="priceTagContainer justify-content-center">
                            <p className="priceTagContainer-price">80€</p>
                        </div>
                    </div>
                    <div className="services-array-wrapper" data-aos="fade-up">
                        <ul>
                            <li>Intérieur vide</li>
                            <li>Aménagement</li>
                        </ul>
                        <div className="priceTagContainer justify-content-center">
                            <p className="priceTagContainer-price">70€</p>
                        </div>
                    </div>
                </article>
            </section>
            <ScrollTopButton />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Deco;
