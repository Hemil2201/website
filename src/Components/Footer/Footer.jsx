import React from "react";
import mail from "../Assets/email.png";
import phone from "../Assets/phone.png";
import linkedin from "../Assets/linkedin.png";
import Sdata from "../Sdata";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="sb__footer section__padding">
          <div className="sb__footer_links">
            <div className="sb__footer_links_div">
              <h4>Services</h4>
              {Sdata.map((val, index) => (
                <a key={index} href={val.direction}>
                  {val.title}
                </a>
              ))}
            </div>
            <div className="sb__footer_links_div">
              <h4>Help & Support</h4>
              <a href="/faq">FAQ</a>
              <a href="/">Contact Us</a>
            </div>
            <div className="sb__footer_links_div">
              <h4>Legal</h4>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms & Conditions</a>
            </div>
            <div className="sb__footer_socialmedia">
              <h4>Social Media</h4>
              <p>
                <img src={mail} alt="Email" />
                <span>example@email.com</span>
              </p>
              <p>
                <img src={linkedin} alt="LinkedIn" />
                <span>LinkedIn</span>
              </p>
              <p>
                <img src={phone} alt="Phone" />
                <span>+123-456-7890</span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb__footer_below">
          <div className="sb__footer_copyright">
            <p>
              &copy; {new Date().getFullYear()} CodeInn. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
