import React from "react";
import ScrollTopButton from "../../components/ScrollTopButton";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import bannerPicture from "../../medias/images/pictures/deco3.webp";
import { Link } from "react-router-dom";

function onPhoneClick() {
  window.open(`tel:+33664641286`);
}

const Home = () => {
  return (
    <div className="homepage-container">
      <Header />
      <Banner
        image={bannerPicture}
        alt={"salon design"}
        title={"Ma Sweet Déco"}
      />
      <div className="homepage-services-title" data-aos="fade-up">
        <h2>by Marie Decroix</h2>
        <p className="homepage-services-txt">
          Bienvenue chez "Ma Sweet Déco by MD" – Votre partenaire privilégié en
          matière de Home Staging et de décoration d'intérieur à Lille !
          <br />À la recherche d'une transformation saisissante pour votre
          espace de vie ou votre propriété à vendre ? Je suis Marie Decroix,
          designer d'intérieur spécialisée dans l'art du Home Staging et de la
          décoration personnalisée et je vais vous accompagner tout au long de
          votre projet!
          <br />
          <br />
          Si vous souhaitez redéfinir le style de votre maison, je vous propose
          des solutions de décoration sur mesure. Travaillons ensemble pour
          comprendre vos préférences et créer des espaces qui reflètent
          pleinement votre personnalité.
        </p>
        <div className="homepage-services-wrapper">
          <h3>Décoration d'intérieur</h3>
          <p>Recréez-vous l'espace qui vous ressemble</p>
        </div>
      </div>
      <section className="homepage-services">
        <article className="homepage-services-article" data-aos="fade-up">
          <h4>Réinventer, oui mais pas seul</h4>
          <p>
            Commençons par une visite conseil et échanger autour de votre
            projet, de vos besoins et envies. je suis là pour vous accompagner
            tout au long de votre démarche!
            <br />
            <br /> Je propose d'analyser l'espace et évaluer le potentiel de
            votre pièce ainsi que d'apporter un conseil personalisé que ce soit
            pour le choix du mobilier, des couleurs.
            <br />
            <br /> Un compte rendu de visite pour pouvoir créer une base de
            votre projet sera élaboré par mes soins.
          </p>
          <div className="homepage-services-article-button" data-aos="fade-up">
            <Link to="/décoration-d'intérieur">
              <Button text={"Plus d'info"} />
            </Link>
          </div>
        </article>
        <article className="homepage-services-article" data-aos="fade-up">
          <h4>Votre projet commence à prendre forme ? Continuons ensemble !</h4>
          <p>
            Nous avons fait un point de vos idées, nous pouvons aller plus loin
            encore.
            <br />
            <br />
            Je réalise des planches d'ambiance ou "Mood board". Qu'est-ce qu'une
            Mood board ? <br />
            Une planche d'ambiance ou Mood board est un "collage" composé
            d'images d'inspiration, de textes et d'échantillons d'objets
            utilisés pour transmettre une idée générale ou un sentiment. Et dans
            votre cas, retranscrire vos sentiments.
            <br />
            <br />
            Le choix du mobilier étant une étape importante, je vous accompagne
            pour réaliser votre shopping list en complément de la réaalisation
            de la planche d'ambiance.
          </p>
          <div className="homepage-services-article-button" data-aos="fade-up">
            <Link to="/décoration-d'intérieur">
              <Button text={"Plus d'info"} />
            </Link>
          </div>
        </article>
        <article className="homepage-services-article" data-aos="fade-up">
          <h4>Un design encore plus personalisé</h4>
          <p>
            Afin de pouvoir créer un design d'intérieur à la hauteur de vos
            envies, sur devis:
            <br />
            je fais des relevés de mesures et vous propose un plan d'aménagement
            en rapport avec le cahier des charges établi lors de la visite
            conseil.
            <br />
            Une fois le plan d'aménagement de votre projet d'intérieur établi,
            je peux vous recreer votre environement sous forme de visuel 3D.
          </p>
          <div className="homepage-services-article-button" data-aos="fade-up">
            <Link to="/décoration-d'intérieur">
              <Button text={"Plus d'info"} />
            </Link>
          </div>
        </article>
        <article className="homepage-services-article" data-aos="fade-up">
          <h4>Projet déco complet</h4>
          <p>
            Je vous propose tous mes services réunis dans un projet déco complet
            sur devis. Vous souhaitez refaire entièrement une chambre, salle de
            bain, séjour ?
          </p>
          <div className="homepage-services-article-button" data-aos="fade-up">
            <Link to="/décoration-d'intérieur">
              <Button text={"Plus d'info"} />
            </Link>
          </div>
        </article>
        <article className="homepage-services-article" data-aos="fade-up">
          <h4>100% dématerialisé</h4>
          <p>
            Envoyez moi votre plan avec mesures de la pièce, photos, vos besoins
            spécifiques en terme de design, couleurs, ammeublement, décoration.
            Je vous renvoie par mail le projet finalisé avec vue 3D et shopping
            list.
          </p>
          <div className="homepage-services-article-button" data-aos="fade-up">
            <Link to="/décoration-d'intérieur">
              <Button text={"Plus d'info"} />
            </Link>
          </div>
        </article>
      </section>

      <div className="homepage-image"></div>
      <div className="homepage-services-title">
        <div className="homepage-services-wrapper">
          <h3>Home staging</h3>
          <p>Préparez la vente de votre bien immobilier</p>
        </div>
        <p className="homepage-services-txt">
          Préparez votre propriété pour une vente réussie grâce à mon service de
          Home Staging. Je maximise l'attrait de votre espace, accentue ses
          points forts et crée une ambiance chaleureuse pour attirer les futurs
          acheteurs. Confiez-moi la transformation de votre bien en un véritable
          coup de cœur sur le marché immobilier.
        </p>
      </div>
      <section className="homepage-services">
        <article className="homepage-services-article" data-aos="fade-up">
          <h4>Diagnostic conseil</h4>
          <p>
            Dans le cadre de votre projet de vente, je vous propose une analyse
            de votre bien. Repérer les atouts, les mettres en avant et vous
            soumettre un compte rendu reprenant les différents conseils et
            changements à entreprendre.
          </p>
          <div className="homepage-services-article-button" data-aos="fade-up">
            <Link to="/home-staging">
              <Button text={"Plus d'info"} />
            </Link>
          </div>
        </article>
        <article className="homepage-services-article" data-aos="fade-up">
          <h4>Home staging virtuel</h4>
          <p>
            Envoyez moi les plans de votre pièce avec les mesures, les photos
            des 4 coins. Faites une liste de vos instructions tels que les
            meubles à conserver ou enlever.
            <br />
            Je vous envoie le projet final sous forme de vue 3D par mail.
          </p>
          <div className="homepage-services-article-button" data-aos="fade-up">
            <Link to="/home-staging">
              <Button text={"Plus d'info"} />
            </Link>
          </div>
        </article>
      </section>
      <>
        <ScrollTopButton />
      </>
      <Footer />
      {/* <div className="pepiteggs-container">
        <p>
          | Website created by{" "}
          <span onClick={showPepiteggs} className="showPepiteggs">
            ©️imbertf - www.imbertf.fr
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
      </div> */}
    </div>
  );
};

export default Home;
