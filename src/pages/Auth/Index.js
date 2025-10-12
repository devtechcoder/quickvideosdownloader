import React, { useState, useRef, useEffect } from "react";
import { Input, Button, Row, Col, Space, Collapse, Form, Checkbox, Card, Typography, Spin, Alert } from "antd";
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
  RocketOutlined,
  RetweetOutlined,
  LinkOutlined,
  HighlightOutlined,
  CopyOutlined,
  ClearOutlined,
  PlayCircleOutlined,
  LinkedinOutlined,
  CustomerServiceOutlined,
  BoldOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Accordion, NavDropdown } from "react-bootstrap";
import Main from "../../components/layout/Main";
import lang from "../../helper/langHelper";
import { Severty, ShowToast } from "../../helper/toast";
import useRequest from "../../hooks/useRequest";
import apiPath from "../../constants/apiPath";
import { processMediaInfo } from "../../helper/mediaHelper";
import MediaDisplay from "./MediaDisplay";
import BusinessWomImg from "../../assets/images/contact-support.png";
import SupportSection from "../../sections/Auth/SupportSection";

const { Panel } = Collapse;

function LandingIndex() {
  const navigate = useNavigate();
  const targetcontact = useRef(null);
  const targetFaq = useRef(null);
  const heroSectionRef = useRef(null);
  const ctaSectionRef = useRef(null); // CTA सेक्शन के लिए ref

  const { request } = useRequest();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [mediaInfo, setMediaInfo] = useState(null);
  const [error, setError] = useState(null);
  const [linkValue, setLinkValue] = useState("");

  const [isCtaVisible, setIsCtaVisible] = useState(false); // CTA सेक्शन की visibility के लिए state

  const scrollToTop = () => {
    if (heroSectionRef.current) {
      heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection Observer का उपयोग करके एनीमेशन को ट्रिगर करें
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsCtaVisible(true);
          observer.unobserve(entry.target); // एक बार दिखने के बाद observer को हटा दें
        }
      },
      { threshold: 0.1 } // जब 10% हिस्सा दिखे
    );

    if (ctaSectionRef.current) {
      observer.observe(ctaSectionRef.current);
    }

    return () => observer.disconnect(); // Cleanup
  }, []);

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
          const processedData = processMediaInfo(data?.data?.data);

          if (processedData) {
            setMediaInfo(processedData);
          }
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

  const handleDownload = async (url, title, format) => {
    ShowToast("Your download is starting...", Severty.INFO);
    try {
      // हमारे बैकएंड प्रॉक्सी के लिए URL बनाएँ
      const proxyUrl = `${apiPath.baseURL}${apiPath.proxyDownload}?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&format=${encodeURIComponent(format)}`;

      // प्रॉक्सी URL से फ़ाइल को fetch करें
      const response = await fetch(proxyUrl);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const blob = await response.blob();

      // एक अस्थायी एंकर (<a>) एलिमेंट बनाएँ
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${title || "video"}.${format || "mp4"}`;

      // इसे डॉक्यूमेंट में जोड़ें, क्लिक करें, और फिर हटा दें।
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href); // मेमोरी क्लीनअप
      ShowToast("Download has started successfully!", Severty.SUCCESS);
    } catch (error) {
      console.error("Download failed:", error);
      ShowToast("Failed to download the file. Please try again.", Severty.ERROR);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      form.setFieldsValue({ link: text });
      setLinkValue(text);
    } catch (err) {
      ShowToast("Failed to read from clipboard.", Severty.ERROR);
    }
  };

  const handleClear = () => {
    form.resetFields();
    setLinkValue("");
  };

  const onFormValuesChange = (changedValues) => {
    if (changedValues.link !== undefined) setLinkValue(changedValues.link);
  };

  return (
    <Main>
      <>
        {/* Hero Section - FSMVID Style */}
        <section className="hero-section" ref={heroSectionRef}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12">
                <div className="hero-content">
                  {/* Hero Badge */}
                  <div className="hero-badge">
                    <span>
                      <span className="emoji">⚡</span> Free clipXpert Videos Downloader
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p className="hero-subtitle">
                    Download videos, audios, images, highlights and shorts from YouTube, TikTok, Facebook, Instagram, Twitter, and 15+ other platforms.
                    <br />
                    Fast, secure, and completely free.
                  </p>

                  {/* Feature Grid */}
                  <div className="hero-features-marquee">
                    <div className="hero-features-track">
                      {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
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
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Download Form */}
                  <div className="hero-download-form process-button-group">
                    <Form style={{ display: "flex", alignItems: "center", gap: "0" }} form={form} onFinish={onSubmit} onValuesChange={onFormValuesChange}>
                      <div className="input-wrapper">
                        <Form.Item
                          name="link"
                          rules={[
                            { required: true, message: "Please paste a media link!" },
                            { type: "url", message: "Please enter a valid URL!" },
                          ]}
                          className="m-0"
                          style={{ flex: 1, margin: 0 }}
                        >
                          <Input
                            placeholder="Paste video link from YouTube, Instagram, TikTok..."
                            size="large"
                            prefix={<LinkOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                            suffix={
                              linkValue ? (
                                <ClearOutlined onClick={handleClear} style={{ cursor: "pointer", color: "rgba(0,0,0,.45)" }} />
                              ) : (
                                <CopyOutlined onClick={handlePaste} style={{ cursor: "pointer", color: "rgba(0,0,0,.45)" }} />
                              )
                            }
                            style={{
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </Form.Item>
                      </div>
                      <Form.Item className="m-0" style={{ margin: 0 }}>
                        <Button
                          style={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            height: "100%",
                          }}
                          type="primary"
                          htmlType="submit"
                          size="large"
                          loading={loading}
                          disabled={loading}
                        >
                          <DownloadOutlined /> Process
                        </Button>
                      </Form.Item>
                    </Form>
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

        {mediaInfo && !loading && <MediaDisplay mediaInfo={mediaInfo} handleDownload={handleDownload} />}

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
                  <p className="how-to-card-description">Go to the social media post and copy the link of the video, photo, audio or Reel you want to download.</p>
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
                { name: "Instagram", icon: <InstagramOutlined />, color: "#E4405F", popular: false },
                { name: "Facebook", icon: <FacebookOutlined />, color: "#1877F2", popular: false },
                { name: "Threads", icon: <RetweetOutlined />, color: "#000000" },
                { name: "Pinterest", icon: <PinterestOutlined />, color: "#E60023" },
                { name: "YouTube", icon: <YoutubeOutlined />, color: "#FF0000", popular: false },
                { name: "Twitter", icon: <TwitterOutlined />, color: "#1DA1F2" },
                { name: "LinkedIn", icon: <LinkedinOutlined />, color: "#0A66C2" },
                { name: "Snapchat", icon: <SmileOutlined />, color: "#FFFC00" },
                { name: "TikTok", icon: <PlayCircleOutlined />, color: "#000000" },
                { name: "Douyin", icon: <VideoCameraOutlined />, color: "#000000" },
                { name: "Tumblr", icon: <BoldOutlined />, color: "#36465D" },
                { name: "Spotify", icon: <CustomerServiceOutlined />, color: "#1DB954" },
              ].map((platform) => (
                <Col xs={12} sm={8} md={6} lg={4} key={platform.name} className="platform-col">
                  <div className="platform-card">
                    {platform.popular && <div className="platform-badge">Popular</div>}
                    <div className="platform-card-icon" style={{ color: platform.color, textShadow: platform.name === "Snapchat" ? "0 0 2px #000" : "none" }}>
                      {platform.icon}
                    </div>
                    <h5 className="platform-card-name">{platform.name}</h5>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section" ref={ctaSectionRef}>
          <div className="container text-center">
            <div className="cta-content animated-cta-new">
              <RocketOutlined className={isCtaVisible ? "animated-rocket" : ""} />
              <h2 className={isCtaVisible ? "text-focus-in" : ""}>Ready to Start Downloading?</h2>
              <p className={isCtaVisible ? "text-focus-in" : ""} style={{ animationDelay: isCtaVisible ? "0.5s" : "0s" }}>
                Experience the fastest and easiest way to save videos from your favorite platforms.
                <br />
                No limits, no waiting. Just pure downloading freedom.
              </p>
              <Button type="default" size="large" onClick={scrollToTop} className="cta-button">
                Try clipXpert Now for Free!
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Our Downloader Section */}
        <section className="why-choose-section">
          <div className="container text-center">
            <div className="headding">
              <h4>Why Choose Our Downloader?</h4>
              <div className="bar" />
              <span>Here are a few reasons why clipXpert is the best choice for downloading videos.</span>
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
                  <p>We support over 15+ platforms, including all major social media sites.</p>
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
                  <span>Everything you need to know about clipXpert.</span>
                </div>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="freq-ask-qqq">{lang("What is clipXpert?")}</Accordion.Header>
                    <Accordion.Body>
                      {lang(
                        "clipXpert is a free tool that allows you to download videos from multiple platforms like YouTube, Instagram, Facebook, Twitter, TikTok & 15+ other platforms in high quality, without watermarks or sign-ups."
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="freq-ask-qqq">{lang("Which platforms does clipXpert support?")}</Accordion.Header>
                    <Accordion.Body>
                      {lang("We support YouTube, Instagram, Facebook, Twitter/X, TikTok, and 15+ other platforms. Simply paste any video link from these platforms and download instantly!")}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="freq-ask-qqq">{lang("Do I need to log in to use clipXpert?")}</Accordion.Header>
                    <Accordion.Body>{lang("No, clipXpert does not require you to log in. You can download videos anonymously.")}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="freq-ask-qqq">{lang("Is clipXpert free to use?")}</Accordion.Header>
                    <Accordion.Body>{lang("Yes! clipXpert is completely free, with no hidden charges.")}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="freq-ask-qqq">{lang("Can I download videos from private accounts?")}</Accordion.Header>
                    <Accordion.Body>{lang("No, clipXpert only allows downloading from public accounts due to platform privacy policies.")}</Accordion.Body>
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

export default LandingIndex;
