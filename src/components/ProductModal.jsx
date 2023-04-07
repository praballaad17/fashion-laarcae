import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProductModal({ onClose, open, product }) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={open} onHide={onClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{product?.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col>
              <img src={product.img}></img>
            </Col>
            <Col>
              <div className="tb-product-wrap-price-rating">
                <div className="tb-product-price font-noraure-3">
                  <span className="amount2 ana">${product.price}</span>
                </div>
              </div>
              <p>Modal body text goes here.</p>
              <div class="last-cart l-mrgn ns">
                <a class="las4" href="#">
                  Add To Cart
                </a>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}
