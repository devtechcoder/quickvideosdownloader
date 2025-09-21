import React, { useEffect, useState } from "react";
import { Avatar, Button, Image } from "antd";
import GallerymImg from "../../assets/images/gallery-1.png";
import ArrowNewImg from "../../assets/images/ep_arrow-up.png";
import { useNavigate } from "react-router";
import { Navbar, Nav, Container } from "react-bootstrap";
import LogoImg from "../../assets/images/logo img.png";

import lang from "../../helper/langHelper";
import useRequest from "../../hooks/useRequest";
import { useAppContext } from "../../context/AppContext";
import { Severty, ShowToast } from "../../helper/toast";
import apiPath from "../../constants/apiPath";
import { useAuthContext } from "../../context/AuthContext";

function HomeGallary() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const { request } = useRequest();

  const { isMobile, language } = useAppContext();
  const [loading, setLoading] = useState(false);

  const [showlogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [data, setData] = useState([]);
  const { userProfile, isLoggedIn } = useAuthContext();

  const toggleGallery = () => {
    setIsExpanded(!isExpanded);
  };

  const fetchData = () => {
    setLoading(true);
    request({
      url: apiPath.gallary,
      method: "GET",
      onSuccess: ({ data, status }) => {
        console.log("data", data);
        // if (!data.status) return ShowToast(data?.message, Severty.ERROR);
        if (status) setData(data?.docs);
        setLoading(false);
      },
      onError: (err) => {
        setLoading(false);
        console.log(err);
        ShowToast(err, Severty.ERROR);
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="header extra">
        <Navbar
          bg=""
          expand="lg"
          className="navbar navbar-expand-lg navbar-light"
        >
          <Container>
            <Navbar.Brand onClick={() => navigate("/")}>
              <img src={LogoImg} alt="Logo" className="home-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="ms-auto mb-2 mb-lg-0">
                {!isLoggedIn ? (
                  <Nav.Link onClick={() => navigate("/")} className="nav-link">
                    {lang("Home")}
                  </Nav.Link>
                ) : (
                  ""
                )}

                <Nav.Link
                  onClick={() => navigate("/aboutUs")}
                  className="nav-link"
                >
                  {lang("About us")}
                </Nav.Link>
                <Nav.Link
                  onClick={() => navigate("/home-gallary")}
                  className="nav-link active"
                >
                  {lang("Gallery")}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <section className="gallery-section-4">
        <div className="container">
          <div className="gallery-text-1">
            <h3>{lang("Gallery")}</h3>
            <p>
              {lang(
                "Our gallery highlights the magic of perfectly executed events. Browse through the memories we've crafted for our clients, and imagine your own event coming to life."
              )}
            </p>
          </div>
          <div className="gallery-main-img">
            {data?.length &&
              data?.map((item, index) => (
                <div className="gallery-img3" key={index}>
                  <img src={item?.image ? item.image : GallerymImg} alt="#" />
                </div>
              ))}
          </div>
          {/* {isExpanded && (
            <div className="gallery-main-img gallery03 mt-3" id="gallery03">
              {data?.length && data?.map((item, index) => (
                <div className="gallery-img3" key={index}>
                  <img src={item?.image ? item.image : GallerymImg} alt="#" />
                </div>
              ))}
            </div>
          )} */}

          <div className="button-main22" id="main-3">
            {/* <button className="show-more02" onClick={toggleGallery}>
              {isExpanded ? "Show Less" : "Show More"}
              <img src={ArrowNewImg} alt="#" />
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default HomeGallary;
