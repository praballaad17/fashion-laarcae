import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useUser } from "../context/userContext";
import ProductModal from "./ProductModal";
import { Link } from "react-router-dom";
import * as ROUTES from "../constant/routes";

export default function WishList() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState();
  const { wishProducts, addToCart, removeProductFromWishList } = useUser();

  console.log(wishProducts);

  return (
    <>
      <section className="contact-img-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="con-text">
                <h2 className="page-title">Wishlist</h2>
                <p>
                  <Link to={ROUTES.DASHBOARD}>Home</Link> | Wishlist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <div className="shopping-cart-area nr-wish-area">
          <Container>
            <Row>
              <div className="col-lg-12 col-12">
                <div className="s-cart-all">
                  <div className="page-title">
                    <h1>My wishlist on Noraure</h1>
                  </div>
                  <div className="cart-form table-responsive">
                    <table
                      id="shopping-cart-table"
                      className="data-table cart-table"
                    >
                      <tr>
                        <th className="low1"></th>
                        <th>Images</th>
                        <th className="low2">Product Name</th>
                        <th>Unit Price</th>
                        <th>Stock Status</th>
                        <th className="low5"></th>
                      </tr>
                      {wishProducts.map((item) => (
                        <tr key={item.id}>
                          <td className="sop-icon1">
                            <a
                              onClick={() => removeProductFromWishList(item.id)}
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </a>
                          </td>
                          <td className="sop-cart">
                            <a href="#">
                              <img
                                className="primary-image"
                                alt=""
                                src={item.product_images_1}
                              />
                            </a>
                          </td>
                          <td className="sop-cart an-sh">
                            <div className="tb-beg">
                              <a href="#">{item.title.rendered}</a>
                            </div>
                            <div className="last-cart l-mrgn">
                              <a
                                className="las4"
                                onClick={() => {
                                  setOpen(true);
                                  setProduct(item);
                                }}
                              >
                                Quick View
                              </a>
                            </div>
                          </td>
                          <td className="sop-cart">
                            <div className="tb-product-price font-noraure-3">
                              <span className="amount">${item.price}</span>
                            </div>
                          </td>
                          <td className="cen">
                            <span className="wishlist-in-stock">In Stock</span>
                          </td>
                          <td className="sop-cart">
                            <div className="last-cart l-mrgn wish">
                              <a
                                className="las4"
                                onClick={() => addToCart(item)}
                              >
                                {" "}
                                Add to Cart
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}

                      <tfoot>
                        <tr>
                          <td colspan="6">
                            <div className="yith-wcwl-share">
                              <div className="as">
                                <h4 className="yith-wcwl-share-title">
                                  Share on:
                                </h4>
                              </div>
                              <ul>
                                <li>
                                  <a href="#">
                                    <img
                                      src="img/icon-img/facebook.png"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="img/icon-img/twitter.png"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="img/icon-img/pinterest.jpg"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="img/icon-img/googleplus.jpg"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/icon-img/email.jpg" alt="" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>

        {open && (
          <ProductModal
            open={open}
            onClose={() => setOpen(false)}
            product={product}
          />
        )}
      </Container>
    </>
  );
}
