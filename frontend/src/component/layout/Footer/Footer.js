import React from "react";
import {BsFillTelephoneFill} from "react-icons/bs";
import {AiFillHome,AiFillLinkedin,AiFillFacebook,AiOutlineInstagram} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h3>Contact Us</h3>
            <ul class="menu-list">
                <li><AiFillHome/><spam>: Near Chandani Chauk</spam></li>
                <li><AiFillHome/><spam>: Mohania(Kaimur),821109</spam></li>
                <li><BsFillTelephoneFill/><spam>: 9523527143</spam></li>
                <li><MdEmail/><spam>: pandeygauta789@gmail.com</spam></li>
            </ul>
      </div>

      <div className="midFooter">
        <h1>Raj Book Shop</h1>
        <p>If you don’t like to read, you haven’t found the right book.</p>

        <p>Copyrights 2022 &copy; Gautam Kumar Pandey</p>
      </div>

      <div className="rightFooter">
        <h3>Follow Us</h3>
            <ul class="menu-list">
                    <li><a href="https://www.instagram.com/"><AiOutlineInstagram/>: Instagram</a></li>
                    <li><a href="https://linkedin.com/feed/"><AiFillLinkedin/>: Linkedin</a></li>
                    <li><a href="https://www.facebook.com/"><AiFillFacebook/>: Facebook</a></li>
            </ul>
      </div>
    </footer>
  );
};

export default Footer;
