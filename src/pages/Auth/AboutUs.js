// import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
// import { Button, Col, Row } from "antd";
// import axios from "axios";
// import moment from "moment";
// import LogoImg from "../../assets/images/logo img.png";
// import Modelimage1Img from "../../assets/images/model-img.png";

// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";

// import "react-phone-input-2/lib/style.css";
// import { Link, useNavigate } from "react-router-dom";
// import { uploadFile } from "react-s3";
// import Prouser from "../../assets/images/user.png";

// import apiPath from "../../constants/apiPath";
// import { useAppContext } from "../../context/AppContext";
// import { AuthContext, useAuthContext } from "../../context/AuthContext";
// import { dateString } from "../../helper/functions";
// import { Severty, ShowToast } from "../../helper/toast";
// import useRequest from "../../hooks/useRequest";
// import AboutUSIMG from "../../assets/images/new-about-us-image.jpg";
// import Main from "../../components/layout/Main";
// import Loader from "../../components/Loader";
// import lang from "../../helper/langHelper";

// window.Buffer = window.Buffer || require("buffer").Buffer;

// function AboutUs() {
//   const { request } = useRequest();

//   const { isMobile, language } = useAppContext();
//   const [loading, setLoading] = useState(false);

//   const [showlogin, setShowLogin] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();
//   const targetChoose = useRef(null);
//   const targetcontact = useRef(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { userProfile, isLoggedIn } = useAuthContext();

//   const fetchData = () => {
//     setLoading(true);
//     request({
//       url: apiPath.baseURL + "/app/content/about-us",
//       method: "GET",
//       onSuccess: (data) => {
//         console.log("data", data);
//         if (!data.status) return ShowToast(data?.message, Severty.ERROR);
//         setData(data?.docs?.[0]);
//         setLoading(false);
//       },
//       onError: (err) => {
//         setLoading(false);
//         console.log(err);
//         ShowToast(err, Severty.ERROR);
//       },
//     });
//   };
//   const smoothScroll = (target) => {
//     target.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleScrollContact = () => {
//     if (targetcontact.current) {
//       smoothScroll(targetcontact.current);
//     }
//   };
//   const handleScrollChoose = () => {
//     if (targetChoose.current) {
//       smoothScroll(targetChoose.current);
//     }
//   };
//   const [loginModal1, setIsModalOpen1] = useState(false);
//   const handleOk1 = () => {
//     setIsModalOpen1(false);
//   };

//   const handleCancel1 = () => {
//     setIsModalOpen1(false);
//   };
//   const [Forgotpassword, setIsModalOpen2] = useState(false);

//   const showModal2 = () => {
//     setIsModalOpen2(true);
//     setIsModalOpen1(false);
//     setIsModalOpen(false);
//   };

//   useEffect(() => {
//     setLoading(true);
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="header extra">
//         <Navbar
//           bg=""
//           expand="lg"
//           className="navbar navbar-expand-lg navbar-light"
//         >
//           <Container>
//             <Navbar.Brand onClick={() => navigate("/")}>
//               <img src={LogoImg} alt="Logo" className="home-logo" />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarSupportedContent" />
//             <Navbar.Collapse id="navbarSupportedContent">
//               <Nav className="ms-auto mb-2 mb-lg-0">
//                 {!isLoggedIn ? (
//                   <Nav.Link onClick={() => navigate("/")} className="nav-link">
//                     {lang("Home")}
//                   </Nav.Link>
//                 ) : (
//                   ""
//                 )}

//                 <Nav.Link
//                   onClick={() => navigate("/aboutUs")}
//                   className="nav-link active"
//                 >
//                   {lang("About us")}
//                 </Nav.Link>
//                 {/* <Nav.Link
//                   onClick={() => navigate("/home-gallary")}
//                   className="nav-link "
//                 >
//                   {lang("Gallery")}
//                 </Nav.Link> */}
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>
//       <Main>
//         <section className="main">
//           <div className="account-outers">
//             <div className="new-about-us-img">
//               <h4>{lang("In Save")}</h4>
//             </div>
//             <Row>
//               <Col span={24} lg={18} xl={15} className="mx-auto  amt-auto">
//                 <div className="about-us-maain">
//                   <h3>{lang("About Us")}</h3>
//                   {loading ? (
//                     <Loader />
//                   ) : (
//                     <div className="about-us-discripton about-us-discripton-new-descriotion">
//                       <p
//                         dangerouslySetInnerHTML={{
//                           __html:
//                             language !== "en" && language !== null
//                               ? data?.[`${language}_description`] ??
//                                 data?.description
//                               : data?.description,
//                         }}
//                       />
//                     </div>
//                   )}
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </section>
//       </Main>
//     </>
//   );
// }

// export const BackArrow = ({}) => {
//   const navigate = useNavigate();
//   return (
//     <div className="fillter-sidebar">
//       <Link onClick={() => navigate(-1)} className="sidebar-btn">
//         <ArrowLeftOutlined />
//       </Link>
//     </div>
//   );
// };

// export default AboutUs;
