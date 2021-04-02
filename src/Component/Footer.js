import React from "react";
import { Container } from "react-bootstrap";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer__wrapper">
          <div className="footer__item">
            <div className="footer__Header">Get to know Us</div>
            <ul>
              <li className="footer__first">Careers</li>
              <li>Blog</li>
              <li>About</li>
              <li>Investor Relation</li>
              <li>Devices</li>
              <li>Tours</li>
            </ul>
          </div>
          <div className="footer__item">
            <div className="footer__Header">Make Money with Us</div>
            <ul>
              <li className="footer__first">Sell products on Us</li>
              <li>Sell on Business</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Product</li>
              <li>Self-Publish with us</li>
            </ul>
          </div>
          <div className="footer__item">
            <div className="footer__Header">Payment Products</div>
            <ul>
              <li>Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Currency Converter</li>
            </ul>
          </div>
          <div className="footer__item">
            <div className="footer__Header">Let Us Help You</div>
            <ul>
              <li>Us & COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Assistant</li>
              <li>Manage Your Content and Devices</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
