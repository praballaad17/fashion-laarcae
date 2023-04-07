import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

export default function Cart() {
  return (
    <div>
      <section class="contact-img-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="con-text">
                <h2 class="page-title">shopping-Cart</h2>
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
            <div class="page-title">
              <h1>Shopping-Cart on Noraure</h1>
            </div>
            <div class="cart-form table-responsive">
              <table id="shopping-cart-table" class="data-table cart-table">
                <tr>
                  <th class="low1">Product</th>
                  <th class="low7">Quantity</th>
                  <th class="low7">Price</th>
                  <th class="low7">Total</th>
                </tr>
                <tr>
                  <td class="sop-cart an-shop-cart">
                    <a href="#">
                      <img
                        class="primary-image"
                        alt=""
                        src="img/product/3.jpg"
                      />
                    </a>
                    <a href="#">Vintage Lambskin Shoe</a>
                  </td>
                  <td class="sop-cart an-sh">
                    <div class="quantity ray">
                      <input
                        class="input-text qty text"
                        type="number"
                        title="Qty"
                        value="2"
                        min="0"
                        step="1"
                      />
                    </div>
                    <a class="remove" href="#">
                      <span>x</span>
                    </a>
                  </td>
                  <td class="sop-cart">
                    <div class="tb-product-price font-noraure-3">
                      <span class="amount">$180.00</span>
                    </div>
                  </td>
                  <td class="cen">
                    <span class="amount">$180.00</span>
                  </td>
                </tr>
                <tr>
                  <td class="sop-cart an-shop-cart">
                    <a href="#">
                      <img
                        class="primary-image"
                        alt=""
                        src="img/product/6.jpg"
                      />
                    </a>
                    <a href="#">Vintage Lambskin Shoe</a>
                  </td>
                  <td class="sop-cart an-sh">
                    <div class="quantity ray">
                      <input
                        class="input-text qty text"
                        type="number"
                        title="Qty"
                        value="2"
                        min="0"
                        step="1"
                      />
                    </div>
                    <a class="remove" href="#">
                      <span>x</span>
                    </a>
                  </td>
                  <td class="sop-cart">
                    <div class="tb-product-price font-noraure-3">
                      <span class="amount2 ana">$79.00 - </span>
                      <span class="amount2 ana">$100.00</span>
                    </div>
                  </td>
                  <td class="cen">
                    <span class="amount">$180.00</span>
                  </td>
                </tr>
              </table>
            </div>
            <div class="last-check1">
              <div class="yith-wcwl-share yit">
                <p class="checkout-coupon an-cop">
                  <input type="submit" value="Update Cart" />
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div class="top-shopping4">
                        <p class="shop9">Shipping Local Pickup (Free)</p>
                        <p class="down-shop">
                          Enter your destination to get a shipping estimate
                        </p>
                      </div>
                      <form action="#" class="woocommerce-shipping-calculator">
                        <p class="form-row form-row-wide">
                          <label>
                            Country
                            <span class="required">*</span>
                          </label>
                          <select class="email s-email s-wid">
                            <option>Bangladesh</option>
                            <option>Albania</option>
                            <option>Åland Islands</option>
                            <option>Afghanistan</option>
                            <option>Belgium</option>
                          </select>
                        </p>
                        <p class="form-row form-row-wide">
                          <label>
                            District
                            <span class="required">*</span>
                          </label>
                          <select class="email s-email s-wid">
                            <option>mymensingh</option>
                            <option>dhaka</option>
                            <option>khulna</option>
                            <option>kumillah</option>
                            <option>chadpur</option>
                          </select>
                        </p>
                        <p class="form-row form-row-wide">
                          <label>
                            Post Code
                            <span class="required">*</span>
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            name="name"
                            required=""
                            placeholder="1234567"
                          />
                        </p>
                        <p class="checkout-coupon two">
                          <input type="submit" value="Get Quotes" />
                        </p>
                      </form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div class="2nd-copun-code">
                        <form action="#">
                          <p class="form-row form-row-wide">
                            <label>
                              Coupon:
                              <span class="required">*</span>
                            </label>
                            <input
                              class="form-control again"
                              type="text"
                              name="name"
                              required=""
                              placeholder="Coupon code"
                            />
                          </p>
                          <p class="checkout-coupon full">
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
          <Col>
            <div class="sub-total">
              <table>
                <tbody>
                  <tr class="cart-subtotal">
                    <th>Subtotal:</th>
                    <td>
                      <span class="amount">$297.00</span>
                    </td>
                  </tr>
                  <tr class="order-total">
                    <th>Total:</th>
                    <td>
                      <strong>
                        <span class="amount">$297.00</span>
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="wc-proceed-to-checkout">
              <p class="return-to-shop">
                <a class="button wc-backward" href="#">
                  Continue Shopping
                </a>
              </p>
              <a class="wc-forward wc-forward-cart" href="#">
                Confirm Order
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
