import React from 'react'
import './Contact.css';
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




const Contact = () => {
  return (
    <section id="contact">
      <div className="contact">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-wrap">
        <div className="contact-body">
          <h1>We are here for your help! To give you the best fashion</h1>
        </div>
        <div>
          <p className="contact-line">
           At Shopify, we are dedicated to helping you to stay fly. Our expert personnels create the best styles so that you get the latest fashion available.
          </p>
        </div>
        <div className="contact_info">
          <div className="contact-box">
            <div className="contact-info-header">
              <h3>Miskolc, Hungary</h3>
              <div className="hr"></div>
            </div>
            <div className="contact-details">
              <p>3529 Arany Janos utca. </p>
              <p>Miskolc, Hungary. </p>
            </div>
          </div>
          <div className="contact-box opening-hours">
            <div className="contact-info-header">
              <h3>Opening Hours</h3>
              <div className="hr"></div>
            </div>
            <div className="contact-details">
              <p>Mon to Fri: 7:30am - 1:00am </p>
              <p>Mon to Fri: 7:30am - 1:00am </p>
            </div>
          </div>
          <div className="contact-box contact-information">
            <div className="contact-info-header">
              <h3>Information</h3>
              <div className="hr"></div>
            </div>
            <div className="contact-details">
              <p> +36 202804925 </p>
              <p>hills_id@yahoo.com </p>
            </div>
          </div>
          <div className="contact-box follow-us">
            <div className="contact-info-header">
              <h3>Follow Us On</h3>
              <div className="hr"></div>
            </div>
            <div className="contact-details">
              <div>
                <FaFacebookF className="contact-icons" size={19} />
                <FaTwitter className="contact-icons" size={19} />
                <FaYoutube className="contact-icons" size={19} />
                <FaInstagram className="contact-icons" size={19} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form formone">
        <h1>Leave us some info</h1>

        <form>
          <div className=" text">
            <input
              className="formdetails"
              type="text "
              placeholder="Full Name *"
              required
            />
          </div>
          <div className="email">
            <input
              className="formdetails"
              type="email"
              placeholder="Email Address*"
            />
          </div>
          <textarea
            className="formdetails"
            name="textarea"
            id=""
            cols="30"
            rows="10"
          >
            Comment...
          </textarea>
          <div className="contact-button">
            <button>Submit Now</button>
          </div>
        </form>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.4301934905734!2d20.78995820000001!3d48.101936499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47409ff975899fff%3A0xfc22d1a643fa79be!2sMiskolc%2C%20Arany%20J%C3%A1nos%20u.%2025%2C%203530!5e0!3m2!1sen!2shu!4v1686395989588!5m2!1sen!2shu"
          width="1300"
          height="550"
          style={{ border: 0 }}
          //   allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact