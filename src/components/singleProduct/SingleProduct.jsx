import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRetweet, faStar } from "@fortawesome/free-solid-svg-icons";

import "./jquery.snipe.min.js";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useUser } from "../../context/userContext.jsx";
import { useToast } from "../../context/toastContext.jsx";

export default function SingleProduct() {
  let { productId } = useParams();
  const [product, setProduct] = useState();
  const [qnt, setQnt] = useState(0);
  const [starSelected, setStarSelected] = useState(0);
  const { addToCart, addToWishList } = useUser();
  const { addToast } = useToast();
  const [review, setReview] = useState({
    name: "",
    email: "",
    content: "",
  });

  useEffect(() => {
    const getProduct = async () => {
      //   try {
      //     const resproduct = await productById(productId);
      //     setProduct(resproduct);
      //   } catch (error) {
      //     console.log(error);
      //   }
    };

    getProduct();
  }, []);

  return (
    <div>
      <section className="contact-img-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="con-text">
                <h2 className="page-title">Men</h2>
                <p>
                  <a href="#">Home</a> | Men
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="single-product-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-xl-9 col-md-12 col-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="tab-zoom">
                    {/* <!-- Tab panes --> */}
                    <div className="tab-content">
                      <div id="image1" className="tab-pane fade show active">
                        <div className="s_big">
                          <ReactImageMagnify
                            {...{
                              smallImage: {
                                alt: "Wristwatch by Ted Baker London",
                                isFluidWidth: true,
                                src: "/src/img/product/t1.jpg",
                              },
                              largeImage: {
                                src: "/src/img/product/t1.jpg",
                                width: 500,
                                height: 500,
                              },
                            }}
                          />
                          {/* <a href="img/product/t1.jpg" className="demo4">
                            <img src="/src/img/product/8.jpg" alt="" />
                          </a> */}
                        </div>
                      </div>
                      <div id="image2" className="tab-pane fade">
                        <div className="s_big">
                          <a href="img/product/z1.jpg" className="demo4">
                            <img src="img/product/2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div id="image3" className="tab-pane fade">
                        <div className="s_big">
                          <a href="img/product/z2.jpg" className="demo4">
                            <img src="img/product/1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="thumnail-image fix">
                      <ul className="tab-menu nav">
                        <li>
                          <a
                            className="active"
                            data-bs-toggle="tab"
                            href="#image1"
                          >
                            <img alt="" src="img/product/9.jpg" />
                          </a>
                        </li>
                        <li>
                          <a data-bs-toggle="tab" href="#image2">
                            <img alt="" src="img/product/2.jpg" />
                          </a>
                        </li>
                        <li className="zoom-mrgn-none">
                          <a data-bs-toggle="tab" href="#image3">
                            <img alt="" src="img/product/1.jpg" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="entry-summary">
                    <div className="entry-title">{product?.name}</div>
                    <div className="tb-product-wrap-price-rating">
                      <div className="tb-product-price font-noraure-3 nurore">
                        <span className="amount2 ana">$79.00 - </span>
                        <span className="amount2 ana">${product?.price}</span>
                      </div>
                      <div className="stock">
                        Avaiability:
                        <span> in stock</span>
                      </div>
                    </div>
                    <div className="description">
                      <p>
                        Duis autem vel eum iriure dolor in hendrerit in
                        vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi. Nam liber tempor cum soluta nobis
                        eleifend option congue nihil imperdiet doming id quod
                        mazim placerat facer possim assum.
                      </p>
                    </div>
                    <form
                      action="#"
                      className="woocommerce-shipping-calculator"
                    >
                      <p className="form-row form-row-wide">
                        <label>
                          Color
                          <span className="required">*</span>
                        </label>
                        <select className="email s-email s-wid">
                          <option>Choose an option</option>
                          <option>Black</option>
                        </select>
                      </p>
                      <p className="form-row form-row-wide">
                        <label>
                          Brand
                          <span className="required">*</span>
                        </label>
                        <select className="email s-email s-wid">
                          <option>Choose an option</option>
                          <option>Nike</option>
                          <option>Religion</option>
                          <option>Diesel</option>
                          <option>Monki</option>
                        </select>
                      </p>
                    </form>
                    <div className="single-price">
                      <div>
                        <p className="single-price-top">Price:</p>
                      </div>
                      <div className="ro-quantity clearfix">
                        <label>
                          Qty:
                          <span className="s-color"> *</span>
                        </label>
                        {/* <div className="quantity"> */}
                        {/* <div className="cart-plus-minus"> */}
                        <InputGroup className="mb-3">
                          <Button
                            variant="outline-secondary"
                            onClick={() =>
                              setQnt((prev) => (prev > 0 ? prev - 1 : 0))
                            }
                          >
                            -
                          </Button>
                          <Form.Control
                            className="text-center"
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            value={qnt}
                          />
                          <Button
                            variant="outline-secondary"
                            onClick={() => setQnt((prev) => prev + 1)}
                          >
                            +
                          </Button>
                        </InputGroup>
                        {/* </div> */}
                        {/* </div> */}
                      </div>
                      <div className="add-two-single">
                        <div className="last-cart l-mrgn ns">
                          <a
                            className="las4"
                            onClick={() => {
                              addToast("Product is Added to Cart!");
                              addToCart(product, qnt);
                            }}
                          >
                            Add To Cart
                          </a>
                        </div>
                        <div className="tb-product-btn shp">
                          <a href="#">
                            <i className="fa fa-eye"></i>
                          </a>
                          <a
                            onClick={() => {
                              addToast("Product is Added to WishList!");
                              addToWishList(product);
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </a>
                          <a href="#">
                            <FontAwesomeIcon icon={faRetweet} />
                          </a>
                        </div>
                      </div>
                      <div className="capture-pn">
                        <img src="img/icon-img/capture.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sin">
                <Tabs
                  defaultActiveKey="Description"
                  id="uncontrolled-tab-example"
                  // className="mb-3"
                >
                  <Tab eventKey="Description" title="Description">
                    <div className="tab-pane active sin-ha" id="Description">
                      <h2>Product Description</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat.
                      </p>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="AdditionalInformation"
                    title="Additional Information"
                  >
                    <div className="tab-pane sin-ha" id="AdditionalInformation">
                      <h2>Additional Information</h2>
                      <table className="shop_attributes">
                        <tbody>
                          <tr className="">
                            <th>Color</th>
                            <td>
                              <p>Black, Orange</p>
                            </td>
                          </tr>
                          <tr className="alt">
                            <th>Brand</th>
                            <td>
                              <p>Nike, Religion, Diesel, Monki</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tab>
                  <Tab eventKey="Reviews" title="Reviews">
                    <div className="tab-pane sin-ha" id="messages">
                      <h2>Reviews</h2>
                      <p className="woocommerce-nore">
                        There are no reviews yet.
                      </p>
                      <h2>Be the first to review “Glasses”</h2>
                      <form>
                        <div className="sin-form2">
                          <p className="woocommerce-nore2">Your Rating</p>
                          <span>
                            <a onClick={() => setStarSelected(1)}>
                              <FontAwesomeIcon
                                icon={
                                  starSelected >= 1 ? faStar : faStarRegular
                                }
                              />
                            </a>
                            <a onClick={() => setStarSelected(2)}>
                              <FontAwesomeIcon
                                icon={
                                  starSelected >= 2 ? faStar : faStarRegular
                                }
                              />
                            </a>
                            <a onClick={() => setStarSelected(3)}>
                              <FontAwesomeIcon
                                icon={
                                  starSelected >= 3 ? faStar : faStarRegular
                                }
                              />
                            </a>
                            <a onClick={() => setStarSelected(4)}>
                              <FontAwesomeIcon
                                icon={
                                  starSelected >= 4 ? faStar : faStarRegular
                                }
                              />
                            </a>
                            <a onClick={() => setStarSelected(5)}>
                              <FontAwesomeIcon
                                icon={
                                  starSelected >= 5 ? faStar : faStarRegular
                                }
                              />
                            </a>
                          </span>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <label className="l-contact">
                              Your Review
                              <em>*</em>
                            </label>
                            <textarea
                              className="form-control"
                              name="message"
                              required=""
                              onChange={(e) =>
                                setReview({
                                  ...review,
                                  content: e.target.value,
                                })
                              }
                            ></textarea>
                          </div>
                          <div className="col-md-12">
                            <div className="di-na">
                              <label className="l-contact">
                                Name
                                <em>*</em>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="name"
                                required=""
                                onChange={(e) =>
                                  setReview({ ...review, name: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="di-na">
                              <label className="l-contact">
                                Email
                                <em>*</em>
                              </label>
                              <input
                                className="form-control"
                                type="email"
                                name="name"
                                required=""
                                onChange={(e) =>
                                  setReview({
                                    ...review,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="last-cart-con s-icon2">
                              <button
                                className="wpcf7"
                                // type="submit"
                                value="Submit"
                                onClick={(e) => {
                                  e.preventDefault();
                                  addToast("Thanks For Review!");
                                }}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Tab>
                  <Tab eventKey="TAGS" title="TAGS">
                    <div className="tab-pane" id="tag">
                      <span className="tagged_as">
                        Tag:
                        <a rel="tag" href="#">
                          Featured
                        </a>
                      </span>
                    </div>
                  </Tab>
                  <Tab eventKey="Video" title="Video">
                    <div className="tab-pane" id="video">
                      <div className="post-format-area">
                        <div className="blog_video ratio ratio-16x9">
                          <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/Zv11L-ZfrSg"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-12 col-12">
              <div className="top-shop-sidebar an-shop">
                <h3 className="wg-title">UpSell Products</h3>
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
                  <img alt="" src="img/product/a1.jpg" />
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
          </div>
        </div>
      </section>
      <section className="single-pro-area7">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="last-line">
                <h3 className="wg-title">Related Products</h3>
              </div>
            </div>
          </div>
          <div className="non7">
            <div className="row">
              {/* <!-- single-product start --> */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tb-product-item-inner tb2 pct-last">
                  <img alt="" src="img/product/1.jpg" />
                  <a
                    className="la-icon"
                    href="#productModal"
                    title="Quick View"
                    data-bs-toggle="modal"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <div className="tb-content">
                    <div className="tb-it">
                      <div className="tb-beg">
                        <a href="#">Leather Bag</a>
                      </div>
                      <div className="tb-product-wrap-price-rating">
                        <div className="tb-product-price font-noraure-3">
                          <span className="amount">$180.00</span>
                          <span className="amount2 ana">$170.00</span>
                        </div>
                      </div>
                      <div className="last-cart l-mrgn">
                        <a className="las3" href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                        <a className="las4" href="#">
                          Add To Cart
                        </a>
                        <a className="las3 las7" href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- single-product end --> */}
              {/* <!-- single-product start --> */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tb-product-item-inner tb2 pct-last">
                  <span className="onsale two">Sale!</span>
                  <img alt="" src="img/product/9.jpg" />
                  <a
                    className="la-icon"
                    href="#productModal"
                    title="Quick View"
                    data-bs-toggle="modal"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <div className="tb-content">
                    <div className="tb-it">
                      <div className="tb-beg">
                        <a href="#">Glasses</a>
                      </div>
                      <div className="tb-product-wrap-price-rating">
                        <div className="tb-product-price font-noraure-3">
                          <span className="amount2 ana">$79.00 - </span>
                          <span className="amount2 ana">$100.00</span>
                        </div>
                      </div>
                      <div className="last-cart l-mrgn">
                        <a className="las3" href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                        <a className="las4" href="#">
                          Add To Cart
                        </a>
                        <a className="las3 las7" href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- single-product end --> */}
              {/* <!-- single-product start --> */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tb-product-item-inner tb2 pct-last">
                  <span className="onsale">Sale!</span>
                  <img alt="" src="img/product/7.jpg" />
                  <a
                    className="la-icon"
                    href="#productModal"
                    title="Quick View"
                    data-bs-toggle="modal"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <div className="tb-content">
                    <div className="tb-it">
                      <div className="tb-beg">
                        <a href="#">Skin Shoulder Bag</a>
                      </div>
                      <div className="tb-product-wrap-price-rating">
                        <div className="tb-product-price font-noraure-3">
                          <span className="amount2 ana">$170.00</span>
                        </div>
                      </div>
                      <div className="last-cart l-mrgn">
                        <a className="las3" href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                        <a className="las4" href="#">
                          Add To Cart
                        </a>
                        <a className="las3 las7" href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- single-product end --> */}
              {/* <!-- single-product start --> */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tb-product-item-inner tb2 pct-last res res2">
                  <span className="onsale">Sale!</span>
                  <img alt="" src="img/product/6.jpg" />
                  <a
                    className="la-icon"
                    href="#productModal"
                    title="Quick View"
                    data-bs-toggle="modal"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <div className="tb-content">
                    <div className="tb-it">
                      <div className="tb-beg">
                        <a href="#">Vintage Glasses</a>
                      </div>
                      <div className="tb-product-wrap-price-rating">
                        <div className="tb-product-price font-noraure-3">
                          <span className="amount2 ana">$199.00</span>
                        </div>
                      </div>
                      <div className="last-cart l-mrgn">
                        <a className="las3" href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                        <a className="las4" href="#">
                          Add To Cart
                        </a>
                        <a className="las3 las7" href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- single-product end --> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
