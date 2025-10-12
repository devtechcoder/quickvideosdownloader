import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { HeaderSvg } from "../../assets/images/svg/svg";
import { Navbar, Nav, Container, Accordion, NavDropdown } from "react-bootstrap";
import lang from "../../helper/langHelper";

function Header() {
  const navigate = useNavigate();
  const targetcontact = useRef(null);
  const targetFaq = useRef(null);

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
    </>
  );
}

export default Header;
