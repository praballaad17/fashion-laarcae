import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductModal from "../ProductModal";
import { useUser } from "../../context/userContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faRetweet } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useToast } from "../../context/toastContext";
export default function Shop() {
  const [open, setOpen] = useState(false);
  const [openFilter, setFiter] = useState(false);
  const [product, setProduct] = useState();
  const { addToCart, addToWishList, getProducts, products } = useUser();
  const { addToast } = useToast();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <Button
            className="m-2"
            onClick={() => setFiter(!openFilter)}
            variant="outline-info"
          >
            {!openFilter ? "Show Filters" : "Hide Filters"}
          </Button>
          {openFilter ? (
            <div className="all-shop-sidebar">
              <div className="top-shop-sidebar">
                <h3 className="wg-title">SHOP BY</h3>
              </div>
              <div className="shop-one">
                <h3 className="wg-title2">Categories</h3>
                <ul className="product-categories">
                  <li className="cat-item">
                    <a href="#">Accessories</a>
                    <span className="count">(10)</span>
                  </li>
                  <li className="cat-item">
                    <a href="#">Jewelry</a>
                    <span className="count">(8)</span>
                  </li>
                  <li className="cat-item current-cat">
                    <a href="#">Men</a>
                    <span className="count">(5)</span>
                  </li>
                  <li className="cat-item">
                    <a href="#">Watches</a>
                    <span className="count">(6)</span>
                  </li>
                  <li className="cat-item">
                    <a href="#">Women</a>
                    <span className="count">(10)</span>
                  </li>
                </ul>
              </div>
              <div className="shop-one">
                <h3 className="wg-title2">Our Brand</h3>
                <ul className="product-categories">
                  <li className="cat-item">
                    <a href="#">Nike</a>
                    <span className="count">(1)</span>
                  </li>
                  <li className="cat-item">
                    <a href="#">Religion</a>
                    <span className="count">(1)</span>
                  </li>
                  <li className="cat-item-10">
                    <a href="#">Diesel</a>
                    <span className="count">(1)</span>
                  </li>
                  <li className="cat-item">
                    <a href="#">Monki</a>
                    <span className="count">(1)</span>
                  </li>
                </ul>
              </div>
              <div className="shop-one">
                <h3 className="wg-title2">Choose Price</h3>
                <div className="widget shop-filter">
                  <div className="info_widget">
                    <div className="price_filter">
                      <div id="slider-range"></div>
                      <div id="amount">
                        <input
                          type="text"
                          name="first_price"
                          className="first_price"
                        />
                        <input
                          type="text"
                          name="last_price"
                          className="last_price"
                        />
                        <button className="button-shop" type="submit">
                          <i className="fa fa-search search-icon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-one">
                <h3 className="wg-title2">Choose Color</h3>
                <ul className="product-categories">
                  <li className="cat-item cat-item-11">
                    <a href="#">Black</a>
                    <span className="count">(1)</span>
                  </li>
                  <li className="cat-item cat-item-8">
                    <a href="#">Orange</a>
                    <span className="count">(1)</span>
                  </li>
                </ul>
              </div>
              <div className="top-shop-sidebar sim">
                <h3 className="wg-title">Compare Products</h3>
                <ul className="products-list">
                  <li className="cat-item cat-item-11">
                    No products to compare
                  </li>
                </ul>
                <a className="clear-all" href="#">
                  Clear all
                </a>
                <a className="blog8" href="#">
                  Compare
                </a>
              </div>
              <div className="top-shop-sidebar sim2">
                <h3 className="wg-title">Community Pool</h3>
              </div>
              <div className="shop-one">
                <ul className="product-categories">
                  <li className="cat-item cat-item-11">
                    <a href="#">Black</a>
                    <span className="count">(1)</span>
                  </li>
                  <li className="cat-item cat-item-8">
                    <a href="#">Orange</a>
                    <span className="count">(1)</span>
                  </li>
                </ul>
              </div>
              <div className="top-shop-sidebar an-shop">
                <h3 className="wg-title">BEST SELLER</h3>
                <ul>
                  <li className="b-none">
                    <div className="tb-recent-thumbb">
                      <a href="">
                        <img
                          className="attachment"
                          src="img/product/p1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="tb-recentb">
                      <div className="tb-beg">
                        <a href="#">Lambskin Shoe</a>
                      </div>
                      <div className="tb-product-price font-noraure-3">
                        <span className="amount">$180.00</span>
                        <span className="amount2 ana">$170.00</span>
                      </div>
                    </div>
                  </li>
                  <li className="b-none">
                    <div className="tb-recent-thumbb">
                      <a href="">
                        <img
                          className="attachment"
                          src="img/product/p2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="tb-recentb">
                      <div className="tb-beg">
                        <a href="#">Luxury Leather Bag</a>
                      </div>
                      <div className="tb-product-price font-noraure-3">
                        <span className="amount2 ana">$170.00</span>
                      </div>
                    </div>
                  </li>
                  <li className="b-none agn">
                    <div className="tb-recent-thumbb">
                      <a href="">
                        <img
                          className="attachment"
                          src="img/product/p3.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="tb-recentb">
                      <div className="tb-beg">
                        <a href="#">Vintage Glasses</a>
                      </div>
                      <div className="tb-product-price font-noraure-3">
                        <span className="amount2 ana">$170.00</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="ro-info-box-wrap tpl3 st">
                <div className="tb-image">
                  <img src="img/product/a1.jpg" alt="" />
                </div>
                <div className="tb-content">
                  <div className="tb-content-inner an-inner">
                    <h5>WOMEN'S FASHION</h5>
                    <h3>MID SEASON SALE</h3>
                    <h6>
                      <a href="#">SHOP NOW</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </Col>

        <Col lg={9}>
          <Row>
            <Col>
              {/* <!-- Nav tabs --> */}
              <div className="shop-all-tab">
                <div className="two-part m-2">
                  {/* <ul className="nav tabs" role="tablist">
                    <li className="vali">View as:</li>
                    <li role="presentation">
                      <a
                        href="#home"
                        className="active"
                        aria-controls="home"
                        role="tab"
                        data-bs-toggle="tab"
                      >
                        <i className="fa fa-th-large"></i>
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#profile"
                        aria-controls="profile"
                        role="tab"
                        data-bs-toggle="tab"
                      >
                        <i className="fa fa-align-justify"></i>
                      </a>
                    </li>
                  </ul> */}
                  <div className="sort-by">
                    <div className="shop6">
                      <label>Sort By :</label>
                      <select>
                        <option value="">Default sorting</option>
                        <option value="">Sort by popularity</option>
                        <option value="">Sort by average rating</option>
                        <option value="">Sort by newness</option>
                        <option value="">Sort by price: low to high</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="shop5  m-2">
                  <label>Show :</label>
                  <select>
                    <option value="">12</option>
                    <option value="">24</option>
                    <option value="">36</option>
                  </select>
                </div>
              </div>
            </Col>
          </Row>
          <Container className="d-flex flex-wrap mb-3 ml-lg-3 mx-xs-auto">
            {products &&
              products.map((item) => (
                <Col key={item.id} className="mr-2 px-2" lg={4} md={6} sm={12}>
                  <div className="tb-product-item-inner tb2 pct-last">
                    <span className="onsale two">Sale!</span>
                    <img alt="" src={item.product_images_1} />
                    <a
                      className="la-icon"
                      onClick={() => {
                        setOpen(true);
                        setProduct(item);
                      }}
                      title="Quick View"
                      data-bs-toggle="modal"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </a>
                    <div className="tb-content">
                      <div className="tb-it">
                        <div className="tb-beg">
                          <Link to={`/product/${item.id}`}>
                            {item.title.rendered}
                          </Link>
                        </div>
                        <div className="tb-product-wrap-price-rating">
                          <div className="tb-product-price font-noraure-3">
                            <span className="amount2 ana">${item.price}</span>
                          </div>
                        </div>
                        <div className="last-cart l-mrgn">
                          <a
                            className="las3"
                            onClick={() => {
                              addToast("Product added to WishList!");
                              addToWishList(item);
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </a>
                          <a
                            className="las4"
                            onClick={() => {
                              addToast("Product added to Cart!");
                              addToCart(item);
                            }}
                          >
                            Add To Cart
                          </a>
                          <a className="las3 las7" href="#">
                            <FontAwesomeIcon icon={faRetweet} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Container>
        </Col>
      </Row>

      {open && (
        <ProductModal
          open={open}
          onClose={() => setOpen(false)}
          product={product}
        />
      )}
    </Container>
  );
}
