// import React, { useState, useEffect, useRef } from "react";
// import { Tabs, Modal, Button, Input, Form, Col, Row, Checkbox, Space } from "antd";
// import axios from "axios";
// import OwlCarousel from "react-owl-carousel3";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import Carousel from "react-bootstrap/Carousel";
// import Main from "../../components/layout/Main";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Accordion } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import ListGroup from "react-bootstrap/ListGroup";

// import LogoImg from "../../assets/images/logo img.png";
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
// import { useAuthContext } from "../../context/AuthContext";
// import lang from "../../helper/langHelper";
// import { Severty, ShowToast } from "../../helper/toast";
// import { PhoneNumberField } from "../../components/InputField";
// import useRequest from "../../hooks/useRequest";
// import apiPath from "../../constants/apiPath";
// import Prouser from "../../assets/images/user.png";
// import { useAppContext } from "../../context/AppContext";
// import moment from "moment";
// import DownloadForm from "../../components/DownloadForm";
// import EnhancedDownloadForm from "../../components/EnhancedDownloadForm";
// import ModernHeroSection from "../../components/ModernHeroSection";
// import "../../assets/styles/hero-styles.css";

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

// function LandingIndex() {
//   const navigate = useNavigate();
//   const targetcontact = useRef(null);
//   const targetChoose = useRef(null);
//   const { request } = useRequest();
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [linkType, setLinkType] = useState("Story");
//   const [headingTitle, setHeadingTitle] = useState("Instagram,  Story Downloader");
//   const [headingSubTitle, setHeadingSubTitle] = useState("Download your Instagram story and highlights easily!*");

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
//     // Make sure the URL is provided
//     // if (!reelUrl) {
//     //   console.error("URL is required for download.");
//     //   return;
//     // }
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

//         // Create an anchor tag to trigger the download
//         const link = document.createElement("a");

//         // Extract the file name from the URL
//         const fileName = decodeURIComponent(data?.downloadUrl?.media?.[0]?.url.split("/").pop());

//         // Use the actual file URL (not the thumbnail URL) for downloading
//         const mediaUrl = data?.downloadUrl?.media?.[0]?.url; // Access the URL of the media file

//         if (mediaUrl) {
//           link.href = mediaUrl; // Set the href to the actual media URL
//           link.download = fileName; // Set the suggested filename

//           // Trigger the download
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

//   const handleChangeLinkType = (type, title, subtitle) => {
//     setLinkType(type);
//     setHeadingTitle(title);
//     setHeadingSubTitle(subtitle);
//   };

//   return (
//     <Main>
//       <>
//         <div className="header extra">
//           <Navbar bg="" expand="lg" className="navbar navbar-expand-lg navbar-light">
//             <Container>
//               <Navbar.Brand onClick={() => navigate("/")}>
//                 <img src={LogoImg} alt="Logo" className="home-logo" />
//               </Navbar.Brand>
//               <Navbar.Toggle aria-controls="navbarSupportedContent" />
//               <Navbar.Collapse id="navbarSupportedContent">
//                 <Nav className="ms-auto mb-2 mb-lg-0">
//                   <Nav.Link onClick={() => navigate("/login")} className="nav-link active">
//                     {lang("Home")}
//                   </Nav.Link>
//                   <Nav.Link onClick={() => navigate("/aboutUs")} className="nav-link">
//                     {lang("About us")}
//                   </Nav.Link>
//                   <Nav.Link onClick={handleScrollChoose} className="nav-link">
//                     {lang("Why Choose")}
//                   </Nav.Link>
//                   {/* <Nav.Link
//                     onClick={() => navigate("/home-gallary")}
//                     className="nav-link"
//                   >
//                     {lang("Gallery")}
//                   </Nav.Link> */}
//                   <Nav.Link onClick={handleScrollContact} className="nav-link">
//                     {lang("Contact Us")}
//                   </Nav.Link>
//                   {/* <Nav.Item className="header-button-main1">
//                     <Button
//                       variant="primary"
//                       onClick={() => setShowLogin(true)}
//                       className="btn-first"
//                     >
//                       {lang("Login")}
//                     </Button>
//                     <Button
//                       variant="secondary"
//                       onClick={() => setShowSignUp(true)}
//                       className="btn-first-1"
//                     >
//                       {lang("Sign Up")}
//                     </Button>
//                   </Nav.Item> */}
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>

//         {/* Modern Hero Section */}
//         <ModernHeroSection />

//         <section className="background-main-color">
//           <div className="download-container">
//             <div style={{ padding: 20 }}>
//               <div class="category-buttons btn-group w-100 mb-2" role="group" aria-label="Category buttons">
//                 <a
//                   onClick={() => handleChangeLinkType("Video", "Instagram Video Downloader", "Download Instagram Video, Reels, Photo, IGTV, and carousels*")}
//                   class={`btn flex-grow-1 border-0 rounded-start ${linkType === "Video" ? "btn-selected disabled" : ""} `}
//                 >
//                   Video
//                 </a>
//                 <a
//                   onClick={() => handleChangeLinkType("Photo", "Instagram Photo Downloader", "Download Instagram Photos*")}
//                   class={`btn flex-grow-1 border-0  ${linkType === "Photo" ? "btn-selected disabled" : ""} `}
//                 >
//                   Photo
//                 </a>
//                 <a
//                   onClick={() => handleChangeLinkType("Story", "Instagram,  Story Downloader", "Download your Instagram story and highlights easily!*")}
//                   class={`btn flex-grow-1 border-0  ${linkType === "Story" ? "btn-selected disabled" : ""} `}
//                 >
//                   Story
//                 </a>
//                 <a
//                   onClick={() => handleChangeLinkType("Reel", "Instagram Reels Downloader", "Download Instagram Reels videos easily!*")}
//                   class={`btn flex-grow-1 border-0 ${linkType === "Reel" ? "btn-selected disabled" : ""}  `}
//                 >
//                   Reels
//                 </a>
//                 <a
//                   onClick={() => handleChangeLinkType("IGTV", "IGTV Video Downloader", "Download Instagram IGTV Videos*")}
//                   class={`btn flex-grow-1 border-0 rounded-end  ${linkType === "IGTV" ? "btn-selected disabled" : ""} `}
//                 >
//                   IGTV
//                 </a>
//               </div>
//             </div>

//             <div className="heading-box-dicccc">
//               <h1 id="title">{headingTitle}</h1>
//               <h2 id="subtitle">{headingSubTitle}</h2>
//             </div>
//             <div class="input-container">
//               <EnhancedDownloadForm />
//             </div>
//           </div>
//         </section>

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
//                     <h4>{lang("Why Choose us ?")}</h4>
//                     <div className="bar" />
//                     <span>{lang("Insave – Your Go-To Instagram Story Saver. Fast, Easy & No Watermarks!")}</span>
//                   </div>
//                   <div className="booking-list">
//                     <ul>
//                       <li>
//                         <span>
//                           <img src={CheckImg} alt="#" />
//                         </span>
//                         <div>
//                           <h2>{lang("🚀 Instant Story Saving")}</h2>
//                           <p>{lang("Download Instagram stories in seconds—fast, hassle-free, and no sign-up required!")}</p>
//                         </div>
//                       </li>
//                       <li>
//                         <span>
//                           <img src={CheckImg} alt="#" />
//                         </span>
//                         <div>
//                           <h2>{lang("🎨 High-Quality Downloads")}</h2>
//                           <p>{lang("Save stories in original quality with no watermarks, keeping every detail crystal clear.")}</p>
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
//                           <p>{lang("One-tap story saving—just search, click, and download. No complicated steps!")}</p>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                   {/* <button className="btn-first" id="button-main-3">
//                     Book an Appointment
//                   </button> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="testimonial-sec">
//           <div className="container">
//             <div className="teext2">
//               <h4>{lang("Happy client says")}</h4>
//               <div className="bar" id="bar-1" />
//               <p>{lang("We take pride in delivering exceptional service. Trusted by thousands of users worldwide – see what our happy clients say about Insave!")}</p>
//             </div>
//             <Testimonial />
//           </div>
//         </section>
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
//         <section className="faq-section">
//           <div className="container for-width">
//             <div className="row">
//               <div className="">
//                 <div className="headding text-center">
//                   <h4>Frequently asked questions</h4>
//                   <div className="bar" id="bar-1" />
//                   <span>Everything you need to know about the product and billing.</span>
//                 </div>
//                 <Accordion>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header className="freq-ask-qqq">{lang("What is Insave?")}</Accordion.Header>
//                     <Accordion.Body>{lang("Insave is a free tool that allows you to download and save Instagram stories in high quality, without watermarks or sign-ups.")}</Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//                 <Accordion>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header className="freq-ask-qqq">{lang("How do I download Instagram stories using Insave?")}</Accordion.Header>
//                     <Accordion.Body>{lang("Simply enter the Instagram link, select the story you want, and click the Download button. The story will be saved instantly!")}</Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//                 <Accordion>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header className="freq-ask-qqq">{lang("Do I need to log in to use Insave?")}</Accordion.Header>
//                     <Accordion.Body>{lang("No, Insave does not require you to log in. You can save stories anonymously.")}</Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//                 <Accordion>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header className="freq-ask-qqq">{lang("Is Insave free to use?")}</Accordion.Header>
//                     <Accordion.Body>{lang("Yes! Insave is completely free, with no hidden charges.")}</Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//                 <Accordion>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header className="freq-ask-qqq">{lang("Can I download stories from private accounts?")}</Accordion.Header>
//                     <Accordion.Body>{lang("No, Insave only allows downloading from public accounts due to Instagram's privacy policies.")}</Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//                 <div>
//                   <div></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* <section className="bg-img2">
//           <Subscribe />
//         </section> */}
//       </>
//     </Main>
//   );
// }

// export default LandingIndex;

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
//         // label={lang("Email Address")}
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
//           // label={lang("Last Name")}
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
//             <Checkbox
//             //defaultChecked={true}
//             >
//               {lang("You agree to our friendly privacy policy.")}
//             </Checkbox>
//           </Space>
//         </Form.Item>
//       </Col>

//       <Form.Item>
//         <Button
//           className="float-right float-right-main-new-send-button"
//           type="primary"
//           htmlType="submit"

//           // loading={loading}
//         >
//           {lang("Send")}
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };
