import React from "react";
import ScrollTopButton from "../../components/ScrollTopButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import bannerPicture from "../../medias/images/pictures/deco2.webp";
import shopList from "../../medias/images/pictures/shop-list.webp";
import moonBoard from "../../medias/images/chambres/clea/moonboard-chambre-clea.webp";
import visuel3D from "../../medias/images/plans/vue-3d.webp";
import visuel2D from "../../medias/images/plans/vue-2d.webp";
import sdb from "../../medias/images/salle-de-bain/sdb-apres-2.webp";
import sdb1 from "../../medias/images/salle-de-bain/sdb-apres-1.webp";

const realisationPictures = [
  { img: "./medias/realisations/salon-apres-1.webp" },
  { img: "./medias/realisations/salon-apres-2.webp" },
  { img: "./medias/realisations/salon-apres-3.webp" },
  { img: "./medias/realisations/sdb-apres-1.webp" },
  { img: "./medias/realisations/sdb-apres-2.webp" },
  { img: "./medias/realisations/chambre-clea-3d-1.webp" },
  { img: "./medias/realisations/chambre-clea-3d-2.webp" },
  { img: "./medias/realisations/chambre-clea-3d-3.webp" },
  { img: "./medias/realisations/chambre-clea-3d-4.webp" },
];

const Deco = () => {
  return (
    <div className="decoration-container">
      <Header />
      <Banner
        image={bannerPicture}
        alt={"séjour design"}
        title={"Décoration d'intérieur"}
      />
      <section className="decoration-container-services">
        <article
          className="decoration-container-services-card"
          data-aos="fade-up"
        >
          <img src={sdb} alt="Salle de bain aménagée" />

          <h4>Visite conseils</h4>
          <ul className="decoContainer-services">
            <li>Echanges autour de vos besoins et envies déco</li>
            <li>Analyse de l'espace et du potentiel de votre pièce</li>
            <li>Conseil sur le mobilier, le choix des couleurs</li>
            <li>Compte rendu</li>
          </ul>
          <div className="priceTagContainer">
            <p className="priceTagContainer-price">150€</p>
          </div>
        </article>
        <article
          className="decoration-container-services-card"
          data-aos="fade-up"
        >
          <img src={moonBoard} alt="Moonboard, planche d'ambiance" />
          <h4>Planche d'ambiance</h4>
          <ul className="decoContainer-services">
            <li>En complément de la visite conseil</li>
          </ul>
          <div className="priceTagContainer">
            <p className="priceTagContainer-price">80€</p>
          </div>
        </article>
        <article
          className="decoration-container-services-card"
          data-aos="fade-up"
        >
          <img src={shopList} alt="Shopping list" />
          <h4>Shopping List</h4>
          <ul className="decoContainer-services">
            <li>En complément de la planche d'ambiance</li>
          </ul>
          <div className="priceTagContainer">
            <p className="priceTagContainer-price">80€</p>
          </div>
        </article>
        <article
          className="decoration-container-services-card"
          data-aos="fade-up"
        >
          <img src={visuel2D} alt="Plan 2D" />
          <h4>Plan d'aménagement</h4>
          <ul className="decoContainer-services">
            <li>Sur devis, en complément de la visite conseils</li>
            <li>Relevé de mesure</li>
            <li>
              Proposition de plan d'aménagement en rapport avec le cahier des
              charges établis lors de la visite conseils
            </li>
          </ul>
          <div className="priceTagContainer">
            <p className="priceTagContainer-price">Sur devis</p>
          </div>
        </article>
        <article
          className="decoration-container-services-card"
          data-aos="fade-up"
        >
          <img src={visuel3D} alt="plan 3D" />
          <h4>Visuels 3D</h4>
          <ul className="decoContainer-services">
            <li>Sur devis, en complément d'un plan d'aménagement</li>
          </ul>
          <div className="priceTagContainer">
            <p className="priceTagContainer-price">Sur devis</p>
          </div>
        </article>
        <article
          className="decoration-container-services-card"
          data-aos="fade-up"
        >
          <img src={sdb1} alt="Salle de bain design" />
          <h4>Projet déco complet</h4>
          <ul className="decoContainer-services">
            <li>Sur devis</li>
            <li>Visite conseils</li>
            <li>Compte rendu</li>
            <li>2 planches d'ambiance</li>
            <li>Relevé de mesure</li>
            <li>3 propositions d'aménagement</li>
            <li>Shopping List</li>
            <li>1 visuel 3D final</li>
          </ul>
          <div className="priceTagContainer">
            <p className="priceTagContainer-price">Sur devis</p>
          </div>
        </article>
        <article className="decoration-container-services-card services-array">
          <h4 data-aos="fade-up">Projet 100% dématerialisé par pièce</h4>
          <ul className="decoContainer-services" data-aos="fade-up">
            <li>Envoyez votre plan avec les mesures</li>
            <li>Des photos des 4 coins de la pièce</li>
            <li>Votre cahier des charges</li>
            <li>Je vous renvoie le projet finalisé par mail</li>
            <li>Le prix inclus une vue 3D ainsi qu'une Shopping List</li>
          </ul>
          <div className="services-array-desktop-wrapper">
            <div className="services-array-wrapper" data-aos="fade-up">
              <ul>
                <li>Pièce de vie:</li>
                <li>+ Salon</li>
                <li>+ Cuisine</li>
                <li>+ Salle à manger</li>
              </ul>
              <div className="priceTagContainer justify-content-center">
                <p className="priceTagContainer-price">230€</p>
              </div>
            </div>
            <div className="services-array-wrapper" data-aos="fade-up">
              <ul>
                <li>Balcon</li>
                <li>Terrasse</li>
              </ul>
              <div className="priceTagContainer justify-content-center">
                <p className="priceTagContainer-price">180€</p>
              </div>
            </div>
            <div className="services-array-wrapper" data-aos="fade-up">
              <ul>
                <li>Salon</li>
                <li>Salle à manger</li>
                <li>Cuisine</li>
                <li>Salle de bain</li>
              </ul>
              <div className="priceTagContainer justify-content-center">
                <p className="priceTagContainer-price">130€</p>
              </div>
            </div>
            <div className="services-array-wrapper" data-aos="fade-up">
              <ul>
                <li>Chambre</li>
              </ul>
              <div className="priceTagContainer justify-content-center">
                <p className="priceTagContainer-price">110€</p>
              </div>
            </div>
            <div className="services-array-wrapper" data-aos="fade-up">
              <ul>
                <li>Entrée</li>
                <li>Bureau</li>
                <li>Dressing</li>
                <li>Buanderie</li>
                <li>WC</li>
              </ul>
              <div className="priceTagContainer justify-content-center">
                <p className="priceTagContainer-price">80€</p>
              </div>
            </div>
          </div>
        </article>
        <h2>Mes réalisations</h2>
        <article className="realisation-container">
          {realisationPictures.map((element) => (
            <div className="realisation-container-card">
              <img
                src={element.img}
                alt="Réalisation, vue 3D, décoration d'intérieur"
              />
            </div>
          ))}
        </article>
      </section>
      <ScrollTopButton />
      <Footer />
    </div>
  );
};

export default Deco;
