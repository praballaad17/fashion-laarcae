import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as ROUTES from "../constant/routes";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function MyAccount() {
  const handleTabs = (tab) => {
    console.log("tabs clickeddd", tab);
    const selectedTab = document.querySelector(tab);
    selectedTab.classList.add("dropdown_menu_style");

    if (selectedTab.classList.contains("show")) {
      selectedTab.style.height = "0px";
      selectedTab.classList.remove("show");
    } else {
      selectedTab.style.height = "initial";
      selectedTab.classList.add("show");
    }
  };

  useEffect(() => {}, []);
  return (
    <Container>
      <Row>
        <div className="con-text">
          <h2 className="page-title">My Account</h2>
          <p>
            <a href="#">Home</a> | My Account
          </p>
        </div>
      </Row>
      <Row>
        <div className="check">
          <h2>My Account </h2>
        </div>
        <div className="faq-accordion">
          <div
            className="panel-group pas7"
            id="accordion2"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  <a
                    className="collapsed method"
                    role="button"
                    data-bs-toggle="collapse"
                    onClick={() => handleTabs("#collapseOne")}
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Edit your account information{"  "}
                    <FontAwesomeIcon icon={faCaretDown} />
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                className="panel-collapse collapse show dropdown_menu_style"
                role="tabpanel"
                data-bs-parent="#accordion2"
                aria-labelledby="headingOne"
                aria-expanded="false"
              >
                <div className="easy2">
                  <h2>My Account Information</h2>
                  <form className="form-horizontal" action="#">
                    <fieldset>
                      <legend>Your Personal Details</legend>
                      <div className="form-group required">
                        <div className="row">
                          <label className="col-md-2 control-label">
                            First Name{" "}
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="row">
                          <label className="col-md-2 control-label">
                            Last Name
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="row">
                          <label className="col-md-2 control-label">
                            E-Mail
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="email"
                              placeholder="E-Mail"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="row">
                          <label className="col-md-2 control-label">
                            Telephone
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="tel"
                              placeholder="Telephone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <label className="col-md-2 control-label">Fax</label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Fax"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="buttons clearfix">
                      <div className="pull-left">
                        <a className="btn btn-default ce5" href="#">
                          Back
                        </a>
                      </div>
                      <div className="pull-right">
                        <input
                          className="btn btn-primary ce5"
                          type="submit"
                          value="Continue"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <a
                    className="collapsed "
                    role="button"
                    data-bs-toggle="collapse"
                    onClick={() => handleTabs("#collapseTwo")}
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Change your password <FontAwesomeIcon icon={faCaretDown} />
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                className="panel-collapse collapse dropdown_menu_style"
                data-bs-parent="#accordion2"
                role="tabpanel"
                aria-labelledby="headingTwo"
                aria-expanded="false"
                style={{ height: "0px" }}
              >
                <div className="easy2">
                  <h2>Change Password</h2>
                  <form className="form-horizontal" action="#">
                    <fieldset>
                      <legend>Your Password</legend>
                      <div className="form-group required">
                        <div className="row">
                          <label className="col-md-2 control-label">
                            Password
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="password"
                              placeholder="password"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="row">
                          <label className="col-md-2 control-label">
                            Password Confirm
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="password"
                              placeholder="password confirm"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="buttons clearfix">
                      <div className="pull-left">
                        <a className="btn btn-default ce5" href="#">
                          Back
                        </a>
                      </div>
                      <div className="pull-right">
                        <input
                          className="btn btn-primary ce5"
                          type="submit"
                          value="Continue"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    onClick={() => handleTabs("#collapseThree")}
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Modify your address book entries{" "}
                    <FontAwesomeIcon icon={faCaretDown} />
                  </a>
                </h4>
              </div>
              <div
                id="collapseThree"
                className="panel-collapse collapse"
                data-bs-parent="#accordion2"
                role="tabpanel"
                aria-labelledby="headingThree"
                aria-expanded="false"
                style={{ height: "0px" }}
              >
                <div className="easy2">
                  <h2>Address Book Entries</h2>
                  <table className="table table-bordered table-hover">
                    <tr>
                      <td className="text-left">
                        Michael K. Robinson
                        <br />
                        4917 Poling Farm Road
                        <br />
                        Fremont, NE 68025
                      </td>
                      <td className="text-right">
                        <a className="btn btn-info g6" href="#">
                          Edit
                        </a>
                        <a className="btn btn-danger g6" href="#">
                          Delete
                        </a>
                      </td>
                    </tr>
                  </table>
                  <div className="buttons clearfix">
                    <div className="pull-left">
                      <a className="btn btn-default ce5" href="#">
                        Back
                      </a>
                    </div>
                    <div className="pull-right">
                      <input
                        className="btn btn-primary ce5"
                        type="submit"
                        value="Continue"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link className="collap" to={ROUTES.WISHLIST}>
            Modify your wish list <FontAwesomeIcon icon={faCaretDown} />
          </Link>
        </div>
      </Row>
    </Container>
  );
}
