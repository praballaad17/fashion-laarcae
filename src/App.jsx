import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ToastProvider } from "./context/toastContext";
import { UserProvider } from "./context/userContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import useAuthListener from "./hooks/useAuthListener";
import * as ROUTES from "./constant/routes";
import Footer from "./components/Footer";

// import Shop from "./components/shop/Shop";
// import Cart from "./components/Cart";
// import WishList from "./components/WishList";
// import Login from "./components/Login";
// import Checkout from "./components/Checkout";
// import MyAccount from "./components/MyAccount";
// import Contact from "./components/Contact";
// import SingleProduct from "./components/singleProduct/SingleProduct";
// import ToastBox from "./components/toast/ToastBox";

const Shop = lazy(() => import("./components/shop/Shop"));
const Cart = lazy(() => import("./components/cart/Cart"));
const WishList = lazy(() => import("./components/WishList"));
const Login = lazy(() => import("./components/Login"));
const Checkout = lazy(() => import("./components/Checkout"));
const MyAccount = lazy(() => import("./components/MyAccount"));
const Contact = lazy(() => import("./components/Contact"));
const SingleProduct = lazy(() =>
  import("./components/singleProduct/SingleProduct")
);
const ToastBox = lazy(() => import("./components/toast/ToastBox"));

function App() {
  const { userId } = useAuthListener();

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
        <UserProvider userId={userId}>
          <Router>
            <NavBar />
            <ToastBox />
            <Suspense fallback={<div></div>}>
              <Routes>
                <Route
                  path={ROUTES.DASHBOARD}
                  element={<Home userId={userId} />}
                />
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

            {quickTop && (
              <div className="quick-up" onClick={handleScrollToTop}>
                <FontAwesomeIcon icon={faAngleDoubleUp} />
              </div>
            )}
            <Footer />
          </Router>
        </UserProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
