import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/img/logo/04_Homepage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import * as ROUTES from "../constant/routes";
import CartModal from "./shop/CartModal";
import { useUser } from "../context/userContext";

export default function NavBar() {
  const [isCart, setCart] = useState(false);
  const { cartProducts } = useUser();
  useEffect(() => {
    var stickyTop = $(".header-menu").offset().top;
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > stickyTop) {
        $(".header-menu").addClass("stick");
      } else {
        $(".header-menu").removeClass("stick");
      }
    });
  }, []);

  return (
    <header className="header-area">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-5 d-none d-sm-block">
              <div className="top-text">
                <div className="textwidget">Welcome To Our Store!</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-7 col-12">
              <div className="widget">
                <ul>
                  <li>
                    <Link to={ROUTES.MYACCOUNT}>My Account</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.WISHLIST}>Wishlist</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.CHECKOUT}>Check Out</Link>
                  </li>
                  <li>
                    <Link className="tb-login" to={ROUTES.LOGIN}>
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-four">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="home4-logo">
                <Link to={ROUTES.DASHBOARD}>
                  <img src={Logo} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-menu home-3 hm-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="header-wrapper">
                <div className="logo hm4 floatleft">
                  <a href="index.html">
                    <img src={Logo} alt="" />
                  </a>
                </div>
                <div className="menu-cart floatright">
                  <div className="mobile-menu">
                    <nav id="dropdown">
                      <ul className="main-menu">
                        <li>
                          <Link to={ROUTES.DASHBOARD}>Home</Link>
                          <ul className="menu-up">
                            <li>
                              <a href="index-2.html">Homepage 02</a>
                            </li>
                            <li>
                              <a href="index-3.html">Homepage 03</a>
                            </li>
                            <li>
                              <a href="index-4.html">Homepage 04</a>
                            </li>
                            <li>
                              <a href="index-5.html">Homepage 05</a>
                            </li>
                            <li>
                              <a href="index-6.html">Homepage 06</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop.html">Women</a>
                          <ul className="main-menu2">
                            <li>
                              <a href="#">Clothings</a>
                              <ul className="main-menu3">
                                <li>
                                  <a>Dresses</a>
                                </li>
                                <li>
                                  <a>Tops</a>
                                </li>
                                <li>
                                  <a>Outerwear</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Jewelry</a>
                              <ul className="main-menu3">
                                <li>
                                  <a>Necklaces</a>
                                </li>
                                <li>
                                  <a>Earrings</a>
                                </li>
                                <li>
                                  <a>Rings</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Shoes</a>
                              <ul className="main-menu3">
                                <li>
                                  <a>Sneakers</a>
                                </li>
                                <li>
                                  <a>Flats</a>
                                </li>
                                <li>
                                  <a>Boots</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img alt="" src="img/banner/bg_menu1.jpg" />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop.html">Men</a>
                          <ul className="main-menu2">
                            <li>
                              <a href="#">Clothing</a>
                              <ul className="main-menu3">
                                <li>
                                  <a>Shirts</a>
                                </li>
                                <li>
                                  <a>Tops</a>
                                </li>
                                <li>
                                  <a>Outerwear</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Shoes</a>
                              <ul className="main-menu3">
                                <li>
                                  <a>Sneakers</a>
                                </li>
                                <li>
                                  <a>Casual</a>
                                </li>
                                <li>
                                  <a>Boots</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Bags</a>
                              <ul className="main-menu3">
                                <li>
                                  <a>Work</a>
                                </li>
                                <li>
                                  <a>Weekend</a>
                                </li>
                                <li>
                                  <a>Backpacks</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Accessories</a>
                              <ul className="main-menu3">
                                <li>
                                  <a>Sunglasses</a>
                                </li>
                                <li>
                                  <a>Watches</a>
                                </li>
                                <li>
                                  <a>Jewelry</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Sale</a>
                              <ul className="main-menu3">
                                <li>
                                  <a>Tops</a>
                                </li>
                                <li>
                                  <a>Bottoms</a>
                                </li>
                                <li>
                                  <a>Denim</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Features</a>
                              <ul className="main-menu3">
                                <li>
                                  <a>Holiday Party</a>
                                </li>
                                <li>
                                  <a>The Carry On</a>
                                </li>
                                <li>
                                  <a>Holiday Travel</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img alt="" src="img/banner/bg_menu2.jpg" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img alt="" src="img/banner/bg_menu3.jpg" />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop.html">Jewelry</a>
                        </li>
                        <li>
                          <a href="#">Pages</a>
                          <ul>
                            <li>
                              <a href="blog.html">Blog</a>
                              <a href="blog-details.html">Blog Details</a>
                              <a href="checkout.html">checkout</a>
                              <a href="contact.html">Contacts</a>
                              <a href="login.html">Login</a>
                              <a href="my-account.html">My Account</a>
                              <a href="shop.html">shop</a>
                              <a href="shop-list.html">shop List</a>
                              <a href="single-product.html">single-product</a>
                              <a href="shopping-cart.html">shopping-cart</a>
                              <a href="wishlist.html">wishlist</a>
                              <a href="coming-soon.html">Coming soon</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop.html">Watches</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="muti_menu floatleft">
                    <nav>
                      <ul>
                        <li>
                          <Link className="fast active" to={ROUTES.DASHBOARD}>
                            home
                          </Link>
                        </li>
                        <li>
                          <a href="shop.html">
                            Women <FontAwesomeIcon icon={faAngleDown} />
                          </a>
                          <div className="mega-menu menu-minus">
                            <div className="tas1">
                              <div className="tas">
                                <h3 className="hedding-border">
                                  <a href="#">Clothings</a>
                                </h3>
                                <a href="#">Dresses</a>
                                <a href="#">Tops</a>
                                <a href="#">Outerwear</a>
                              </div>
                              <div className="tas">
                                <h3 className="hedding-border">
                                  <a href="#">Jewelry</a>
                                </h3>
                                <a href="#">Necklaces</a>
                                <a href="#">Earrings</a>
                                <a href="#">Rings</a>
                              </div>
                              <div className="tas">
                                <h3 className="hedding-border">
                                  <a href="#">Shoes</a>
                                </h3>
                                <a href="#">Sneakers</a>
                                <a href="#">Flats</a>
                                <a href="#">Boots</a>
                              </div>
                            </div>
                            <div className="tas2">
                              <div className="menu-img ist">
                                <a href="#">
                                  <img alt="" src="img/banner/bg_menu1.jpg" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a href="shop.html">
                            Men <FontAwesomeIcon icon={faAngleDown} />
                          </a>
                          <div className="mega-menu menu-minus">
                            <div className="tas1 tas3">
                              <div className="tas">
                                <h3 className="hedding-border">
                                  <a href="#">Clothing</a>
                                </h3>
                                <a href="#">Shirts</a>
                                <a href="#">Tops</a>
                                <a href="#">Fashion Scarves</a>
                              </div>
                              <div className="tas">
                                <h3 className="hedding-border">
                                  <a href="#">Shoes</a>
                                </h3>
                                <a href="#">Sneakers</a>
                                <a href="#">Casual</a>
                                <a href="#">Boots</a>
                              </div>
                              <div className="tas">
                                <h3 className="hedding-border">
                                  <a href="#">Bags</a>
                                </h3>
                                <a href="#">Work</a>
                                <a href="#">Weekend</a>
                                <a href="#">Backpacks</a>
                              </div>
                              <div className="tas">
                                <h3 className="hedding-border">
                                  <a href="#">Accessories</a>
                                </h3>
                                <a href="#">Sunglasses</a>
                                <a href="#">Watches</a>
                                <a href="#">Jewelry</a>
                              </div>
                              <div className="tas">
                                <h3 className="hedding-border">
                                  <a href="#">Sale</a>
                                </h3>
                                <a href="#">Tops</a>
                                <a href="#">Bottoms</a>
                                <a href="#">Denim</a>
                              </div>
                              <div className="tas mrgn-none">
                                <h3 className="hedding-border">
                                  <a href="#">Features</a>
                                </h3>
                                <a href="#">Holiday Party</a>
                                <a href="#">The Carry On</a>
                                <a href="#">Holiday Travel</a>
                              </div>
                            </div>
                            <div className="tas4">
                              <div className="menu-img im3">
                                <a href="#">
                                  <img alt="" src="img/banner/bg_menu2.jpg" />
                                </a>
                              </div>
                              <div className="menu-img im3">
                                <a href="#">
                                  <img alt="" src="img/banner/bg_menu3.jpg" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a href="shop.html">Jewelry</a>
                        </li>
                        <li>
                          <Link className="fast" to={ROUTES.SHOP}>
                            Shop
                          </Link>
                        </li>
                        <li>
                          <Link to={ROUTES.WISHLIST}>WishList</Link>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <Link to={ROUTES.CONTACT}>Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="two-hom4">
                    <div className="tb-menu-sidebar floatleft">
                      <div className="search-item">
                        <a className="icon_search" href="#">
                          <FontAwesomeIcon icon={faSearch} />
                        </a>
                        <div className="widget_searchform_content">
                          <form action="#">
                            <input
                              type="text"
                              placeholder="Search"
                              name="s"
                              value=""
                            />
                            <input type="submit" value="Search" />
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="top-cart-wrapper wrap floatleft">
                      <div className="top-shop-contain">
                        <div className="block-shop">
                          <div className="top-shop-title">
                            <a onClick={() => setCart((prev) => !prev)}>
                              <FontAwesomeIcon icon={faCartShopping} />
                              <span className="count co1">
                                {cartProducts.length ? cartProducts.length : 0}
                              </span>
                            </a>
                          </div>
                          {isCart && <CartModal />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
