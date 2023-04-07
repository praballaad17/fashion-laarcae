import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UserProvider } from "./context/userContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import * as ROUTES from "./constant/routes";
import SignleProduct from "./components/SignleProduct";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <UserProvider user={user}>
        <NavBar />

        <Router>
          <Suspense fallback={<div></div>}>
            <Routes>
              <Route path={ROUTES.DASHBOARD} element={<Home user={user} />} />
              <Route path={ROUTES.SIGNLEPRODUCT} element={<SignleProduct />} />
              {/* <Route
                path={`${ROUTES.DASHBOARD}*`}
                element={<Dashboard user={user} />}
              /> */}

              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </Suspense>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
