import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderSvg } from "../../assets/images/svg/svg";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import lang from "../../helper/langHelper";

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      {/* Fixed Header */}
      <div className="qvd-header">
        <Navbar bg="transparent" expand="lg" className="navbar-light p-0">
          <Container>
            <Navbar.Brand onClick={() => navigate("/")} className="qvd-navbar-brand py-2">
              <div className="qvd-logo-container">
                <HeaderSvg />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle className="navbar-toggler" aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="ms-auto mb-2 mb-lg-0 qvd-nav">
                <Nav.Link onClick={() => navigate("/")} className={`nav-link ${pathname === "/" ? "active" : ""}`}>
                  {lang("Home")}
                </Nav.Link>
                <NavDropdown title={lang("Platforms")} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigate("/")}>YouTube Downloader</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/")}>TikTok Downloader</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/")}>Instagram Downloader</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={() => navigate("/blog")} className={`nav-link ${pathname === "/blog" ? "active" : ""}`}>
                  {lang("Blog")}
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/faq")} className={`nav-link ${pathname === "/faq" ? "active" : ""}`}>
                  {lang("FAQ")}
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/contact")} className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
                  {lang("Contact")}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
