import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Nav from "react-bootstrap/Nav";
import { useUser } from "../context/userContext";
import $ from "jquery";

export default function Checkout() {
  const [changeShippingAddress, setAddressChange] = useState(false);
  const { cartProducts, total } = useUser();

  const handleShippingAddressChange = () => {
    setAddressChange((prev) => !prev);
  };

  useEffect(() => {
    var checked = $(".sin-payment input:checked");
    if (checked) {
      $(checked).siblings(".payment_box").slideDown(900);
    }
    $(".sin-payment input").on("change", function () {
      $(".payment_box").slideUp(900);
      $(this).siblings(".payment_box").slideToggle(900);
    });
  }, []);

  useEffect(() => {
    $("#showcoupon").on("click", function () {
      $("#checkout_coupon").slideToggle(900);
    });
  }, []);

  return (
    <>
      <section className="contact-img-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="col-md-12 text-center">
                <div className="con-text">
                  <h2 className="page-title">Checkout</h2>
                  <p>
                    <a href="#">Home</a> | Checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container className="checkout-area">
        <Row>
          <div className="coupon-accordion res">
            <h3>
              <FontAwesomeIcon
                style={{ color: "rgb(30, 133, 190)" }}
                icon={faFolder}
              />{" "}
              Have a coupon?{" "}
              <span id="showcoupon">Click here to enter your code</span>
            </h3>
            <div id="checkout_coupon" className="coupon-checkout-content tnm">
              <div className="coupon-info">
                <form action="#">
                  <p className="checkout-coupon res">
                    <input type="text" placeholder="Coupon code" />
                    <input type="submit" value="Apply Coupon" />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <Col lg={7} xs={12} className="text-sin">
            <Tabs
              defaultActiveKey="Address"
              id="uncontrolled-tab-example"
              // className="mb-3"
            >
              <Tab eventKey="Address" title="Address">
                <form action="#">
                  <div className="checkbox-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="checkbox9">SHIPPING ADDRESS DETAILS</h3>
                      </div>
                      <div className="col-lg-6">
                        <div className="di-na bs">
                          <label className="l-contact">
                            First Name
                            <em>*</em>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="di-na bs">
                          <label className="l-contact">
                            Last Name
                            <em>*</em>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="di-na bs">
                          <label className="l-contact">
                            Company Name
                            <em>*</em>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="di-na bs">
                          <label className="l-contact">
                            Email Address
                            <em>*</em>
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            required=""
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="di-na bs">
                          <label className="l-contact">
                            Phone
                            <em>*</em>
                          </label>
                          <input
                            className="form-control"
                            type="tel"
                            required=""
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="country-select">
                          <label className="l-contact">
                            Country
                            <em>*</em>
                          </label>
                          <select className="email s-email s-wid">
                            <option>Bangladesh</option>
                            <option>Albania</option>
                            <option>Åland Islands</option>
                            <option>Afghanistan</option>
                            <option>Belgium</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <label className="l-contact">
                          Address
                          <em>*</em>
                        </label>
                        <div className="di-na bs">
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            name="name"
                            placeholder="Street address"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="di-na bs tana">
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            name="name"
                            placeholder="Apartment, suite, unit etc. (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <label className="l-contact">
                          Town / City
                          <em>*</em>
                        </label>
                        <div className="di-na bs">
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="country-select">
                          <label className="l-contact">
                            District
                            <em>*</em>
                          </label>
                          <select className="email s-email s-wid">
                            <option>mymensingh</option>
                            <option>dhaka</option>
                            <option>khulna</option>
                            <option>kumillah</option>
                            <option>chadpur</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="di-na bs">
                          <label className="l-contact">
                            Postcode / ZIP
                            <em>*</em>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            name="name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="checkbox9">SHIP TO A DIFFERENT ADDRESS?</h3>
                    <div id="showcoupon2">
                      <input
                        className="input-checkbox"
                        type="checkbox"
                        checked={changeShippingAddress}
                        onChange={handleShippingAddressChange}
                      />
                    </div>
                  </div>
                  {changeShippingAddress && (
                    <div className="col-md-12">
                      <div
                        id="checkout_coupon2"
                        className="coupon-checkout-content2"
                      >
                        <div className="checkbox-form">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="di-na bs">
                                <label className="l-contact">
                                  First Name
                                  <em>*</em>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  required=""
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="di-na bs">
                                <label className="l-contact">
                                  Last Name
                                  <em>*</em>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  required=""
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="di-na bs">
                                <label className="l-contact">
                                  Company Name
                                  <em>*</em>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  required=""
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="di-na bs">
                                <label className="l-contact">
                                  Email Address
                                  <em>*</em>
                                </label>
                                <input
                                  className="form-control"
                                  type="email"
                                  required=""
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="di-na bs">
                                <label className="l-contact">
                                  Phone
                                  <em>*</em>
                                </label>
                                <input
                                  className="form-control"
                                  type="tel"
                                  required=""
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="country-select">
                                <label className="l-contact">
                                  Country
                                  <em>*</em>
                                </label>
                                <select className="email s-email s-wid">
                                  <option>Bangladesh</option>
                                  <option>Albania</option>
                                  <option>Åland Islands</option>
                                  <option>Afghanistan</option>
                                  <option>Belgium</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <label className="l-contact">
                                Address
                                <em>*</em>
                              </label>
                              <div className="di-na bs">
                                <input
                                  className="form-control"
                                  type="text"
                                  required=""
                                  name="name"
                                  placeholder="Street address"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="di-na bs tana">
                                <input
                                  className="form-control"
                                  type="text"
                                  required=""
                                  name="name"
                                  placeholder="Apartment, suite, unit etc. (optional)"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <label className="l-contact">
                                Town / City
                                <em>*</em>
                              </label>
                              <div className="di-na bs">
                                <input
                                  className="form-control"
                                  type="text"
                                  required=""
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="country-select">
                                <label className="l-contact">
                                  District
                                  <em>*</em>
                                </label>
                                <select className="email s-email s-wid">
                                  <option>mymensingh</option>
                                  <option>dhaka</option>
                                  <option>khulna</option>
                                  <option>kumillah</option>
                                  <option>chadpur</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="di-na bs">
                                <label className="l-contact">
                                  Postcode / ZIP
                                  <em>*</em>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  required=""
                                  name="name"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="col-md-12">
                    <div className="di-na bs">
                      <label className="l-contact">Order Notes</label>
                      <textarea
                        className="input-text "
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        name="order_comments"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <p className="checkout-coupon">
                      <input type="submit" value="CONTINUE" />
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Payment" title="Payment">
                <div className="top-check-text">
                  <div className="check-down">
                    <h3 className="checkbox9">INFORMATION</h3>
                    <span>
                      <a className="ro-edit-customer-info" href="#">
                        Edit
                      </a>
                    </span>
                  </div>
                  <div className="ro-content2">
                    <div className="ro-info2">
                      <p>
                        <span>Email Address: </span>
                        example903@yahoo.com
                      </p>
                    </div>
                    <div className="ro-info2">
                      <p>
                        <span>Country: </span>
                        BD
                      </p>
                    </div>
                  </div>
                </div>
                <form action="#" className="all-payment">
                  <div className="all-paymet-border">
                    <div className="payment-method">
                      <div className="pay-top sin-payment">
                        <input
                          id="payment_method_1"
                          className="input-radio"
                          type="radio"
                          value="cheque"
                          checked="checked"
                          name="payment_method"
                        />
                        <label for="payment_method_1">
                          {" "}
                          Direct Bank Transfer{" "}
                        </label>
                        <div className="payment_box payment_method_bacs">
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order won’t be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                      </div>
                      <div className="pay-top sin-payment">
                        <input
                          id="payment_method_2"
                          className="input-radio"
                          type="radio"
                          value="cheque"
                          name="payment_method"
                        />
                        <label for="payment_method_2"> Cheque Payment </label>
                        <div className="payment_box payment_method_bacs">
                          <p>
                            Please send your cheque to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                      </div>
                      <div className="pay-top sin-payment">
                        <input
                          id="payment_method_3"
                          className="input-radio"
                          type="radio"
                          value="cheque"
                          name="payment_method"
                        />
                        <label for="payment_method_3">
                          PayPal <img alt="" src="img/icon-img/44.png" />
                          <a href="#">What is PayPal?</a>
                        </label>
                        <div className="payment_box payment_method_bacs">
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order won’t be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="form-row place-order">
                      <input
                        className="button alt"
                        type="submit"
                        value="Place order"
                      />
                    </div>
                  </div>
                </form>
              </Tab>
              <Tab eventKey="Complete" title="Complete">
                <div className="last-check">
                  <h3 className="checkbox9">complete</h3>
                </div>
              </Tab>
            </Tabs>
          </Col>
          <Col lg={5} xs={12}>
            <div className="ro-checkout-summary">
              <div className="ro-title">
                <h3 className="checkbox9">ORDER SUMMARY</h3>
              </div>
              <div className="ro-body">
                {cartProducts && cartProducts.length ? (
                  cartProducts.map((product) => (
                    <Row className="m-2">
                      <Col xs={4}>
                        <div className="w-70">
                          <a>
                            <img src={product.img} alt="" />
                          </a>
                        </div>
                      </Col>
                      <Col xs={8}>
                        <Row>
                          <div className="tb-beg">
                            <a href="#">{product.name}</a>
                          </div>
                        </Row>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="ro-price">
                            <span className="amount">${product.price}</span>
                          </div>
                          <div className="ro-quantity">
                            <strong className="product-quantity">
                              × {product.quantity}
                            </strong>
                          </div>
                          <div className="product-total">
                            <span className="amount">
                              ${product.price * product.quantity}
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className="ro-footer">
                <div>
                  <p>
                    Subtotal
                    <span>
                      <span className="amount">${total}</span>
                    </span>
                  </p>
                  <div className="ro-divide"></div>
                </div>
                <div className="shipping">
                  <p> Shipping </p>
                  <div className="ro-shipping-method">
                    <p>Shipping Local Pickup (Free)</p>
                  </div>
                  <div className="clearfix"></div>
                  <div className="ro-divide"></div>
                </div>
                <div className="order-total">
                  <p>
                    Total
                    <span>
                      <strong>
                        <span className="amount">${total}</span>
                      </strong>
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    Payment Due
                    <span>
                      <strong>
                        <span className="amount">${total}</span>
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
