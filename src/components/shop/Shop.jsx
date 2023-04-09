import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductModal from "../ProductModal";
import { useUser } from "../../context/userContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faRetweet } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useToast } from "../../context/toastContext";
export default function Shop() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState();
  const { addToCart, addToWishList } = useUser();
  const { addToast } = useToast();

  const products = [
    {
      id: 1,
      img: "/img/product/1.jpg",
      name: "Blue Bag",
      price: "120",
    },
    {
      id: 2,
      img: "/img/product/2.jpg",
      name: "Black Leather Shoes",
      price: "300",
    },
    {
      id: 3,
      img: "/img/product/3.jpg",
      name: "Brown Leather Shoes",
      price: "220",
    },
    {
      id: 4,
      img: "/img/product/4.jpg",
      name: "Brown Bag",
      price: "210",
    },
    {
      id: 5,
      img: "/img/product/5.jpg",
      name: "Silver Leather Bag",
      price: "200",
    },
    {
      id: 6,
      img: "/img/product/6.jpg",
      name: "Googles Black",
      price: "190",
    },
    {
      id: 7,
      img: "/img/product/7.jpg",
      name: "White Leather Bag",
      price: "180",
    },
    {
      id: 8,
      img: "/img/product/8.jpg",
      name: "Golden Leather Bag",
      price: "170",
    },
    {
      id: 9,
      img: "/img/product/9.jpg",
      name: "Glasses",
      price: "100",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <div class="all-shop-sidebar">
            <div class="top-shop-sidebar">
              <h3 class="wg-title">SHOP BY</h3>
            </div>
            <div class="shop-one">
              <h3 class="wg-title2">Categories</h3>
              <ul class="product-categories">
                <li class="cat-item">
                  <a href="#">Accessories</a>
                  <span class="count">(10)</span>
                </li>
                <li class="cat-item">
                  <a href="#">Jewelry</a>
                  <span class="count">(8)</span>
                </li>
                <li class="cat-item current-cat">
                  <a href="#">Men</a>
                  <span class="count">(5)</span>
                </li>
                <li class="cat-item">
                  <a href="#">Watches</a>
                  <span class="count">(6)</span>
                </li>
                <li class="cat-item">
                  <a href="#">Women</a>
                  <span class="count">(10)</span>
                </li>
              </ul>
            </div>
            <div class="shop-one">
              <h3 class="wg-title2">Our Brand</h3>
              <ul class="product-categories">
                <li class="cat-item">
                  <a href="#">Nike</a>
                  <span class="count">(1)</span>
                </li>
                <li class="cat-item">
                  <a href="#">Religion</a>
                  <span class="count">(1)</span>
                </li>
                <li class="cat-item-10">
                  <a href="#">Diesel</a>
                  <span class="count">(1)</span>
                </li>
                <li class="cat-item">
                  <a href="#">Monki</a>
                  <span class="count">(1)</span>
                </li>
              </ul>
            </div>
            <div class="shop-one">
              <h3 class="wg-title2">Choose Price</h3>
              <div class="widget shop-filter">
                <div class="info_widget">
                  <div class="price_filter">
                    <div id="slider-range"></div>
                    <div id="amount">
                      <input
                        type="text"
                        name="first_price"
                        class="first_price"
                      />
                      <input type="text" name="last_price" class="last_price" />
                      <button class="button-shop" type="submit">
                        <i class="fa fa-search search-icon"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="shop-one">
              <h3 class="wg-title2">Choose Color</h3>
              <ul class="product-categories">
                <li class="cat-item cat-item-11">
                  <a href="#">Black</a>
                  <span class="count">(1)</span>
                </li>
                <li class="cat-item cat-item-8">
                  <a href="#">Orange</a>
                  <span class="count">(1)</span>
                </li>
              </ul>
            </div>
            <div class="top-shop-sidebar sim">
              <h3 class="wg-title">Compare Products</h3>
              <ul class="products-list">
                <li class="cat-item cat-item-11">No products to compare</li>
              </ul>
              <a class="clear-all" href="#">
                Clear all
              </a>
              <a class="blog8" href="#">
                Compare
              </a>
            </div>
            <div class="top-shop-sidebar sim2">
              <h3 class="wg-title">Community Pool</h3>
            </div>
            <div class="shop-one">
              <ul class="product-categories">
                <li class="cat-item cat-item-11">
                  <a href="#">Black</a>
                  <span class="count">(1)</span>
                </li>
                <li class="cat-item cat-item-8">
                  <a href="#">Orange</a>
                  <span class="count">(1)</span>
                </li>
              </ul>
            </div>
            <div class="top-shop-sidebar an-shop">
              <h3 class="wg-title">BEST SELLER</h3>
              <ul>
                <li class="b-none">
                  <div class="tb-recent-thumbb">
                    <a href="">
                      <img class="attachment" src="img/product/p1.jpg" alt="" />
                    </a>
                  </div>
                  <div class="tb-recentb">
                    <div class="tb-beg">
                      <a href="#">Lambskin Shoe</a>
                    </div>
                    <div class="tb-product-price font-noraure-3">
                      <span class="amount">$180.00</span>
                      <span class="amount2 ana">$170.00</span>
                    </div>
                  </div>
                </li>
                <li class="b-none">
                  <div class="tb-recent-thumbb">
                    <a href="">
                      <img class="attachment" src="img/product/p2.jpg" alt="" />
                    </a>
                  </div>
                  <div class="tb-recentb">
                    <div class="tb-beg">
                      <a href="#">Luxury Leather Bag</a>
                    </div>
                    <div class="tb-product-price font-noraure-3">
                      <span class="amount2 ana">$170.00</span>
                    </div>
                  </div>
                </li>
                <li class="b-none agn">
                  <div class="tb-recent-thumbb">
                    <a href="">
                      <img class="attachment" src="img/product/p3.jpg" alt="" />
                    </a>
                  </div>
                  <div class="tb-recentb">
                    <div class="tb-beg">
                      <a href="#">Vintage Glasses</a>
                    </div>
                    <div class="tb-product-price font-noraure-3">
                      <span class="amount2 ana">$170.00</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="ro-info-box-wrap tpl3 st">
              <div class="tb-image">
                <img src="img/product/a1.jpg" alt="" />
              </div>
              <div class="tb-content">
                <div class="tb-content-inner an-inner">
                  <h5>WOMEN'S FASHION</h5>
                  <h3>MID SEASON SALE</h3>
                  <h6>
                    <a href="#">SHOP NOW</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={9}>
          <Row>
            <Col>
              {/* <!-- Nav tabs --> */}
              <div class="shop-all-tab">
                <div class="two-part">
                  <ul class="nav tabs" role="tablist">
                    <li class="vali">View as:</li>
                    <li role="presentation">
                      <a
                        href="#home"
                        class="active"
                        aria-controls="home"
                        role="tab"
                        data-bs-toggle="tab"
                      >
                        <i class="fa fa-th-large"></i>
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#profile"
                        aria-controls="profile"
                        role="tab"
                        data-bs-toggle="tab"
                      >
                        <i class="fa fa-align-justify"></i>
                      </a>
                    </li>
                  </ul>
                  <div class="sort-by">
                    <div class="shop6">
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
                <div class="shop5">
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
          <Container className="d-flex flex-wrap mb-3 ml-3">
            {products &&
              products.map((item) => (
                <Col className="mr-2 px-2" xs={4}>
                  <div className="tb-product-item-inner tb2 pct-last">
                    <span className="onsale two">Sale!</span>
                    <img alt="" src={item.img} />
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
                          <Link to={`/product/${item.id}`}>{item.name}</Link>
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
