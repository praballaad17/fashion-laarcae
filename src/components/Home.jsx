import React, { useEffect, useState } from "react";
import HeroSlider from "./common/HeroSlider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faRetweet } from "@fortawesome/free-solid-svg-icons";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductModal from "./ProductModal";
import { useUser } from "../context/userContext";
import { useToast } from "../context/toastContext";

export default function Home() {
  const [activeTab, setTab] = useState(2);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState();
  const { addToCart, addToWishList } = useUser();
  const { addToast } = useToast();

  useEffect(() => {
    $(".features-curosel2").owlCarousel({
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      navText: [
        "<FontAwesomeIcon icon={faEye} />",
        "<FontAwesomeIcon icon={faList} />",
      ],
      smartSpeed: 2000,
      margin: 30,
      item: 4,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }, []);

  const navtab = {
    one: [
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
    ],
    two: [
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
    ],
    three: [
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
    ],
  };

  return (
    <div>
      <HeroSlider />

      <section className="design-area home-4">
        <div className="container">
          <div className="bottom-design res">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-12">
                <div className="tb-info-box">
                  <div className="tb-image">
                    <img alt="" src="/img/banner/img-1.jpg" />
                  </div>
                  <div className="tb-content">
                    <h5>NEW DESIGN</h5>
                    <h3>SEND HER YOUR LOVE</h3>
                    <h6>
                      <a href="#">GET IT NOW</a>
                    </h6>
                  </div>
                </div>
                <div className="tb-info-box bt-no">
                  <div className="tb-content">
                    <h5>NEW DESIGN</h5>
                    <h3>SEND HER YOUR LOVE</h3>
                    <h6>
                      <a href="#">GET IT NOW</a>
                    </h6>
                  </div>
                  <div className="tb-image tb-right">
                    <img alt="" src="/img/banner/img-2.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="ro-info-box-wrap tpl3 fs">
                  <div className="tb-image">
                    <img alt="" src="/img/banner/img-3.jpg" />
                  </div>
                  <div className="tb-content">
                    <div className="tb-content-inner">
                      <h5>MEN’S FASHION</h5>
                      <h3>MID SEASON SALE</h3>
                      <h6>
                        <a href="#">VIEW COLLECTION</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="features-tab indicator-style2">
                {/* <!-- Nav tabs --> */}
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="vc_tta-tab">
                    <a
                      className={`${activeTab == 1 ? "active" : ""}`}
                      aria-controls="home"
                      role="tab"
                      data-bs-toggle="tab"
                      onClick={() => setTab(1)}
                    >
                      BESTSELLER
                    </a>
                  </li>
                  <li className="vc_tta-tab" role="presentation">
                    <a
                      className={`${activeTab == 2 ? "active" : ""}`}
                      aria-controls="profile"
                      role="tab"
                      data-bs-toggle="tab"
                      onClick={() => setTab(2)}
                    >
                      NEW PRODUCTS
                    </a>
                  </li>
                  <li className="vc_tta-tab" role="presentation">
                    <a
                      className={`${activeTab == 3 ? "active" : ""}`}
                      aria-controls="messages"
                      role="tab"
                      data-bs-toggle="tab"
                      onClick={() => setTab(3)}
                    >
                      MUST HAVE
                    </a>
                  </li>
                </ul>
                {/* <!-- Tab panes --> */}
                <div className="tab-content jump">
                  {navtab ? (
                    <>
                      <div
                        role="tabpanel"
                        className={`tab-pane ${activeTab == 1 ? "active" : ""}`}
                        id="home"
                      >
                        <OwlCarousel
                          items={4}
                          className="owl-theme"
                          loop
                          nav
                          margin={20}
                        >
                          {navtab.one &&
                            navtab.one.map((item) => (
                              <div className="tb-product-item-inner tb2 pct-last">
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
                                      <Link to={`/product/${item.id}`}>
                                        {item.name}
                                      </Link>
                                    </div>
                                    <div className="tb-product-wrap-price-rating">
                                      <div className="tb-product-price font-noraure-3">
                                        <span className="amount">
                                          ${item.price}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="last-cart l-mrgn">
                                      <a
                                        className="las3"
                                        onClick={() => addToWishList(item)}
                                      >
                                        <FontAwesomeIcon icon={faHeart} />
                                      </a>
                                      <a
                                        className="las4"
                                        onClick={() => {
                                          addToast("Product is Added to Cart");
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
                            ))}
                        </OwlCarousel>
                      </div>
                      <div
                        role="tabpanel"
                        className={`tab-pane ${activeTab == 2 ? "active" : ""}`}
                        id="profile"
                      >
                        <OwlCarousel
                          items={4}
                          className="owl-theme"
                          loop
                          nav
                          margin={20}
                        >
                          {navtab.two &&
                            navtab.two.map((item) => (
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
                                      <Link to={`/product/${item.id}`}>
                                        {item.name}
                                      </Link>
                                    </div>
                                    <div className="tb-product-wrap-price-rating">
                                      <div className="tb-product-price font-noraure-3">
                                        <span className="amount2 ana">
                                          ${item.price}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="last-cart l-mrgn">
                                      <a
                                        className="las3"
                                        onClick={() => addToWishList(item)}
                                      >
                                        <FontAwesomeIcon icon={faHeart} />
                                      </a>
                                      <a
                                        className="las4"
                                        onClick={() => {
                                          addToast("Product is Added to Cart");
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
                            ))}
                        </OwlCarousel>
                      </div>
                      <div
                        role="tabpanel"
                        className={`tab-pane ${activeTab == 3 ? "active" : ""}`}
                        id="messages"
                      >
                        <OwlCarousel
                          items={4}
                          className="owl-theme"
                          loop
                          nav
                          margin={20}
                        >
                          {navtab.three &&
                            navtab.three.map((item, idx) => (
                              <div
                                className="tb-product-item-inner tb2 pct-last"
                                key={idx}
                              >
                                <span className="onsale">Sale!</span>
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
                                      <Link to={`/product/${item.id}`}>
                                        {item.name}
                                      </Link>
                                    </div>
                                    <div className="tb-product-wrap-price-rating">
                                      <div className="tb-product-price font-noraure-3">
                                        <span className="amount2 ana">
                                          ${item.price}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="last-cart l-mrgn">
                                      <a
                                        className="las3"
                                        onClick={() => addToWishList(item)}
                                      >
                                        <FontAwesomeIcon icon={faHeart} />
                                      </a>
                                      <a
                                        className="las4"
                                        onClick={() => {
                                          addToast("Product is Added to Cart");
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
                            ))}
                        </OwlCarousel>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <ProductModal
          open={open}
          onClose={() => setOpen(false)}
          product={product}
        />
      )}
    </div>
  );
}
