import React from "react";
import * as ROUTES from "../constant/routes";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <section className="contact-img-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="con-text">
                <h2 className="page-title">Contact</h2>
                <p>
                  <Link to={ROUTES.DASHBOARD}>Home</Link> | Contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <Row>
          <Col>
            <form id="contact-form" method="post">
              <Row>
                <Col xs={12} lg={6}>
                  <div className="row">
                    <div className="all-contact">
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="di-na">
                          <label className="l-contact">
                            Name<em>*</em>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="di-na">
                          <label className="l-contact">
                            Email <em>*</em>
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            required=""
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <label className="l-contact">
                          Subject <em>*</em>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          required=""
                          name="subject"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <label className="l-contact con-color">
                    Content <em>*</em>
                  </label>
                  <textarea
                    className="form-control"
                    required=""
                    name="message"
                  ></textarea>
                </Col>
              </Row>
              <Row>
                <div className="last-cart-con">
                  <button className="wpcf7" type="submit">
                    Send Message
                  </button>
                </div>
              </Row>
            </form>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center m-lg-5">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                // width="1000"
                // height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
