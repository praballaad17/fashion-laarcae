import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constant/routes";

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="first-footer rspn">
                <h3 className="wg-title">Contact Us</h3>
                <div className="textwidget">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          NORAURE London Oxford Street 012 United Kingdom.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope"></i>
                        <span>
                          emailnoraure@gmail.com emailsupport@gmail.com
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i>
                        <span>
                          (+92) 3456 7890
                          <br />
                          (+92) 1234 5678
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-12">
              <div className="first-footer rspn">
                <h3 className="wg-title">Information</h3>
                <div className="textwidget">
                  <ul className="f-none">
                    <li>
                      <a href="#">My account</a>
                    </li>
                    <li>
                      <a href="#">Order history</a>
                    </li>
                    <li>
                      <a href="#">Wish List</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Site Map</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-12">
              <div className="first-footer rspn">
                <h3 className="wg-title">Our Offers</h3>
                <div className="textwidget">
                  <ul className="f-none">
                    <li>
                      <a href="#">New collection</a>
                    </li>
                    <li>
                      <a href="#">Best sellers</a>
                    </li>
                    <li>
                      <a href="#">Manufacturers</a>
                    </li>
                    <li>
                      <a href="#">New products</a>
                    </li>
                    <li>
                      <a href="#">Suppliers</a>
                    </li>
                    <li>
                      <a href="#">Delivery & returns</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="first-footer res-mrg-top-md rspn">
                <h3 className="wg-title">Our Policy</h3>
                <div className="textwidget">
                  <ul className="f-none">
                    <li>
                      <a href="#">Help & Contact</a>
                    </li>
                    <li>
                      <a href="#">Shipping & taxes</a>
                    </li>
                    <li>
                      <a href="#">Returns policy</a>
                    </li>
                    <li>
                      <a href="#">Careens</a>
                    </li>
                    <li>
                      <a href="#">Affiliates</a>
                    </li>
                    <li>
                      <a href="#">Legal Notice</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="last-footer res-mrg-top-md">
                <h3 className="wg-title">Get Newsletters</h3>
                <div className="newsletter">
                  <form action="#">
                    <p>
                      <input
                        className="newsletter-email"
                        type="email"
                        placeholder="Email"
                        required=""
                      />
                    </p>
                    <p>
                      <input
                        className="newsletter-submit"
                        type="submit"
                        value="Subscribe"
                      />
                    </p>
                  </form>
                </div>
                <div className="widget_text">
                  <h3 className="wg-title">Connect Us</h3>
                  <div className="textwid">
                    <ul className="socials">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-rss"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="footer-address">
                <address>
                  Copyright ©<Link to={ROUTES.DASHBOARD}>Fashion La'Arcae</Link>
                  All Rights Reserved
                </address>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="foot-icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src="img/icon-img/payment-1.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon-img/payment-2.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon-img/payment-3.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon-img/payment-4.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
