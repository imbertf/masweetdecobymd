import React, { useState } from "react";
import ContactForm from "../ContactForm/index.jsx";
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

function onEmailClick() {
  window.open(`mailto:masweetdecobymd@hotmail.com`);
}

function onPhoneClick() {
  window.open(`tel:+33664641286`);
}

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showPepiteggs = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <footer
        className="footerContent"
      >
        <div className="footerContent-social">
          <h4>Contact</h4>
          <ul>
            <li onClick={onPhoneClick}>0664641286</li>
            <li onClick={onEmailClick}>masweetdecobymd@hotmail.com</li>
          </ul>
          <h4>Suivez moi</h4>
          <ul className="footerContent-social-icons">
            <li>
              <Link
                to={"https://www.facebook.com/profile.php?id=100092035090805"}
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialFacebook />
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={
                  "https://www.instagram.com/masweetdecobymd/?fbclid=IwAR0cV1RwL9yI4EOSmPyyFP7E6Kb9ZKGR3_KPUUUJWD8mHq2K3l0Bd5Suex0"
                }
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialInstagram />
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={
                  "https://www.linkedin.com/in/mariedecroix/"
                }
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <section className="footerContent-form">
          <div className="footerContent-form-content">
            <p className="footerContent-form-content-txt">
              Vous voulez vendre, louer ou rafraichir votre intérieur et vous
              être accompagné tout au long de votre projet ? <br />
              <br />
              Votre demande de devis en remplissant le formulaire ou{" "}
              <span onClick={onPhoneClick}> appellez-moi.</span>
              <br />
              Je vous accompagne quelque soit votre projet ou idée de
              décoration.
            </p>
            <ContactForm />
          </div>
        </section>
      </footer>
      <div className="pepiteggs-container">
        <p>
          | Website created by{" "}
          <span onClick={showPepiteggs} className="showPepiteggs">
            ©️imbertf
          </span>{" "}
          2025 |
        </p>
        <Link
          to={
            "https://www.linkedin.com/in/mariedecroix/"
          }
          target="_blank"
          rel="noreferrer"
        >
          <SlSocialLinkedin />
        </Link>
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
      </div>
    </>
  );
};

export default Footer;
