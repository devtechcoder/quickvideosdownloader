import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import axios from "axios";
import moment from "moment";
import LogoImg from "../../assets/images/logo img.png";
import Modelimage1Img from "../../assets/images/model-img.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useContext, useEffect, useState, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import { uploadFile } from "react-s3";
import Prouser from "../../assets/images/user.png";

import apiPath from "../../constants/apiPath";
import { useAppContext } from "../../context/AppContext";
import { AuthContext, useAuthContext } from "../../context/AuthContext";
import { Severty, ShowToast } from "../../helper/toast";
import useRequest from "../../hooks/useRequest";
import Main from "../../components/layout/Main";
import Loader from "../../components/Loader";
import lang from "../../helper/langHelper";

window.Buffer = window.Buffer || require("buffer").Buffer;

function Terms() {
  const { request } = useRequest();

  const { language } = useAppContext();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { userProfile, isLoggedIn } = useAuthContext();

  const fetchData = () => {
    setLoading(true);
    request({
      url: apiPath.baseURL + "/app/content/terms-and-conditions",
      method: "GET",
      onSuccess: (data) => {
        console.log("data", data);
        if (!data.status) return ShowToast(data?.message, Severty.ERROR);
        setData(data?.docs?.[0]);
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
    setLoading(true);
    fetchData();
  }, []);

  return (
    <>
      <section className="main">
        <div className="account-outers">
          <Row>
            <Col span={24} lg={18} xl={15} className="mx-auto  amt-auto">
              <div className="about-us-maain">
                <h3>{lang("Terms and Conditions")}</h3>
                {loading ? (
                  <Loader />
                ) : (
                  <div className="about-us-discripton about-us-discripton-new-descriotion">
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          language !== "en" && language !== null
                            ? data?.[`${language}_description`] ??
                              data?.description
                            : data?.description,
                      }}
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export const BackArrow = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="fillter-sidebar">
      <Link onClick={() => navigate(-1)} className="sidebar-btn">
        <ArrowLeftOutlined />
      </Link>
    </div>
  );
};

export default Terms;
