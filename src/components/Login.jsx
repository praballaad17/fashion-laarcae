import React, { useState } from "react";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import jwtDecode from "jwt-decode";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useToast } from "../context/toastContext";

export default function Login() {
  const [registerUser, setRegisterUser] = useState();
  const [loginUser, setLoginUser] = useState();
  const { addToast } = useToast();

  const apiEndpoint = `https://server.fashion.laarcae.com/wp-json`;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      var form = new FormData();
      form.append("username", registerUser.username);
      form.append("firstname", registerUser.firstname);
      form.append("lastname", registerUser.lastname);
      form.append("email", registerUser.email);
      form.append("password", registerUser.password);

      const res = await axios.post(`${apiEndpoint}/auth/v1/create-user`, form);
      addToast(`${res.data.data.display_name}'s is created! Please Login`);
    } catch (error) {
      console.log(error);
      addToast("Cannot Create Account, User Exists", true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${apiEndpoint}/jwt-auth/v1/token`, {
        username: loginUser.username,
        password: loginUser.password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("displayName", res.data.user_display_name);
      localStorage.setItem("email", res.data.user_email);
      localStorage.setItem("username", res.data.user_nicename);
      window.location = "/";
    } catch (error) {
      console.log(error);
      addToast(`${error.response.data.code}`, true);
    }
  };

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
                  Username
                  <em>*</em>
                </label>
                <input
                  onChange={(e) =>
                    setLoginUser({
                      ...loginUser,
                      username: e.target.value,
                    })
                  }
                  type="email"
                />
              </p>
              <p className="checkout-coupon top-down log a-an">
                <label className="l-contact">
                  Password
                  <em>*</em>
                </label>
                <input
                  onChange={(e) =>
                    setLoginUser({
                      ...loginUser,
                      password: e.target.value,
                    })
                  }
                  type="password"
                />
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
                <input
                  className="button-primary"
                  value="login"
                  onClick={(e) => handleLogin(e)}
                />
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
                  User Name
                  <em>*</em>
                </label>
                <input
                  onChange={(e) =>
                    setRegisterUser({
                      ...registerUser,
                      username: e.target.value,
                    })
                  }
                  type="text"
                />
              </p>
              <p className="checkout-coupon top log a-an">
                <label className="l-contact">
                  Email Address
                  <em>*</em>
                </label>
                <input
                  onChange={(e) =>
                    setRegisterUser({ ...registerUser, email: e.target.value })
                  }
                  type="email"
                />
              </p>
              <p className="checkout-coupon top log a-an">
                <Row>
                  <Col>
                    <label className="l-contact">
                      First Name
                      <em>*</em>
                    </label>
                  </Col>
                  <Col>
                    <label className="l-contact">
                      Last Name
                      <em>*</em>
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input
                      onChange={(e) =>
                        setRegisterUser({
                          ...registerUser,
                          firstname: e.target.value,
                        })
                      }
                      className="w-100"
                      type="text"
                    />
                  </Col>
                  <Col>
                    <input
                      onChange={(e) =>
                        setRegisterUser({
                          ...registerUser,
                          lastname: e.target.value,
                        })
                      }
                      className="w-100"
                      type="text"
                    />
                  </Col>
                </Row>
              </p>
              <p className="checkout-coupon top-down log a-an">
                <label className="l-contact">
                  Password
                  <em>*</em>
                </label>
                <input
                  onChange={(e) =>
                    setRegisterUser({
                      ...registerUser,
                      password: e.target.value,
                    })
                  }
                  type="password"
                />
              </p>
              <p className="login-submit5">
                <input
                  value="SignUp"
                  className="button-primary"
                  onClick={(e) => handleRegister(e)}
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
