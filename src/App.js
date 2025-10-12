import { LandingIndex } from "./pages/Index";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AppContextProvider } from "./context/AppContext";
import React, { Suspense } from "react";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Privacy from "./pages/Auth/Privacy";
import Terms from "./pages/Auth/Terms";

window.Buffer = window.Buffer || require("buffer").Buffer;
function App() {
  return (
    <AuthProvider>
      <AppContextProvider>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <ScrollToTop />
            <ToastContainer closeOnClick={false} />
            <AppRoutes />
          </BrowserRouter>
        </Suspense>
      </AppContextProvider>
    </AuthProvider>
  );
}

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingIndex />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-condition" element={<Terms />} />
      </Routes>
    </>
  );
};

const Layout = () => {
  return (
    <>
      {" "}
      <Outlet />{" "}
    </>
  );
};

export default App;
