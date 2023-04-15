import React, { useState } from "react";
import { useUser } from "../context/userContext";
import * as ROUTES from "../constant/routes";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartProducts, total, changeQuantity } = useUser();

  console.log(cartProducts);

  let tenInt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <section className="contact-img-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="con-text">
                <h2 className="page-title">shopping-Cart</h2>
                <p>
                  <a href="#">Home</a> | shopping-Cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <Row>
          <Col>
            <div className="page-title">
              <h1>Shopping-Cart on Noraure</h1>
            </div>
            <div className="cart-form table-responsive">
              <table id="shopping-cart-table" className="data-table cart-table">
                <tr>
                  <th className="low1">Product</th>
                  <th className="low7">Quantity</th>
                  <th className="low7">Price</th>
                  <th className="low7">Total</th>
                </tr>
                {cartProducts && cartProducts.length ? (
                  cartProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="sop-cart an-shop-cart">
                        <a href="#">
                          <img
                            className="primary-image"
                            alt=""
                            src={product.product_images_1}
                          />
                        </a>
                        <a href="#">{product.title.rendered}</a>
                      </td>
                      <td className="sop-cart an-sh">
                        <Form.Select
                          onChange={(e) =>
                            changeQuantity(product.id, e.target.value)
                          }
                          aria-label="Default select example"
                        >
                          {tenInt.map((n) => (
                            <option selected={product.quantity === n} value={n}>
                              {n}
                            </option>
                          ))}
                          <option selected={product.quantity === 0} value="0">
                            0 (Delete)
                          </option>
                        </Form.Select>
                      </td>
                      <td className="sop-cart">
                        <div className="tb-product-price font-noraure-3">
                          <span className="amount">${product.price}</span>
                        </div>
                      </td>
                      <td className="cen">
                        <span className="amount">
                          ${product.price * product.quantity}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="text-center fs-4 fw-bold">
                    <td colSpan="4">No Products In the Cart</td>
                  </tr>
                )}
              </table>
            </div>
            <div className="last-check1">
              <div className="yith-wcwl-share yit">
                <p className="checkout-coupon an-cop">
                  <input type="submit" value="Update Cart" />
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={7} xs={12}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={4}>
                  <Nav
                    // variant="pills"
                    className="etabs flex-sm-column flex-xs-row"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        Estimate Shipping & Taxe
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Use Coupon Code</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="top-shopping4">
                        <p className="shop9">Shipping Local Pickup (Free)</p>
                        <p className="down-shop">
                          Enter your destination to get a shipping estimate
                        </p>
                      </div>
                      <form
                        action="#"
                        className="woocommerce-shipping-calculator"
                      >
                        <p className="form-row form-row-wide">
                          <label>
                            Country
                            <span className="required">*</span>
                          </label>
                          <select className="email s-email s-wid">
                            <option>Bangladesh</option>
                            <option>Albania</option>
                            <option>Åland Islands</option>
                            <option>Afghanistan</option>
                            <option>Belgium</option>
                          </select>
                        </p>
                        <p className="form-row form-row-wide">
                          <label>
                            District
                            <span className="required">*</span>
                          </label>
                          <select className="email s-email s-wid">
                            <option>mymensingh</option>
                            <option>dhaka</option>
                            <option>khulna</option>
                            <option>kumillah</option>
                            <option>chadpur</option>
                          </select>
                        </p>
                        <p className="form-row form-row-wide">
                          <label>
                            Post Code
                            <span className="required">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            required=""
                            placeholder="1234567"
                          />
                        </p>
                        <p className="checkout-coupon two">
                          <input type="submit" value="Get Quotes" />
                        </p>
                      </form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="2nd-copun-code">
                        <form action="#">
                          <p className="form-row form-row-wide">
                            <label>
                              Coupon:
                              <span className="required">*</span>
                            </label>
                            <input
                              className="form-control again"
                              type="text"
                              name="name"
                              required=""
                              placeholder="Coupon code"
                            />
                          </p>
                          <p className="checkout-coupon full">
                            <input type="submit" value="Apply Coupon" />
                          </p>
                        </form>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          <Col lg={5} xs={12}>
            <div className="sub-total">
              <table>
                <tbody>
                  <tr className="cart-subtotal">
                    <th>Subtotal:</th>
                    <td>
                      <span className="amount">${total}</span>
                    </td>
                  </tr>
                  <tr className="order-total">
                    <th>Total:</th>
                    <td>
                      <strong>
                        <span className="amount">${total}</span>
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="wc-proceed-to-checkout">
              <p className="return-to-shop">
                <Link className="button wc-backward" to={ROUTES.DASHBOARD}>
                  Continue Shopping
                </Link>
              </p>
              <Link className="wc-forward wc-forward-cart" to={ROUTES.CHECKOUT}>
                Confirm Order
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
