// import React, { useState, useEffect, useRef } from "react";
// import { Layout, Menu, Input, Button, Card, Row, Col, Typography, Space, Divider, Collapse, Form, Checkbox } from "antd";
// import { DownloadOutlined, LinkOutlined, CheckCircleOutlined, ThunderboltOutlined, SafetyOutlined, GiftOutlined } from "@ant-design/icons";
// import { Link, useNavigate } from "react-router-dom";
// import { Navbar, Nav, Container, Accordion } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import OwlCarousel from "react-owl-carousel3";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import MultiPlatformDownloadForm from "../../components/MultiPlatformDownloadForm";
// import Main from "../../components/layout/Main";
// import "../../assets/css/header-animations.css";
// import { useAuthContext } from "../../context/AuthContext";
// import lang from "../../helper/langHelper";
// import { Severty, ShowToast } from "../../helper/toast";
// import { PhoneNumberField } from "../../components/InputField";
// import useRequest from "../../hooks/useRequest";
// import apiPath from "../../constants/apiPath";
// import { useAppContext } from "../../context/AppContext";
// import moment from "moment";

// // Import images
// import EmailImg from "../../assets/images/email.png";
// import AndroidDownloadImg from "../../assets/images/android_download (1).png";
// import IosDownloadImg from "../../assets/images/ios_download (1).png";
// import BusinessWomImg from "../../assets/images/businesswoman-showing-her-smartphone-app-taxi-driver 1.png";
// import CheckImg from "../../assets/images/check-circle.png";
// import Newphone1Img from "../../assets/images/new phone img 2 .png";
// import MyntmobImg from "../../assets/images/mynt-mob1.png";
// import Groth1Img from "../../assets/images/groth1.png";
// import Groth2Img from "../../assets/images/excellince.png";
// import Groth3Img from "../../assets/images/gobally.png";
// import PlanitmainImg from "../../assets/images/planit img.png";
// import Whyus1Img from "../../assets/images/Rectangle 4248.png";
// import Whyus2Img from "../../assets/images/iconoir_quote-solid.png";
// import Modelimage1Img from "../../assets/images/model-img.png";
// import Prouser from "../../assets/images/user.png";

// const LogoImg = "FSMVID";

// const responsiveSetting = {
//   0: {
//     items: 1,
//   },
//   600: {
//     items: 1.2,
//   },
//   1000: {
//     items: 2,
//   },
//   1200: {
//     items: 2,
//   },
//   1400: {
//     items: 2,
//   },
// };

// const { Panel } = Collapse;

// function LandingIndex() {
//   const navigate = useNavigate();
//   const targetcontact = useRef(null);
//   const targetChoose = useRef(null);
//   const { request } = useRequest();
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);

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

//   const onSubmit = (values) => {
//     setLoading(true);
//     const payload = {
//       videoUrl: values.link,
//     };
//     console.log(payload);
//     request({
//       url: `${apiPath.globalDownload}`,
//       method: "POST",
//       data: payload,
//       onSuccess: (data) => {
//         console.log("Download initiated successfully:", data);
//         const link = document.createElement("a");
//         const fileName = decodeURIComponent(data?.downloadUrl?.media?.[0]?.url.split("/").pop());
//         const mediaUrl = data?.downloadUrl?.media?.[0]?.url;

//         if (mediaUrl) {
//           link.href = mediaUrl;
//           link.download = fileName;
//           link.click();
//           form.resetFields();
//         } else {
//           console.error("Download URL not found.");
//         }
//         setLoading(false);
//       },
//       onError: (err) => {
//         setLoading(false);
//         console.error("Error during download:", err);
//         ShowToast("Invalid Link! Please try again.", Severty.ERROR);
//       },
//     });
//   };

//   return (
//     <Main>
//       <>
//         {/* Fixed Header */}
//         <div className="header extra" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: "white", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
//           <Navbar bg="" expand="lg" className="navbar navbar-expand-lg navbar-light">
//             <Container>
//               <Navbar.Brand onClick={() => navigate("/")} className="navbar-brand">
//                 <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                     <div
//                       className="logo-icon"
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         backgroundColor: "#4A90E2",
//                         borderRadius: "8px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         color: "white",
//                         fontWeight: "bold",
//                         fontSize: "18px",
//                       }}
//                     >
//                       ↓
//                     </div>
//                     <span
//                       className="logo-text"
//                       style={{
//                         fontSize: "28px",
//                         fontWeight: "bold",
//                         color: "#4A90E2",
//                       }}
//                     >
//                       {LogoImg}
//                     </span>
//                   </div>
//                   <span
//                     className="tagline"
//                     style={{
//                       fontSize: "12px",
//                       color: "#666",
//                       marginTop: "-5px",
//                     }}
//                   >
//                     Free Social Media Video Downloader
//                   </span>
//                 </div>
//               </Navbar.Brand>
//               <Navbar.Toggle className="navbar-toggler" aria-controls="navbarSupportedContent" />
//               <Navbar.Collapse id="navbarSupportedContent">
//                 <Nav className="ms-auto mb-2 mb-lg-0">
//                   <Nav.Link onClick={() => navigate("/login")} className="nav-link" style={{ animation: "fadeInRight 0.8s ease-out 0.1s both" }}>
//                     {lang("Home")}
//                   </Nav.Link>
//                   <Nav.Link onClick={() => navigate("/aboutUs")} className="nav-link" style={{ animation: "fadeInRight 0.8s ease-out 0.2s both" }}>
//                     {lang("Platforms")}
//                   </Nav.Link>
//                   <Nav.Link onClick={handleScrollChoose} className="nav-link" style={{ animation: "fadeInRight 0.8s ease-out 0.3s both" }}>
//                     {lang("Blog")}
//                   </Nav.Link>
//                   <Nav.Link onClick={handleScrollContact} className="nav-link" style={{ animation: "fadeInRight 0.8s ease-out 0.4s both" }}>
//                     {lang("FAQ")}
//                   </Nav.Link>
//                   <Nav.Link onClick={handleScrollContact} className="nav-link" style={{ animation: "fadeInRight 0.8s ease-out 0.5s both" }}>
//                     {lang("Contact")}
//                   </Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>

//         {/* Hero Section - FSMVID Style */}
//         <section
//           style={{
//             background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//             minHeight: "100vh",
//             display: "flex",
//             alignItems: "center",
//             paddingTop: "80px",
//           }}
//         >
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-md-12 col-lg-12 text-center">
//                 <div className="hero-content">
//                   {/* Hero Badge */}
//                   <div className="hero-badge" style={{ marginBottom: "30px" }}>
//                     <span
//                       style={{
//                         background: "rgba(255,255,255,0.2)",
//                         padding: "8px 16px",
//                         borderRadius: "20px",
//                         color: "white",
//                         fontSize: "14px",
//                         display: "inline-flex",
//                         alignItems: "center",
//                         gap: "8px",
//                       }}
//                     >
//                       ⚡ Free Online Downloader
//                     </span>
//                   </div>

//                   {/* Main Title */}
//                   <h1
//                     style={{
//                       fontSize: "3.5rem",
//                       fontWeight: "bold",
//                       color: "white",
//                       marginBottom: "20px",
//                       lineHeight: "1.2",
//                     }}
//                   >
//                     Free Social Media
//                     <br />
//                     <span style={{ color: "#4facfe" }}>Video Downloader</span>
//                   </h1>

//                   {/* Subtitle */}
//                   <p
//                     style={{
//                       fontSize: "1.2rem",
//                       color: "rgba(255,255,255,0.9)",
//                       marginBottom: "40px",
//                       maxWidth: "600px",
//                       margin: "0 auto 40px auto",
//                     }}
//                   >
//                     Download videos, images, and shorts from YouTube, TikTok, Facebook, Instagram, Twitter, and 15+ other platforms.
//                     <br />
//                     Fast, secure, and completely free.
//                   </p>

//                   {/* Feature Grid */}
//                   <div
//                     className="features-grid"
//                     style={{
//                       display: "grid",
//                       gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//                       gap: "20px",
//                       maxWidth: "800px",
//                       margin: "0 auto 50px auto",
//                     }}
//                   >
//                     <div
//                       style={{
//                         background: "rgba(255,255,255,0.1)",
//                         padding: "15px",
//                         borderRadius: "10px",
//                         textAlign: "center",
//                         color: "white",
//                       }}
//                     >
//                       <CheckCircleOutlined style={{ fontSize: "24px", marginBottom: "10px", color: "#4facfe" }} />
//                       <div>No registration required</div>
//                     </div>
//                     <div
//                       style={{
//                         background: "rgba(255,255,255,0.1)",
//                         padding: "15px",
//                         borderRadius: "10px",
//                         textAlign: "center",
//                         color: "white",
//                       }}
//                     >
//                       <CheckCircleOutlined style={{ fontSize: "24px", marginBottom: "10px", color: "#4facfe" }} />
//                       <div>100% free forever</div>
//                     </div>
//                     <div
//                       style={{
//                         background: "rgba(255,255,255,0.1)",
//                         padding: "15px",
//                         borderRadius: "10px",
//                         textAlign: "center",
//                         color: "white",
//                       }}
//                     >
//                       <CheckCircleOutlined style={{ fontSize: "24px", marginBottom: "10px", color: "#4facfe" }} />
//                       <div>High quality downloads</div>
//                     </div>
//                     <div
//                       style={{
//                         background: "rgba(255,255,255,0.1)",
//                         padding: "15px",
//                         borderRadius: "10px",
//                         textAlign: "center",
//                         color: "white",
//                       }}
//                     >
//                       <CheckCircleOutlined style={{ fontSize: "24px", marginBottom: "10px", color: "#4facfe" }} />
//                       <div>Multiple formats</div>
//                     </div>
//                   </div>

//                   {/* Download Form */}
//                   <div
//                     className="download-form"
//                     style={{
//                       background: "rgba(255,255,255,0.95)",
//                       padding: "30px",
//                       borderRadius: "15px",
//                       maxWidth: "600px",
//                       margin: "0 auto",
//                       boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//                     }}
//                   >
//                     <Form form={form} onFinish={onSubmit} layout="inline" style={{ display: "flex", gap: "10px", alignItems: "stretch" }}>
//                       <Form.Item name="link" rules={[{ required: true, message: "Please enter video URL" }]} style={{ flex: 1, marginBottom: 0 }}>
//                         <Input
//                           placeholder="Enter Video URL"
//                           size="large"
//                           style={{
//                             borderRadius: "8px",
//                             border: "2px solid #e0e0e0",
//                             padding: "12px 16px",
//                           }}
//                         />
//                       </Form.Item>
//                       <Form.Item style={{ marginBottom: 0 }}>
//                         <Button
//                           type="primary"
//                           htmlType="submit"
//                           size="large"
//                           loading={loading}
//                           style={{
//                             background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//                             border: "none",
//                             borderRadius: "8px",
//                             padding: "12px 24px",
//                             fontWeight: "bold",
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "8px",
//                           }}
//                         >
//                           ▶ Process
//                         </Button>
//                       </Form.Item>
//                     </Form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Why Choose FSMVID Section */}
//         <section className="choose-us" id="choose" ref={targetChoose}>
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-lg-6">
//                 <div className="book-left ">
//                   <img src={Newphone1Img} />
//                 </div>
//               </div>
//               <div className="col-md-12 col-lg-6 ">
//                 <div className="book-right">
//                   <div className="headding">
//                     <h4>{lang("Why Choose FSMVID?")}</h4>
//                     <div className="bar" />
//                     <span>{lang("Your Go-To Multi-Platform Video Downloader. Fast, Easy & No Watermarks!")}</span>
//                   </div>
//                   <div className="booking-list">
//                     <ul>
//                       <li>
//                         <span>
//                           <img src={CheckImg} alt="#" />
//                         </span>
//                         <div>
//                           <h2>{lang("🚀 Multi-Platform Support")}</h2>
//                           <p>{lang("Download from YouTube, Instagram, Facebook, Twitter, TikTok & 15+ other platforms - all in one place!")}</p>
//                         </div>
//                       </li>
//                       <li>
//                         <span>
//                           <img src={CheckImg} alt="#" />
//                         </span>
//                         <div>
//                           <h2>{lang("🎨 High-Quality Downloads")}</h2>
//                           <p>{lang("Save videos in original quality with no watermarks, keeping every detail crystal clear.")}</p>
//                         </div>
//                       </li>
//                       <li>
//                         <span>
//                           <img src={CheckImg} alt="#" />
//                         </span>
//                         <div>
//                           <h2>{lang("🔗 Secure & Reliable")}</h2>
//                           <p>{lang("Your privacy matters! Download safely without sharing personal info or logging in.")}</p>
//                         </div>
//                       </li>
//                       <li>
//                         <span>
//                           <img src={CheckImg} alt="#" />
//                         </span>
//                         <div>
//                           <h2>{lang("📲 Easy & Free to Use")}</h2>
//                           <p>{lang("One-tap video downloading—just paste the link and download. No complicated steps!")}</p>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="testimonial-sec">
//           <div className="container">
//             <div className="teext2">
//               <h4>{lang("Happy users say")}</h4>
//               <div className="bar" id="bar-1" />
//               <p>{lang("We take pride in delivering exceptional service. Trusted by thousands of users worldwide – see what our happy users say about FSMVID!")}</p>
//             </div>
//             <Testimonial />
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contactus" className="bg-img2" ref={targetcontact}>
//           <div className="container for-width">
//             <div className="from-main">
//               <div className="businesswomenimg">
//                 <img src={BusinessWomImg} />
//               </div>
//               <div className="form-11">
//                 <div className="tophead">
//                   <h3>{lang("Get in touch")}</h3>
//                   <div className="bar" />
//                   <p>{lang("Our friendly team would love to hear from you.")}</p>
//                 </div>
//                 <div className="containerni">
//                   <SupportSection />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section className="faq-section">
//           <div className="container for-width">
//             <div className="row">
//               <div className="">
//                 <div className="headding text-center">
//                   <h4>Frequently asked questions</h4>
//                   <div className="bar" id="bar-1" />
//                   <span>Everything you need to know about FSMVID.</span>
//                 </div>
//                 <Accordion>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header className="freq-ask-qqq">{lang("What is FSMVID?")}</Accordion.Header>
//                     <Accordion.Body>
//                       {lang(
//                         "FSMVID is a free tool that allows you to download videos from multiple platforms like YouTube, Instagram, Facebook, Twitter, TikTok & 15+ other platforms in high quality, without watermarks or sign-ups."
//                       )}
//                     </Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//                 <Accordion>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header className="freq-ask-qqq">{lang("Which platforms does FSMVID support?")}</Accordion.Header>
//                     <Accordion.Body>
//                       {lang("We support YouTube, Instagram, Facebook, Twitter/X, TikTok, and 15+ other platforms. Simply paste any video link from these platforms and download instantly!")}
//                     </Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//                 <Accordion>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header className="freq-ask-qqq">{lang("Do I need to log in to use FSMVID?")}</Accordion.Header>
//                     <Accordion.Body>{lang("No, FSMVID does not require you to log in. You can download videos anonymously.")}</Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//                 <Accordion>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header className="freq-ask-qqq">{lang("Is FSMVID free to use?")}</Accordion.Header>
//                     <Accordion.Body>{lang("Yes! FSMVID is completely free, with no hidden charges.")}</Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//                 <Accordion>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header className="freq-ask-qqq">{lang("Can I download videos from private accounts?")}</Accordion.Header>
//                     <Accordion.Body>{lang("No, FSMVID only allows downloading from public accounts due to platform privacy policies.")}</Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     </Main>
//   );
// }

// const Auth = LandingIndex;
// export { Auth };

// const Testimonial = () => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const { request } = useRequest();
//   const [form] = Form.useForm();
//   const { language } = useAppContext();

//   const fetch = () => {
//     setLoading(true);
//     request({
//       url: apiPath.testimonial,
//       method: "GET",
//       onSuccess: ({ data }) => {
//         if (data.docs) {
//           console.log(data, "data...");
//           setData(data.docs ?? []);
//         }
//         setLoading(false);
//       },
//       onError: (error) => {
//         setLoading(false);
//         ShowToast(error?.response?.data?.message, Severty.ERROR);
//       },
//     });
//   };

//   useEffect(() => {
//     fetch();
//   }, []);

//   return (
//     <>
//       <OwlCarousel items="2" className="owl-theme" loop={false} margin={10} nav={false} dots={true} responsive={responsiveSetting}>
//         {data?.length && data.length > 0
//           ? data?.map((item) => (
//               <div className="item">
//                 <div className="testimonial-wrap">
//                   <div className="main-img">
//                     <h5>
//                       <img src={Whyus2Img} alt="#" />
//                     </h5>
//                     <p>{language !== "en" && language !== null ? item?.[`${language}_name`] ?? item?.name : item?.name}</p>
//                     <div className="author-wrap">
//                       <h4
//                         dangerouslySetInnerHTML={{
//                           __html: language !== "en" && language !== null ? item?.[`${language}_description`] ?? item?.description : item?.description,
//                         }}
//                       />

//                       <h6>{item.created_at ? moment(item.created_at).format("ll") : ""}</h6>
//                     </div>
//                   </div>
//                   <div className="main-img2">
//                     <img src={item?.image ?? Prouser} alt="" />
//                   </div>
//                 </div>
//               </div>
//             ))
//           : ""}
//       </OwlCarousel>
//     </>
//   );
// };

// const SupportSection = () => {
//   const [loading, setLoading] = useState(false);
//   const [mobileNumber, setMobileNumber] = useState(null);
//   const { request } = useRequest();
//   const [form] = Form.useForm();

//   const handleMobileNumberChange = (value, data, type) => {
//     let country_code = data?.dialCode;
//     setMobileNumber({
//       country_code: country_code,
//       mobile_number: value.slice(data?.dialCode?.length),
//     });
//   };

//   const onSubmit = (values) => {
//     setLoading(true);
//     let payload = { ...values, ...mobileNumber };

//     request({
//       url: apiPath.support,
//       method: "POST",
//       data: { ...payload },
//       onSuccess: (data) => {
//         setLoading(false);
//         if (data.status) {
//           form.resetFields();
//           ShowToast(data.message, Severty.SUCCESS);
//         } else {
//           setLoading(false);
//           ShowToast(data.message, Severty.ERROR);
//         }
//       },
//       onError: (error) => {
//         setLoading(false);
//         ShowToast(error?.response?.data?.message, Severty.ERROR);
//       },
//     });
//   };

//   return (
//     <Form form={form} onFinish={(e) => onSubmit(e)} layout="vertical" className="row-col signup5-model">
//       <Row gutter={24}>
//         <Col span={24} md={12}>
//           <Form.Item
//             className="username"
//             name="first_name"
//             rules={[
//               {
//                 max: 250,
//                 message: lang("Name should contain more then 250 characters!"),
//               },
//               {
//                 required: true,
//                 message: lang("Please Enter  Name"),
//               },
//             ]}
//           >
//             <Input placeholder={lang("Enter First Name")} />
//           </Form.Item>
//         </Col>
//         <Col span={24} md={12}>
//           <Form.Item
//             className="username"
//             name="last_name"
//             rules={[
//               {
//                 max: 250,
//                 message: lang("Name should contain more then 250 characters!"),
//               },
//               {
//                 required: true,
//                 message: lang("Please Enter  Name"),
//               },
//             ]}
//           >
//             <Input placeholder={lang("Enter Last Name")} />
//           </Form.Item>
//         </Col>
//       </Row>

//       <Form.Item
//         className="username"
//         name="email"
//         rules={[
//           {
//             type: "email",
//             message: lang("Please enter a valid email address!"),
//           },
//           {
//             max: 255,
//             message: lang("Email address not more then 255 characters!"),
//           },
//           {
//             required: true,
//             message: lang("Please enter email!"),
//           },
//         ]}
//       >
//         <Input placeholder={lang("Enter Email address")} />
//       </Form.Item>

//       <PhoneNumberField
//         label={""}
//         name="mobile"
//         placeholder={lang("Enter Phone Number")}
//         cover={{ md: 24 }}
//         colProps={{ sm: 24, span: 24 }}
//         className="new-mobile-passwordnew username"
//         onChange={handleMobileNumberChange}
//         number={mobileNumber?.mobile_number}
//       />

//       <Col span={24} md={24}>
//         <Form.Item
//           className="username new-text-area-main"
//           name="message"
//           rules={[
//             {
//               max: 1000,
//               message: lang("Message should contain more then 1000 characters!"),
//             },
//             {
//               required: true,
//               message: lang("Please Enter  Message"),
//             },
//           ]}
//         >
//           <Input.TextArea maxLength={10} minLength={5} placeholder={lang("Enter Your Message")} />
//         </Form.Item>
//       </Col>

//       <Col md={24}>
//         <Form.Item
//           name="agree"
//           valuePropName="checked"
//           rules={[
//             {
//               validator: (_, value) => {
//                 if (value !== undefined && value === true) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject(new Error(lang("Please confirm  agree to our friendly privacy policy.")));
//               },
//             },
//           ]}
//         >
//           <Space align="baseline">
//             <Checkbox>{lang("You agree to our friendly privacy policy.")}</Checkbox>
//           </Space>
//         </Form.Item>
//       </Col>

//       <Form.Item>
//         <Button className="float-right float-right-main-new-send-button" type="primary" htmlType="submit">
//           {lang("Send")}
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };
