import { Auth } from "./pages/Auth/Index_new";

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
import AboutUsPage from "./pages/Auth/AboutUs";
import HomeGallary from "./pages/Auth/HomeGallary";
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
        <Route path="/" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-condition" element={<Terms />} />
        <Route path="/home-gallary" element={<HomeGallary />} />
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
