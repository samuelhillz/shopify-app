import React from 'react'
import './Footer.css'
import {
  FaCcMastercard,
  FaFacebookF,
  FaTwitter,
  FaCcPaypal,
  FaCcVisa,
  FaCreditCard,
  FaSquareInstagram,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-card">
          <h1>
            Sho<span>p</span>ify
          </h1>
          <div className="sub-footer">
            Take your fashion to the top notch and shop with us
          </div>
          <div>
            <FaFacebookF className="contact-icons" size={19} />
            <FaTwitter className="contact-icons" size={19} />
            <FaYoutube className="contact-icons" size={19} />
            <FaInstagram className="contact-icons" size={19} />
          </div>
        </div>
        <div className="footer-card">
          <h3>Locate Us</h3>
          <p>Miskolc, Arany Janos utca</p>
          <p>Mobile: +36 20 2804925</p>
          <p>Phone: +36 20 2804925</p>
          <p>E-mail: hills_id@yahoo.com</p>
        </div>
        <div className="footer-card">
          <h3>Profile</h3>
          <p>My account</p>
          <p>Checkout</p>
          <p>Order tracking</p>
          <p>Help and support</p>
        </div>
        <div className="footer-card">
          <h3>Payment Method</h3>

          <div>
            <FaCcVisa className="payment_logo" size={19} />
            <FaCcPaypal className="payment_logo" size={19} />
            <FaCreditCard className="payment_logo" size={19} />
            <FaCcMastercard className="payment_logo" size={19} />
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          background: " rgb(25, 4, 58)",
          color: "white",
        }}
      >
        Copyright © 2023 Samuel
      </div>
    </>
  );
}

export default Footer