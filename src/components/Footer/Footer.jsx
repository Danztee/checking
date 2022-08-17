import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Android, Ios } from "../../assets";

import "./Footer.scss";

const Footer = () => {
  const pathname = useLocation().pathname;

  return (
    <>
      {pathname !== "/login" && pathname !== "/register" ? (
        <section className="footer w-full">
          <footer className="container-b">
            <section className="footer-top">
              <div className="footer-colum">
                <h3>SHOP</h3>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Categories</Link>
                  </li>
                  <li>
                    <Link to="/">Payment Plan</Link>
                  </li>
                  <li>
                    <Link to="/">My Account</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-colum">
                <h3>FOR SELLERS</h3>
                <ul>
                  <li>
                    <Link to="/">Seller Handbook</Link>
                  </li>
                  <li>
                    <Link to="/">Seller FAQs</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-colum">
                <h3>ABOUT US</h3>
                <ul>
                  {/* <li>
                  <Link to="/">Overview</Link>
                </li> */}
                  <li>
                    <Link to="/">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-colum">
                <h3>POLICIES & INFO</h3>
                <ul>
                  <li>
                    <Link to="/">terms & condition</Link>
                  </li>
                  <li>
                    <Link to="/">Policy for sellers</Link>
                  </li>
                  <li>
                    <Link to="/">Policy for Buyers</Link>
                  </li>
                  <li>
                    <Link to="/">Shipping & Refund Policies</Link>
                  </li>
                  <Link to="/">
                    <li>Whalesale Policy </li>
                  </Link>
                  <Link to="/">
                    <li>Privacy Policy</li>
                  </Link>
                </ul>
              </div>
              <div className="footer-colum">
                <h3>SAFE AND SECURE</h3>
                <ul>
                  <li>
                    <Link to="/">Testimonals</Link>
                  </li>
                  <li>
                    <Link to="/">Money Back</Link>
                  </li>
                  <li>
                    <Link to="/">Guarantee</Link>
                  </li>
                  <li>
                    <Link to="/">FAQs</Link>
                  </li>
                  {/* <li>
                  <Link to="/">Escrow.co</Link>
                </li>
                <li>
                  <Link to="/">NameBright.com</Link>
                </li> */}
                </ul>
              </div>
            </section>
            <section className="footer-down">
              <div className="social-icon flex items-center gap-2">
                <Link to="/">
                  <FaTwitter />
                </Link>
                <Link to="/">
                  <FaInstagram />
                </Link>
                <Link to="/">
                  <FaFacebook />
                </Link>
                <Link to="/">
                  <FaLinkedin />
                </Link>
              </div>
              <div className="subscribe">
                <h1>Subscribe to get latest stories</h1>
                <input type="text" placeholder="Your Email address" />
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <div className="app-down">
                <h1>Download Wicart</h1>
                <Link to="/" className="mb-3">
                  <img src={Android} alt="" />
                </Link>
                <Link to="/">
                  <img src={Ios} alt="" />
                </Link>
              </div>
            </section>
          </footer>
        </section>
      ) : null}
    </>
  );
};

export default Footer;
