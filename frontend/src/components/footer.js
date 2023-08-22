import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>About Us</h2>
        <p>
          We are "The Southander Destination Experience SA", a "Sociedad de
          Cartera AR Inversiones SA" subsidiary.
        </p>
      </div>
      <div className="footer-section">
        <h2>Contact Us</h2>
        <div className="contact-row">
          <div className="contact-item">
            <span className="contact-heading">ON-LINE |</span>
            <a href="#"> SUBMIT YOUR INQUIRY</a>
          </div>
          <div className="contact-item">
            <span className="contact-heading">EMAIL |</span>
            <a href="#"> info@southlander.travel</a>
          </div>
          <div className="contact-item">
            <span className="contact-heading">🙋‍♀️ CHAT |</span>
            <a href="#"> WhatsApp 24/7</a>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h2>Explore</h2>
        <div className="explore-columns">
          <div className="explore-column">
            <a href="#">Home</a>
            <a href="#">Accomodation</a>
            <a href="#">Rentals</a>
            <a href="#">Event Tickets</a>
          </div>
          <div className="explore-column">
            <a href="#">Packages</a>
            <a href="#">Event Planning</a>
            <a href="#">Tours</a>
            <a href="#">Book Now</a>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h2>Follow Us</h2>
        <p>Welcome to the Southlander world! Follow us and join our tribe.</p>
        <div className="social-icons">
          <SocialIcon
            url="https://facebook.com"
            bgColor="#00000000"
            fgColor="#616161"
            className="icon"
          />
          <SocialIcon
            url="https://instagram.com"
            bgColor="#00000000"
            fgColor="#616161"
          />
          <SocialIcon
            url="https://twitter.com/jaketrent"
            bgColor="#00000000"
            fgColor="#616161"
          />
          <SocialIcon
            url="https://linkedin.com"
            bgColor="#00000000"
            fgColor="#616161"
          />
          <SocialIcon
            url="https://youtube.com"
            bgColor="#00000000"
            fgColor="#616161"
          />
          <SocialIcon
            url="https://whatsapp.com"
            bgColor="#00000000"
            fgColor="#616161"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
