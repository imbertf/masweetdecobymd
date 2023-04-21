import React from "react";
import Slideshow from "../../components/Slideshow";
import NavBar from "../../components/NavBar";
import ScrollTopButton from "../../components/ScrollTopButton";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import ContactForm from "../../components/ContactForm";

function onPhoneClick() {
    window.open(`tel:+33664641286`);
}

const Home = () => {
    return (
        <div className="homepage-container">
            <NavBar />
            <div className="homepage-h1">
                <h1>Ma sweet deco by MD</h1>
            </div>
            {/* <Slideshow /> */}
            <article className="homepage-profil">
                <h2 className="homepage-profil-h2">
                    « Ma mission est de comprendre vos envies, de vous proposer
                    un projet sur mesure pour créer un lieu unique »
                </h2>
            </article>
            <section className="homepage-services">
                <div className="homepage-services-title">
                    <h3>Décoration d'intérieur</h3>
                    <p>Recréez vous l'espace qui vous ressemble</p>
                </div>
                <article className="homepage-services-article">
                    <h4>Réinventer, oui mais pas seul</h4>
                    <p>
                        Commençons par une visite conseil et échanger autour de
                        votre projet, de vos besoins et envies. je suis la pour
                        vous accompagner tout au long de votre démarche!
                        <br />
                        <br /> Je propose d'analyser l'espace et évaluer le
                        potentiel de votre pièce ainsi que d'apporter un conseil
                        personalisé que ce soit pour le choix du mobilier, des
                        couleurs.
                        <br />
                        <br /> Un compte rendu de visite pour pouvoir créer une
                        base de votre projet sera élaboré par mes soins.
                    </p>
                    <Button text={"Plus d'info"} />
                </article>
                <article className="homepage-services-article">
                    <h4>
                        Votre projet commence à prendre forme ? Continuons
                        ensemble !
                    </h4>
                    <p>
                        Nous avons fait un point de vos idées, nous pouvons
                        aller plus loin encore.
                        <br />
                        <br />
                        Je réalise des planches d'ambiance ou "Moon board".
                        Qu'est-ce qu'une Moon board ? <br />
                        Une planche d'ambiance ou Moon board est un "collage"
                        composé d'images d'inspiration, de textes et
                        d'échantillons d'objets utilisés pour transmettre une
                        idée générale ou un sentiment. Et dans votre cas,
                        retranscrire vos sentiments.
                        <br />
                        <br />
                        Le choix du mobilier étant une étape importante, je vous
                        accompagne pour réaliser votre shopping list en
                        complément de la réaalisation de la planche d'ambiance.
                    </p>
                    <Button text={"Plus d'info"} />
                </article>
                <article className="homepage-services-article">
                    <h4>Un design encore plus personalisé</h4>
                    <p>
                        Afin de pouvoir créer un design d'intérieur à la hauteur
                        de vos envies, sur devis:
                        <br />
                        je fais des relevés de mesures et vous propose un plan
                        d'aménagement en rapport avec le cahier des charges
                        établis lors de la visite conseil.
                        <br />
                        Une fois le plan d'aménagement de votre projet
                        d'intérieur établis, je peux vous recreer votre
                        environement sous forme de visuel 3D.
                    </p>
                    <Button text={"Plus d'info"} />
                </article>
                <article className="homepage-services-article">
                    <h4>Projet déco complet</h4>
                    <p>
                        Je vous propose tous mes services réunis dans un projet
                        déco complet sur devis. Vous souhaitez refaire
                        entièrement une chambre, salle de bain, séjour ?
                    </p>
                    <Button text={"Plus d'info"} />
                </article>
                <article className="homepage-services-article">
                    <h4>100% dématerialisé</h4>
                    <p>
                        Envoyez moi votre plan avec mesures de la pièce, photos,
                        vos besoins spécifiques en terme de design, couleurs,
                        ammeublement, décoration. Je vous renvoie par mail le
                        projet finalisé avec vue 3D et shopping list.
                    </p>
                    <Button text={"Plus d'info"} />
                </article>
            </section>
            <section className="homepage-services">
                <div className="homepage-image"></div>
                <div className="homepage-services-title">
                    <h3>Home staging</h3>
                    <p>Préparez la vente de votre bien immobilier</p>
                </div>
                <article className="homepage-services-article">
                    <h4>Diagnostic conseil</h4>
                    <p>
                        Dans le cadre de votre projet de vente, je vous propose
                        une analyse de votre bien. Reperer les atouts, les
                        mettres en avant et vous soumettre un compte rendu
                        reprenant les différents conseils et changements à
                        entreprendre.
                    </p>
                    <Button text={"Plus d'info"} />
                </article>
                <article className="homepage-services-article">
                    <h4>Home staging virtuel</h4>
                    <p>
                        Envoyez moi les plans de votre pièce avec les mesures,
                        les photos des 4 coins. Faites une liste de vos
                        instructions tels que les meubles à conserver ou
                        enlever.
                        <br />
                        Je vous envoie le projet final sous forme de vue 3D par
                        mail.
                    </p>
                    <Button text={"Plus d'info"} />
                </article>
                <p className="homepage-contactTxt">
                    Contacter moi via le formulaire ou n'hésitez pas à
                    <span onClick={onPhoneClick}> m'appeler </span>
                    directement
                </p>
            </section>
            <ContactForm />
            <>
                <ScrollTopButton />
            </>
            <Footer />
        </div>
    );
};

export default Home;
