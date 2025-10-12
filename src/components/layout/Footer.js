import { Layout, Row, Col } from "antd";
import { Link } from "react-router-dom";
import lang from "../../helper/langHelper";
import footerLogo from "../../assets/images/png/footerLogo.png";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter className="qvd-footer">
      <div className="container for-width">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <div className="footer-logo-container">
              <Link to="/">
                <img src={footerLogo} alt="Footer Logo" />
              </Link>
              <p className="footer-tagline">{lang("Your one-stop solution for downloading online videos effortlessly.")}</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h5 className="footer-title">{lang("Popular Platforms")}</h5>
            <Link to="/" className="footer-link">
              {lang("YouTube Downloader")}
            </Link>
            <Link to="/" className="footer-link">
              {lang("TikTok Downloader")}
            </Link>
            <Link to="/" className="footer-link">
              {lang("Instagram Downloader")}
            </Link>
            <Link to="/" className="footer-link">
              {lang("Facebook Downloader")}
            </Link>
            <Link to="/" className="footer-link">
              {lang("Twitter Downloader")}
            </Link>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <h5 className="footer-title">{lang("Resources")}</h5>
            <Link to="/blog" className="footer-link">
              {lang("Blog")}
            </Link>
            <Link to="/faq" className="footer-link">
              {lang("FAQ")}
            </Link>
            <Link to="/contact" className="footer-link">
              {lang("Contact")}
            </Link>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h5 className="footer-title">{lang("Legal")}</h5>
            <Link to="/about-us" className="footer-link">
              {lang("About Us")}
            </Link>
            <Link to="/privacy-policy" className="footer-link">
              {lang("Privacy Policy")}
            </Link>
            <Link to="/terms-condition" className="footer-link">
              {lang("Terms of Service")}
            </Link>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} clickXpert {lang("All Rights Reserved.")}
          </p>
          <p>{lang("clickXpert is not affiliated with any of the social media platforms mentioned.")}</p>
        </div>
      </div>
    </AntFooter>
  );
}

export default Footer;
