import React from "react";
import { Link } from "react-router-dom";
import lang from "../helper/langHelper";
import AndroidDownloadImg from "../assets/images/android_download (1).png";
import IosDownloadImg from "../assets/images/ios_download (1).png";
import PlanitmainImg from "../assets/images/planit img.png";
import "../assets/styles/hero-styles.css";

const ModernHeroSection = () => {
  return (
    <section className="main-hero-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-6">
            <div className="left-bar-slaide">
              <h6>{lang("Insave: Your Ultimate Instagram Story Saver")}</h6>
              <h2>{lang("Save and download Instagram stories effortlessly with Insave. No sign-up required, no watermarks—just high-quality story downloads in seconds!")}</h2>
              <div className="slaider-btn">
                <div className="logo-android">
                  <div>
                    <Link to={"https://www.instagram.com/"} target="_blank" rel="noopener noreferrer">
                      <img src={AndroidDownloadImg} alt="Download Android App" />
                    </Link>
                  </div>
                  <div>
                    <Link to={"https://apps.apple.com/us/app/instagram/id389801252"} target="_blank" rel="noopener noreferrer">
                      <img src={IosDownloadImg} alt="Download iOS App" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="right-bar-slide">
              <img src={PlanitmainImg} alt="Insave App Preview" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="floating-element-1"></div>
      <div className="floating-element-2"></div>
    </section>
  );
};

export default ModernHeroSection;
