import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { UserProvider } from "./context/userContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import * as ROUTES from "./constant/routes";
import SignleProduct from "./components/SignleProduct";
import Shop from "./components/shop/Shop";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

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
      <UserProvider user={user}>
        <Router>
          <NavBar />
          <Suspense fallback={<div></div>}>
            <Routes>
              <Route path={ROUTES.DASHBOARD} element={<Home user={user} />} />
              <Route path={ROUTES.SIGNLEPRODUCT} element={<SignleProduct />} />
              <Route path={ROUTES.SHOP} element={<Shop />} />
              <Route path={ROUTES.CART} element={<Cart />} />
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
    </div>
  );
}

export default App;
