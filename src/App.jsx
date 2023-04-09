import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { UserProvider } from "./context/userContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import * as ROUTES from "./constant/routes";
import Shop from "./components/shop/Shop";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import WishList from "./components/WishList";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import MyAccount from "./components/MyAccount";
import Contact from "./components/Contact";
import SingleProduct from "./components/singleProduct/SingleProduct";
import { ToastProvider } from "./context/toastContext";
import ToastBox from "./components/toast/ToastBox";

function App() {
  const [user, setUser] = useState();
  const [quickTop, setQuick] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const hadleScrollButtonVisiblity = () => {
      window.pageYOffset > 300 ? setQuick(true) : setQuick(false);
    };
    window.addEventListener("scroll", hadleScrollButtonVisiblity);
    return () => {
      window.removeEventListener("scroll", hadleScrollButtonVisiblity);
    };
  }, []);

  return (
    <div className="App">
      <ToastProvider>
        <UserProvider user={user}>
          <Router>
            <NavBar />
            <ToastBox />
            <Suspense fallback={<div></div>}>
              <Routes>
                <Route path={ROUTES.DASHBOARD} element={<Home user={user} />} />
                <Route
                  path={ROUTES.SIGNLEPRODUCT}
                  element={<SingleProduct />}
                />
                <Route path={ROUTES.SHOP} element={<Shop />} />
                <Route path={ROUTES.CART} element={<Cart />} />
                <Route path={ROUTES.WISHLIST} element={<WishList />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
                <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
                <Route path={ROUTES.MYACCOUNT} element={<MyAccount />} />

                {/* <Route
                path={`${ROUTES.DASHBOARD}*`}
                element={<Dashboard user={user} />}
              /> */}

                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </Suspense>
          </Router>
          {quickTop && (
            <div className="quick-up" onClick={handleScrollToTop}>
              <FontAwesomeIcon icon={faAngleDoubleUp} />
            </div>
          )}
          <Footer />
        </UserProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
