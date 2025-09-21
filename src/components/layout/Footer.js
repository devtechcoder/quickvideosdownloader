import { Layout, Row, Col } from "antd";
import { Link } from "react-router-dom";
import lang from "../../helper/langHelper";

function Footer() {
  const { Footer: AntFooter } = Layout;

  const footerStyles = {
    backgroundColor: "#1a1a1a",
    color: "rgba(255, 255, 255, 0.7)",
    padding: "60px 0",
  };

  const linkStyle = {
    color: "rgba(255, 255, 255, 0.7)",
    textDecoration: "none",
    display: "block",
    marginBottom: "10px",
  };

  const linkHoverStyle = {
    color: "#fff",
  };

  const titleStyle = {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: "20px",
    fontSize: "16px",
  };

  return (
    <AntFooter style={footerStyles}>
      <div className="container for-width">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <h5 style={titleStyle}>{lang("Popular Platforms")}</h5>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("YouTube Downloader")}
            </Link>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("TikTok Downloader")}
            </Link>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("Instagram Downloader")}
            </Link>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("Facebook Downloader")}
            </Link>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("Twitter Downloader")}
            </Link>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h5 style={titleStyle}>{lang("More Platforms")}</h5>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("Vimeo Downloader")}
            </Link>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("Pinterest Downloader")}
            </Link>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("LinkedIn Downloader")}
            </Link>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h5 style={titleStyle}>{lang("Resources")}</h5>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("Blog")}
            </Link>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("FAQ")}
            </Link>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("Contact")}
            </Link>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h5 style={titleStyle}>{lang("Legal")}</h5>
            <Link to="/privacy-policy" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("Privacy Policy")}
            </Link>
            <Link to="/terms-condition" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("Terms of Service")}
            </Link>
            <Link to="#" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)} onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}>
              {lang("DMCA")}
            </Link>
          </Col>
        </Row>
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", marginTop: "40px", paddingTop: "30px", textAlign: "center" }}>
          <p>
            &copy; {new Date().getFullYear()} QVD. {lang("All Rights Reserved.")}
          </p>
          <p>{lang("QVD is not affiliated with any of the social media platforms mentioned.")}</p>
        </div>
      </div>
    </AntFooter>
  );
}

export default Footer;
