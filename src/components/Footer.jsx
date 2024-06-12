import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
        <section className="footer-section">
            <div className="footer-copyright">
                <p>&copy; 2024 Flixster. All Rights Reserved.</p>
                <p>Made by: Daniel Camilo Fuentes</p>
            </div>

            <div className="footer-contact">
                <h3>Contact Us:</h3>
                <p>Address: 123 Flixster Way, Hollywood, CA 91608</p>
                <p>Phone: +1 (800) 555-5555</p>

                <p>Email: <a href="mailto:support@flixster.com">support@flixster.com</a></p>
            </div>

        </section>
    </footer>
  );
};

export default Footer;
