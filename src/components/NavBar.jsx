import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/img/logo/04_Homepage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faCartShopping,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import * as ROUTES from "../constant/routes";
import CartModal from "./shop/CartModal";
import { useUser } from "../context/userContext";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

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

  const toggleBlock = (block) => {
    $(block).slideToggle(500);
  };

  return (
    <>
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
                    <div className="mobile-menu ">
                      <nav id="dropdown">
                        <ul className="main-menu">
                          <li>
                            <Link to={ROUTES.DASHBOARD}>Home</Link>
                          </li>
                          <li className="menu-drop">
                            <div className="menu-drop-title">
                              Women
                              <FontAwesomeIcon
                                icon={faPlus}
                                onClick={() => toggleBlock(".drop-menu-women")}
                              />
                            </div>
                            <ul className="drop-menu drop-menu-women">
                              <li>
                                <div className="menu-drop-title">
                                  Clothings{" "}
                                  <FontAwesomeIcon
                                    icon={faPlus}
                                    onClick={() => toggleBlock(".drop-menu3")}
                                  />
                                </div>
                                <ul className="drop-menu drop-menu3">
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
                                <div className="menu-drop-title">
                                  Shoes
                                  <FontAwesomeIcon
                                    icon={faPlus}
                                    onClick={() => toggleBlock(".drop-menu4")}
                                  />
                                </div>
                                <ul className="drop-menu drop-menu4">
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
                                <a>
                                  <img alt="" src="img/banner/bg_menu1.jpg" />
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-drop">
                            <div className=" menu-drop-title">
                              Men
                              <FontAwesomeIcon
                                icon={faPlus}
                                onClick={() => toggleBlock(".drop-menu-men")}
                              />
                            </div>
                            <ul className=" drop-menu drop-menu-men">
                              <li>
                                <div className="menu-drop-title">
                                  Clothing
                                  <FontAwesomeIcon
                                    icon={faPlus}
                                    onClick={() => toggleBlock(".drop-menu5")}
                                  />
                                </div>
                                <ul className="drop-menu drop-menu5">
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
                                <div className=" menu-drop-title">
                                  Shoes
                                  <FontAwesomeIcon
                                    icon={faPlus}
                                    onClick={() => toggleBlock(".drop-menu6")}
                                  />
                                </div>
                                <ul className="drop-menu drop-menu6">
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
                                <a>
                                  <img alt="" src="/img/banner/bg_menu3.jpg" />
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to={ROUTES.SHOP}>Shop</Link>
                          </li>
                          <li>
                            <Link to={ROUTES.WISHLIST}>WishList</Link>
                          </li>
                          <li>
                            <Link to={ROUTES.CONTACT}>Contact</Link>
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
                                    <a>Clothings</a>
                                  </h3>
                                  <a>Dresses</a>
                                  <a>Tops</a>
                                  <a>Outerwear</a>
                                </div>
                                <div className="tas">
                                  <h3 className="hedding-border">
                                    <a>Jewelry</a>
                                  </h3>
                                  <a>Necklaces</a>
                                  <a>Earrings</a>
                                  <a>Rings</a>
                                </div>
                                <div className="tas">
                                  <h3 className="hedding-border">
                                    <a>Shoes</a>
                                  </h3>
                                  <a>Sneakers</a>
                                  <a>Flats</a>
                                  <a>Boots</a>
                                </div>
                              </div>
                              <div className="tas2">
                                <div className="menu-img ist">
                                  <a>
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
                                    <a>Clothing</a>
                                  </h3>
                                  <a>Shirts</a>
                                  <a>Tops</a>
                                  <a>Fashion Scarves</a>
                                </div>
                                <div className="tas">
                                  <h3 className="hedding-border">
                                    <a>Shoes</a>
                                  </h3>
                                  <a>Sneakers</a>
                                  <a>Casual</a>
                                  <a>Boots</a>
                                </div>
                                <div className="tas">
                                  <h3 className="hedding-border">
                                    <a>Bags</a>
                                  </h3>
                                  <a>Work</a>
                                  <a>Weekend</a>
                                  <a>Backpacks</a>
                                </div>
                                <div className="tas">
                                  <h3 className="hedding-border">
                                    <a>Accessories</a>
                                  </h3>
                                  <a>Sunglasses</a>
                                  <a>Watches</a>
                                  <a>Jewelry</a>
                                </div>
                                <div className="tas">
                                  <h3 className="hedding-border">
                                    <a>Sale</a>
                                  </h3>
                                  <a>Tops</a>
                                  <a>Bottoms</a>
                                  <a>Denim</a>
                                </div>
                                <div className="tas mrgn-none">
                                  <h3 className="hedding-border">
                                    <a>Features</a>
                                  </h3>
                                  <a>Holiday Party</a>
                                  <a>The Carry On</a>
                                  <a>Holiday Travel</a>
                                </div>
                              </div>
                              <div className="tas4">
                                <div className="menu-img im3">
                                  <a>
                                    <img
                                      alt=""
                                      src="/img/banner/bg_menu2.jpg"
                                    />
                                  </a>
                                </div>
                                <div className="menu-img im3">
                                  <a>
                                    <img alt="" src="img/banner/bg_menu3.jpg" />
                                  </a>
                                </div>
                              </div>
                            </div>
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
                            <Link to={ROUTES.DASHBOARD}>Blog</Link>
                          </li>
                          <li>
                            <Link to={ROUTES.CONTACT}>Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="two-hom4 d-flex">
                      <div className="tb-menu-sidebar floatleft">
                        <div className="search-item">
                          <a className="icon_search">
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
                                  {cartProducts.length
                                    ? cartProducts.length
                                    : 0}
                                </span>
                              </a>
                            </div>
                            {isCart && <CartModal />}
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => toggleBlock(".mobile-menu")}
                        className="justify-content-center align-items-center top-bars"
                      >
                        <FontAwesomeIcon icon={faBars} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <Navbar bg="light" expand="md" className="mb-3" sticky="top">
        <Container fluid>
          <Navbar.Brand>
            <Link to={ROUTES.DASHBOARD}>
              <div className="logo hm4 ">
                <img src={Logo} alt="" />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">
                  <Link to={ROUTES.DASHBOARD}>Home</Link>
                </Nav.Link>

                <NavDropdown
                  title="Women"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Men"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action3">Men</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <Link to={ROUTES.SHOP}>Shop</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={ROUTES.WISHLIST}>WishList</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={ROUTES.CONTACT}>Contact</Link>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}
    </>
  );
}
