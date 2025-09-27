import React, { useState, useEffect, useRef } from "react";
import { Input, Button, Row, Col, Space, Collapse, Form, Checkbox, Card, Typography, Spin, Alert, Divider } from "antd";
import {
  CheckCircleOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  PinterestOutlined,
  VideoCameraOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  SettingOutlined,
  GlobalOutlined,
  SmileOutlined,
  DownloadOutlined,
  CloudServerOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  RetweetOutlined,
  LinkOutlined,
  HighlightOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Accordion, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Main from "../../components/layout/Main";
import "../../assets/css/hero-section.css";
import "../../assets/css/sections.css";
import "../../assets/css/header-animations.css";
import lang from "../../helper/langHelper";
import { Severty, ShowToast } from "../../helper/toast";
import { PhoneNumberField } from "../../components/InputField";
import useRequest from "../../hooks/useRequest";
import apiPath from "../../constants/apiPath";
import { useAppContext } from "../../context/AppContext";
import moment from "moment";

// Import images
import BusinessWomImg from "../../assets/images/businesswoman-showing-her-smartphone-app-taxi-driver 1.png";
import CheckImg from "../../assets/images/check-circle.png";
import Newphone1Img from "../../assets/images/new phone img 2 .png";
import Whyus2Img from "../../assets/images/iconoir_quote-solid.png";
import Prouser from "../../assets/images/user.png";

const LogoImg = "QVD";

const responsiveSetting = {
  0: {
    items: 1,
  },
  600: {
    items: 1.2,
  },
  1000: {
    items: 2,
  },
  1200: {
    items: 2,
  },
  1400: {
    items: 2,
  },
};

function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return "";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return ` - ${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

const { Panel } = Collapse;

function LandingIndex() {
  const navigate = useNavigate();
  const targetcontact = useRef(null);
  const targetFaq = useRef(null);
  const { request } = useRequest();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [mediaInfo, setMediaInfo] = useState(null);
  const [error, setError] = useState(null);

  const smoothScroll = (target) => {
    target.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollContact = () => {
    if (targetcontact.current) {
      smoothScroll(targetcontact.current);
    }
  };
  const handleScrollFaq = () => {
    if (targetFaq.current) {
      smoothScroll(targetFaq.current);
    }
  };

  const onSubmit = (values) => {
    setLoading(true);
    setMediaInfo(null);
    setError(null);
    const payload = {
      videoUrl: values.link,
    };

    request({
      url: `${apiPath.globalDownload}`,
      method: "POST",
      data: payload,
      onSuccess: (data) => {
        setLoading(false);
        if (data.success) {
          setMediaInfo(data);
        } else {
          setError(data.error || "Could not process the video link.");
          ShowToast(data.error || "Could not process the video link.", Severty.ERROR);
        }
      },
      onError: (err) => {
        setLoading(false);
        const errorMessage = err?.response?.data?.error || "Invalid Link or Server Error! Please try again.";
        setError(errorMessage);
        ShowToast(errorMessage, Severty.ERROR);
      },
    });
  };

  const handleDownload = (url, title, format) => {
    // हमारे बैकएंड प्रॉक्सी के लिए URL बनाएँ
    const proxyUrl = `${apiPath.baseURL}${apiPath.proxyDownload}?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&format=${encodeURIComponent(format)}`;

    // एक अस्थायी एंकर (<a>) एलिमेंट बनाएँ
    const link = document.createElement("a");
    link.href = proxyUrl;

    // यह ब्राउज़र को बताता है कि लिंक पर क्लिक करने पर नेविगेट करने के बजाय फ़ाइल डाउनलोड करनी है।
    // सर्वर से भेजा गया फ़ाइल नाम प्राथमिकता लेगा।
    link.setAttribute("download", `${title || "video"}.${format}`);

    // इसे डॉक्यूमेंट में जोड़ें, क्लिक करें, और फिर हटा दें।
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    ShowToast("Your download has started!", Severty.SUCCESS);
  };

  return (
    <Main>
      <>
        {/* Fixed Header */}
        <div className="qvd-header">
          <Navbar bg="transparent" expand="lg" className="navbar-light p-0">
            <Container>
              <Navbar.Brand onClick={() => navigate("/")} className="qvd-navbar-brand py-2">
                <div className="qvd-logo-container">
                  <div className="qvd-logo-icon">↓</div>
                  <span className="qvd-logo-text">{LogoImg}</span>
                </div>
                <span className="qvd-tagline">Quick Video Downloader</span>
              </Navbar.Brand>
              <Navbar.Toggle className="navbar-toggler" aria-controls="navbarSupportedContent" />
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ms-auto mb-2 mb-lg-0 qvd-nav">
                  <Nav.Link onClick={() => navigate("/")} className="nav-link">
                    {lang("Home")}
                  </Nav.Link>
                  <NavDropdown title={lang("Platforms")} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#platform/youtube">YouTube Downloader</NavDropdown.Item>
                    <NavDropdown.Item href="#platform/tiktok">TikTok Downloader</NavDropdown.Item>
                    <NavDropdown.Item href="#platform/instagram">Instagram Downloader</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" className="nav-link">
                    {lang("Blog")}
                  </Nav.Link>
                  <Nav.Link onClick={handleScrollFaq} className="nav-link">
                    {lang("FAQ")}
                  </Nav.Link>
                  <Nav.Link onClick={handleScrollContact} className="nav-link">
                    {lang("Contact")}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        {/* Hero Section - FSMVID Style */}
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12">
                <div className="hero-content">
                  {/* Hero Badge */}
                  <div className="hero-badge">
                    <span>⚡ Free Online Downloader</span>
                  </div>

                  {/* Main Title */}
                  <h1 className="hero-title">
                    Free Social Media
                    <span className="highlight">Video Downloader</span>
                  </h1>

                  {/* Subtitle */}
                  <p className="hero-subtitle">
                    Download videos, images, and shorts from YouTube, TikTok, Facebook, Instagram, Twitter, and 15+ other platforms.
                    <br />
                    Fast, secure, and completely free.
                  </p>

                  {/* Feature Grid */}
                  <div className="hero-features-grid">
                    <div className="hero-feature-item">
                      <CheckCircleOutlined />
                      <div>No registration required</div>
                    </div>
                    <div className="hero-feature-item">
                      <CheckCircleOutlined />
                      <div>100% free forever</div>
                    </div>
                    <div className="hero-feature-item">
                      <CheckCircleOutlined />
                      <div>High quality downloads</div>
                    </div>
                    <div className="hero-feature-item">
                      <CheckCircleOutlined />
                      <div>Multiple formats</div>
                    </div>
                  </div>

                  {/* Download Form */}
                  <div className="hero-download-form">
                    <Form form={form} onFinish={onSubmit}>
                      <Form.Item name="link" rules={[{ required: true, message: "Please enter video URL" }]}>
                        <Input placeholder="Enter Video URL" size="large" />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" loading={loading} disabled={loading}>
                          ▶ Process
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>

                  {/* Stats Grid */}
                  <div className="hero-stats-grid">
                    <div className="hero-stat-item">
                      <SmileOutlined />
                      <h5 className="stat-title">1M+</h5>
                      <p className="stat-description">Happy Users</p>
                    </div>
                    <div className="hero-stat-item">
                      <DownloadOutlined />
                      <h5 className="stat-title">10M+</h5>
                      <p className="stat-description">Downloads</p>
                    </div>
                    <div className="hero-stat-item">
                      <CloudServerOutlined />
                      <h5 className="stat-title">99.9%</h5>
                      <p className="stat-description">Uptime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loading and Results Section */}
        {loading && (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <Spin size="large" />
            <p style={{ marginTop: "16px", fontSize: "16px" }}>Processing your link, please wait...</p>
          </div>
        )}

        {error && !loading && (
          <div style={{ padding: "20px" }}>
            <Alert message="Error" description={error} type="error" showIcon closable onClose={() => setError(null)} />
          </div>
        )}

        {mediaInfo && !loading && (
          <section className="results-section" style={{ padding: "40px 0", backgroundColor: "#f9fafb" }}>
            <div className="container">
              <Card>
                <Row gutter={[24, 24]} align="middle">
                  <Col xs={24} md={8}>
                    <img
                      // CORS समस्याओं से बचने के लिए प्रॉक्सी का उपयोग करें
                      src={`${apiPath.baseURL}${apiPath.proxyImage}?url=${encodeURIComponent(mediaInfo.thumbnail)}`}
                      alt={mediaInfo.title}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Col>
                  <Col xs={24} md={16}>
                    <Typography.Title level={4}>{mediaInfo.title}</Typography.Title>
                    <Typography.Text type="secondary">Platform: {mediaInfo.platform}</Typography.Text>
                    {mediaInfo.media.filter((f) => f.vcodec && f.vcodec !== "none").length > 0 && (
                      <>
                        <Divider>Video Downloads</Divider>
                        <Space wrap>
                          {mediaInfo.media
                            .filter((f) => f.vcodec && f.vcodec !== "none")
                            .map((format, index) => (
                              <Button key={`video-${index}`} type="primary" icon={<DownloadOutlined />} onClick={() => handleDownload(format.url, mediaInfo.title, format.format)}>
                                {format.quality} ({format.format.toUpperCase()}){formatBytes(format.size)}
                              </Button>
                            ))}
                        </Space>
                      </>
                    )}

                    {mediaInfo.media.filter((f) => f.acodec && f.acodec !== "none" && (!f.vcodec || f.vcodec === "none")).length > 0 && (
                      <>
                        <Divider>Audio Downloads</Divider>
                        <Space wrap>
                          {mediaInfo.media
                            .filter((f) => f.acodec && f.acodec !== "none" && (!f.vcodec || f.vcodec === "none"))
                            .map((format, index) => (
                              <Button key={`audio-${index}`} type="default" icon={<DownloadOutlined />} onClick={() => handleDownload(format.url, mediaInfo.title, format.format)}>
                                {format.quality} ({format.format.toUpperCase()}){formatBytes(format.size)}
                              </Button>
                            ))}
                        </Space>
                      </>
                    )}

                    {mediaInfo.media.filter((f) => f.vcodec === "none" && f.acodec === "none").length > 0 && (
                      <>
                        <Divider>Image Downloads</Divider>
                        <Space wrap>
                          {mediaInfo.media
                            .filter((f) => f.vcodec === "none" && f.acodec === "none")
                            .map((format, index) => (
                              <Button key={`image-${index}`} type="dashed" icon={<DownloadOutlined />} onClick={() => handleDownload(format.url, mediaInfo.title, format.format)}>
                                {/* अगर एक से ज़्यादा इमेज हैं तभी नंबर दिखाएँ */}
                                Image {mediaInfo.media.filter((f) => f.vcodec === "none" && f.acodec === "none").length > 1 ? index + 1 : ""} ({format.format.toUpperCase()}){formatBytes(format.size)}
                              </Button>
                            ))}
                        </Space>
                      </>
                    )}
                  </Col>
                </Row>
              </Card>
            </div>
          </section>
        )}

        {/* How It Works Section */}
        <section className="how-to-cards-section">
          <div className="container">
            <div className="headding text-center">
              <h4>How to Download Videos?</h4>
              <p className="section-subtitle">Download your favorite videos in just three simple steps. It's fast, easy, and completely free.</p>
            </div>
            <Row gutter={[32, 32]} justify="center">
              <Col xs={24} md={8} className="how-to-card-col">
                <div className="how-to-card">
                  <div className="how-to-card-number">1</div>
                  <div className="how-to-card-icon-wrapper">
                    <LinkOutlined className="how-to-card-icon" />
                  </div>
                  <h5 className="how-to-card-title">Copy the URL</h5>
                  <p className="how-to-card-description">Go to the social media post and copy the link of the video, photo, or Reel you want to download.</p>
                </div>
              </Col>
              <Col xs={24} md={8} className="how-to-card-col">
                <div className="how-to-card">
                  <div className="how-to-card-number">2</div>
                  <div className="how-to-card-icon-wrapper">
                    <HighlightOutlined className="how-to-card-icon" />
                  </div>
                  <h5 className="how-to-card-title">Paste the link</h5>
                  <p className="how-to-card-description">Return to our website, paste the link into the input field, and click the "Process" button.</p>
                </div>
              </Col>
              <Col xs={24} md={8} className="how-to-card-col">
                <div className="how-to-card">
                  <div className="how-to-card-number">3</div>
                  <div className="how-to-card-icon-wrapper">
                    <DownloadOutlined className="how-to-card-icon" />
                  </div>
                  <h5 className="how-to-card-title">Download the video</h5>
                  <p className="how-to-card-description">We will display all available formats. Choose the one you want and click the download button.</p>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Platform Selection Section */}
        <section className="platform-section">
          <div className="container text-center">
            <div className="headding">
              <h4>Choose Your Platform</h4>
              <div className="bar" />
              <span>Download from your favorite social media sites.</span>
            </div>
            <Row gutter={[24, 24]} className="platform-grid" justify="center">
              {[
                { name: "YouTube", icon: <YoutubeOutlined />, color: "#FF0000" },
                { name: "TikTok", icon: <VideoCameraOutlined />, color: "#000000" },
                { name: "Instagram", icon: <InstagramOutlined />, color: "#E4405F" },
                { name: "Facebook", icon: <FacebookOutlined />, color: "#1877F2" },
                { name: "Twitter", icon: <TwitterOutlined />, color: "#1DA1F2" },
                { name: "Pinterest", icon: <PinterestOutlined />, color: "#E60023" },
              ].map((platform) => (
                <Col xs={12} sm={8} md={6} lg={4} key={platform.name} className="platform-col">
                  <div className="platform-card">
                    <div className="platform-card-icon" style={{ color: platform.color }}>
                      {platform.icon}
                    </div>
                    <h5 className="platform-card-name">{platform.name}</h5>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Why Our Process is Better Section */}
        <section className="process-section">
          <div className="container text-center">
            <div className="process-stats-card">
              <div className="headding">
                <h4>Why Our Process is Better</h4>
                <div className="bar" />
                <span>We've simplified video downloading for maximum efficiency and safety.</span>
              </div>
              <Row justify="space-around" align="middle">
                <Col xs={24} md={8} className="process-stat-item">
                  <h2 className="stat-card-value">&lt;10s</h2>
                  <p className="stat-card-label">Average processing time</p>
                </Col>
                <Col xs={24} md={8} className="process-stat-item">
                  <h2 className="stat-card-value">100%</h2>
                  <p className="stat-card-label">Success rate</p>
                </Col>
                <Col xs={24} md={8} className="process-stat-item">
                  <h2 className="stat-card-value">0</h2>
                  <p className="stat-card-label">Registration required</p>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* Why Choose Our Downloader Section */}
        <section className="why-choose-section">
          <div className="container text-center">
            <div className="headding">
              <h4>Why Choose Our Downloader?</h4>
              <div className="bar" />
              <span>Here are a few reasons why QVD is the best choice for downloading videos.</span>
            </div>
            <Row gutter={[32, 32]} justify="center">
              <Col xs={24} sm={12} md={6}>
                <div className="feature-card">
                  <ThunderboltOutlined />
                  <h5>Lightning Fast</h5>
                  <p>Our service is incredibly fast. Your video is ready to download in seconds.</p>
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div className="feature-card">
                  <SafetyOutlined />
                  <h5>Secure & Private</h5>
                  <p>No registration needed. We respect your privacy and don't store your data.</p>
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div className="feature-card">
                  <SettingOutlined />
                  <h5>Multiple Formats</h5>
                  <p>Download videos in various formats and qualities, including MP4, MP3, and HD.</p>
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div className="feature-card">
                  <GlobalOutlined />
                  <h5>All Platforms</h5>
                  <p>We support over 15 platforms, including all major social media sites.</p>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contactus" className="bg-img2" ref={targetcontact}>
          <div className="container for-width">
            <div className="from-main">
              <div className="businesswomenimg">
                <img src={BusinessWomImg} />
              </div>
              <div className="form-11">
                <div className="tophead">
                  <h3>{lang("Get in touch")}</h3>
                  <div className="bar" />
                  <p>{lang("Our friendly team would love to hear from you.")}</p>
                </div>
                <div className="containerni">
                  <SupportSection />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" ref={targetFaq}>
          <div className="container for-width">
            <div className="row">
              <div className="">
                <div className="headding text-center">
                  <h4>Frequently asked questions</h4>
                  <div className="bar" id="bar-1" />
                  <span>Everything you need to know about QVD.</span>
                </div>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="freq-ask-qqq">{lang("What is QVD?")}</Accordion.Header>
                    <Accordion.Body>
                      {lang(
                        "QVD is a free tool that allows you to download videos from multiple platforms like YouTube, Instagram, Facebook, Twitter, TikTok & 15+ other platforms in high quality, without watermarks or sign-ups."
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="freq-ask-qqq">{lang("Which platforms does QVD support?")}</Accordion.Header>
                    <Accordion.Body>
                      {lang("We support YouTube, Instagram, Facebook, Twitter/X, TikTok, and 15+ other platforms. Simply paste any video link from these platforms and download instantly!")}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="freq-ask-qqq">{lang("Do I need to log in to use QVD?")}</Accordion.Header>
                    <Accordion.Body>{lang("No, QVD does not require you to log in. You can download videos anonymously.")}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="freq-ask-qqq">{lang("Is QVD free to use?")}</Accordion.Header>
                    <Accordion.Body>{lang("Yes! QVD is completely free, with no hidden charges.")}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="freq-ask-qqq">{lang("Can I download videos from private accounts?")}</Accordion.Header>
                    <Accordion.Body>{lang("No, QVD only allows downloading from public accounts due to platform privacy policies.")}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </>
    </Main>
  );
}

const Auth = LandingIndex;
export { Auth };

const SupportSection = () => {
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(null);
  const { request } = useRequest();
  const [form] = Form.useForm();

  const handleMobileNumberChange = (value, data, type) => {
    let country_code = data?.dialCode;
    setMobileNumber({
      country_code: country_code,
      mobile_number: value.slice(data?.dialCode?.length),
    });
  };

  const onSubmit = (values) => {
    setLoading(true);
    let payload = { ...values, ...mobileNumber };

    request({
      url: apiPath.support,
      method: "POST",
      data: { ...payload },
      onSuccess: (data) => {
        setLoading(false);
        if (data.status) {
          form.resetFields();
          ShowToast(data.message, Severty.SUCCESS);
        } else {
          setLoading(false);
          ShowToast(data.message, Severty.ERROR);
        }
      },
      onError: (error) => {
        setLoading(false);
        ShowToast(error?.response?.data?.message, Severty.ERROR);
      },
    });
  };

  return (
    <Form form={form} onFinish={(e) => onSubmit(e)} layout="vertical" className="row-col signup5-model">
      <Row gutter={24}>
        <Col span={24} md={12}>
          <Form.Item
            className="username"
            name="first_name"
            rules={[
              {
                max: 250,
                message: lang("Name should contain more then 250 characters!"),
              },
              {
                required: true,
                message: lang("Please Enter  Name"),
              },
            ]}
          >
            <Input placeholder={lang("Enter First Name")} />
          </Form.Item>
        </Col>
        <Col span={24} md={12}>
          <Form.Item
            className="username"
            name="last_name"
            rules={[
              {
                max: 250,
                message: lang("Name should contain more then 250 characters!"),
              },
              {
                required: true,
                message: lang("Please Enter  Name"),
              },
            ]}
          >
            <Input placeholder={lang("Enter Last Name")} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        className="username"
        name="email"
        rules={[
          {
            type: "email",
            message: lang("Please enter a valid email address!"),
          },
          {
            max: 255,
            message: lang("Email address not more then 255 characters!"),
          },
          {
            required: true,
            message: lang("Please enter email!"),
          },
        ]}
      >
        <Input placeholder={lang("Enter Email address")} />
      </Form.Item>

      <PhoneNumberField
        label={""}
        name="mobile"
        placeholder={lang("Enter Phone Number")}
        cover={{ md: 24 }}
        colProps={{ sm: 24, span: 24 }}
        className="new-mobile-passwordnew username"
        onChange={handleMobileNumberChange}
        number={mobileNumber?.mobile_number}
      />

      <Col span={24} md={24}>
        <Form.Item
          className="username new-text-area-main"
          name="message"
          rules={[
            {
              max: 1000,
              message: lang("Message should contain more then 1000 characters!"),
            },
            {
              required: true,
              message: lang("Please Enter  Message"),
            },
          ]}
        >
          <Input.TextArea maxLength={10} minLength={5} placeholder={lang("Enter Your Message")} />
        </Form.Item>
      </Col>

      <Col md={24}>
        <Form.Item
          name="agree"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) => {
                if (value !== undefined && value === true) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(lang("Please confirm  agree to our friendly privacy policy.")));
              },
            },
          ]}
        >
          <Space align="baseline">
            <Checkbox>{lang("You agree to our friendly privacy policy.")}</Checkbox>
          </Space>
        </Form.Item>
      </Col>

      <Form.Item>
        <Button className="float-right float-right-main-new-send-button" type="primary" htmlType="submit">
          {lang("Send")}
        </Button>
      </Form.Item>
    </Form>
  );
};
