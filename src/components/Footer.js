import React from 'react';
import '../styles/Footer.css';

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" sm="12">
            <div className="footer__brand">
              <h2 className="footer__brand-name">Sportify</h2>
              <p className="footer__brand-tagline">Elevate Your Game with Premium Sports Gear</p>
              <p className="footer__brand-description">
                Discover the best in sports accessories, designed to boost your performance and take you to the next level.
              </p>
            </div>
          </Col>

          <Col lg="2" md="3" sm="6">
            <div className="footer__links">
              <h5 className="footer__link-title">Navigate</h5>
              <ul className="footer__list">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
          </Col>

          <Col lg="2" md="3" sm="6">
            <div className="footer__links">
              <h5 className="footer__link-title">Support</h5>
              <ul className="footer__list">
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/shipping">Shipping</Link></li>
                <li><Link to="/returns">Returns</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
          </Col>

          <Col lg="4" md="12" sm="12">
            <div className="footer__contact">
              <h5 className="footer__link-title">Get in Touch</h5>
              <p><i className="ri-map-pin-line"></i> Sports Avenue, Kharghar, Maharashtra</p>
              <p><i className="ri-mail-line"></i> support@sportify.com</p>
              <p><i className="ri-phone-fill"></i> +91-9876543210</p>
            </div>
            <div className="footer__social">
              <Link to="https://www.facebook.com/" target="_blank"><i className="ri-facebook-circle-line"></i></Link>
              <Link to="https://www.instagram.com/" target="_blank"><i className="ri-instagram-line"></i></Link>
              <Link to="https://twitter.com/" target="_blank"><i className="ri-twitter-line"></i></Link>
              <Link to="https://www.linkedin.com/" target="_blank"><i className="ri-linkedin-line"></i></Link>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg="12" className="text-center">
            <p className="copyright">© {year}, Sportify. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
