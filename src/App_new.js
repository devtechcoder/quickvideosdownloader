// import { Auth } from "./pages/Index_new";

// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import { AppContextProvider } from "./context/AppContext";
// import React, { Suspense, useState } from "react";
// import "./assets/styles/main.css";
// import "./assets/styles/responsive.css";
// import ScrollToTop from "./components/ScrollToTop";
// import Loader from "./components/Loader";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Header from "./components/layout/Header";
// import PrivateRoute from "./components/PrivateRoute";
// import AboutUsPage from "./pages/Auth/AboutUs";
// import HomeGallary from "./pages/Auth/HomeGallary";
// import Privacy from "./pages/Auth/Privacy";
// import Terms from "./pages/Auth/Terms";

// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />;

// window.Buffer = window.Buffer || require("buffer").Buffer;
// function App() {
//   return (
//     <AuthProvider>
//       <AppContextProvider>
//         <Suspense fallback={<Loader />}>
//           <BrowserRouter>
//             <ScrollToTop />
//             <ToastContainer closeOnClick={false} />
//             <AppRoutes />
//           </BrowserRouter>
//         </Suspense>
//       </AppContextProvider>
//     </AuthProvider>
//   );
// }

// const AppRoutes = () => {
//   const [query, setQuery] = useState("");

//   return (
//     <>
//       {" "}
//       {<Header query={query} setQuery={setQuery} />}
//       <Routes>
//         <Route path="/" element={<Auth />} />
//         <Route path="/signup" element={<Auth />} />
//         <Route path="/aboutUs" element={<AboutUsPage />} />
//         <Route path="/privacy-policy" element={<Privacy />} />
//         <Route path="/terms-condition" element={<Terms />} />
//         <Route path="/home-gallary" element={<HomeGallary />} />
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <Layout />
//             </PrivateRoute>
//           }
//         ></Route>
//       </Routes>
//     </>
//   );
// };

// const Layout = () => {
//   return (
//     <>
//       {" "}
//       <Outlet />{" "}
//     </>
//   );
// };

// export default App;
