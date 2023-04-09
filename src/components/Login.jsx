import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function Login() {
  return (
    <Container>
      <Row>
        <div className="con-text">
          <h2 className="page-title">Login Or Register</h2>
          <p>
            <a href="#">Home</a> | Login Or Register
          </p>
        </div>
      </Row>
      <Row>
        <Col>
          <div className="tb-login-form ">
            <h5 className="tb-title">Login</h5>
            <p>Hello, Welcome your to account</p>
            <div className="tb-social-login">
              <a className="tb-facebook-login" href="#">
                <FontAwesomeIcon icon={faFacebookF} /> Sign In With Facebook
              </a>
              <a className="tb-twitter-login res" href="#">
                <FontAwesomeIcon icon={faTwitter} /> Sign In With Twitter
              </a>
            </div>
            <form action="#">
              <p className="checkout-coupon top log a-an">
                <label className="l-contact">
                  Email Address
                  <em>*</em>
                </label>
                <input type="email" />
              </p>
              <p className="checkout-coupon top-down log a-an">
                <label className="l-contact">
                  Password
                  <em>*</em>
                </label>
                <input type="password" />
              </p>
              <div className="forgot-password1">
                <label className="inline2">
                  <input type="checkbox" name="rememberme7" />
                  Remember me! <em>*</em>
                </label>
                <a className="forgot-password" href="#">
                  Forgot Your password?
                </a>
              </div>
              <p className="login-submit5">
                <input className="button-primary" type="submit" value="login" />
              </p>
            </form>
          </div>
        </Col>
        <Col>
          <div className="tb-login-form res">
            <h5 className="tb-title">Create a new account</h5>
            <p>Hello, Welcome your to account</p>
            <form action="#">
              <p className="checkout-coupon top log a-an">
                <label className="l-contact">
                  Email Address
                  <em>*</em>
                </label>
                <input type="email" />
              </p>
              <p className="login-submit5">
                <input
                  value="SignUp"
                  className="button-primary"
                  type="submit"
                />
              </p>
            </form>
            <div className="tb-info-login ">
              <h5 className="tb-title4">SignUp today and you'll be able to:</h5>
              <ul>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "#ce9634" }}
                    icon={faCheckSquare}
                  />{" "}
                  Speed your way through the checkout.
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "#ce9634" }}
                    icon={faCheckSquare}
                  />{" "}
                  Track your orders easily.
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "#ce9634" }}
                    icon={faCheckSquare}
                  />{" "}
                  Keep a record of all your purchases.
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
