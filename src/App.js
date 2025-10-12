import { LandingIndex, PrivacyPolicy, TermCondition, AboutUs, Blog, Faq, Contact } from "./pages/Index";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AppContextProvider } from "./context/AppContext";
import React, { Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

//css files --
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "./assets/css/hero-section.css";
import "./assets/css/sections.css";
import "./assets/css/header-animations.css";
import "./assets/css/legal.css";
import "./assets/css/faq.css";
import "./assets/css/contact.css";
import "./assets/css/footer.css";
import "./assets/css/blog.css";

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
            <Analytics />
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
        {/*  Legal Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermCondition />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/*  Resources Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
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
