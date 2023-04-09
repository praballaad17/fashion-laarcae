import React from "react";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function Contact() {
  const gmap_canvas = {
    overflow: "faHandMiddleFinger",
    background: "none",
    height: "370px",
    width: "1000px",
  };

  const mapouter = {
    position: "relative",
    textAlign: "right",
    height: "370px",
    width: "1000px",
  };
  return (
    <Container>
      <Row>
        <div className="con-text">
          <h2 className="page-title">Contact</h2>
          <p>
            <a href="#">Home</a> | Contact
          </p>
        </div>
      </Row>
      <Row>
        <Col>
          <form id="contact-form" method="post">
            <Row>
              <Col>
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
              <Col>
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
      <Row className="d-flex justify-content-center m-5">
        <div style={mapouter}>
          <div style={gmap_canvas}>
            <iframe
              width="1000"
              height="370"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://2yu.co">2yu</a>
            <br />
            <a href="https://embedgooglemap.2yu.co">html embed google map</a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
