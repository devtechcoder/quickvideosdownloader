import React from "react";
import Main from "../../components/layout/Main";
import { Helmet } from "react-helmet-async";

import visionImgae from "../../assets/images/png/vision.png";
import missionImage from "../../assets/images/png/mission.png";
import valuesImage from "../../assets/images/png/values.png";
import responsibilityImage from "../../assets/images/png/responsibility.png";

const AboutUs = () => {
  return (
    <Main>
      <Helmet>
        <title>About Us - clipXpert</title>
        <meta name="description" content="Learn about the mission and vision behind clipXpert. Discover the team dedicated to providing the best free online video downloading tool." />
        <meta name="keywords" content="about clipxpert, clipxpert team, video downloader mission" />
        <link rel="canonical" href="https://clipxpert.vercel.app/about-us" />
      </Helmet>
      <div className="legal-container">
        <div className="container py-4 py-md-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="legal-header text-center">
                <h1 className="mb-3" style={{ color: "#e65100" }}>
                  About Us
                </h1>
              </div>
              <div className="legal-content mt-4 mt-md-5">
                <div className="row align-items-center mb-4">
                  <div className="col-md-7">
                    <p>
                      Since the inception of Owebest in the year 2013, we are known as one of the pioneer Outsourced Software Development Companies serving clients globally with development centers in
                      India and sales offices in the USA, Canada, and Dubai. Our team of experts uses a blend of proven methodologies as well as business knowledge to deliver a high-quality solution
                      to our renowned clients.
                    </p>
                    <ul>
                      <li>We have more than 90% of Customer retention</li>
                      <li>We are having more than 450+ successful clients</li>
                      <li>We hold more than 1000 of Man years’ experience</li>
                    </ul>
                  </div>
                  <div className="col-md-5 text-center">
                    <iframe width="100%" height="220" src="https://youtu.be/ifxePX-lvNc?si=KPACrJozag1OVHMk" title="ClipXpert - An Introduction" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="row text-center mb-5">
                  <div className="col-md-4">
                    <img src={missionImage} alt="Mission" style={{ width: 60 }} />
                    <h4 style={{ color: "#e65100" }}>Our Mission</h4>
                    <p style={{ fontSize: "0.95rem" }}>
                      Becoming a catalyst in the field of Software Development with outstanding delivery is what we aim for, and we wish to achieve the same by practicing evolution and delivering
                      exceptional service to our clients while keeping quality our top-most priority.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <img src={visionImgae} alt="Vision" style={{ width: 60 }} />
                    <h4 style={{ color: "#e65100" }}>Our Vision</h4>
                    <p style={{ fontSize: "0.95rem" }}>
                      Owebest Technologies' vision is to become one of the most reliable software development companies around the globe, delivering nothing less than quality-driven services to our
                      clients.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <img src={valuesImage} alt="Values" style={{ width: 60 }} />
                    <h4 style={{ color: "#e65100" }}>Our Values</h4>
                    <ul style={{ textAlign: "left", display: "inline-block" }}>
                      <li>Going Above and Beyond</li>
                      <li>Thinking smart and working hard to achieve our goals</li>
                      <li>Integrity and honesty towards our clients</li>
                      <li>Passionate and brilliance in the core dimensions</li>
                    </ul>
                  </div>
                </div>
                <h3 style={{ color: "#e65100" }} className="mb-3">
                  Our Experience and Core Responsibilities Include
                </h3>
                <div className="row mb-5">
                  <div className="col-md-7">
                    <ul>
                      <li>
                        A reputation in the effective conveyance of the most far-reaching superior, high caliber and exceptionally adaptable vigorous applications and arrangements of any
                        unpredictability with the mind-blowing ability for various industry verticals.
                      </li>
                      <li>
                        With worldwide situations changing drastically; we have likewise developed – we have received the most recent philosophies, structures, and apparatuses that are economically
                        suitable. We guarantee Client Engagement by our enthusiasm to pursue rising and contemporary innovation advancements and patterns, keeping our customer's business in front of
                        their rivals and expanding their business ROI.
                      </li>
                      <li>
                        Post-sending endeavors containing a blend of on-location and seaward resources attempt maintenance and support to guarantee that the application(s) has high accessibility and
                        essentially zero down-time.
                      </li>
                      <li>Applying industry best practices, and propelled structures, we assemble a thorough programming arrangement that quickens the mechanization of customer business forms.</li>
                      <li>
                        Owebest is one of the pioneer programming improvement organization in the seaward redistributing space working with 'Unwavering quality' as its trademark and giving seaward
                        advancement administrations to customers over the globe.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-5 text-center">
                    <img src={responsibilityImage} alt="Responsibility" style={{ width: "80%" }} />
                  </div>
                </div>

                <h3 style={{ color: "#e65100" }} className="mb-3">
                  What We Do?
                </h3>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <ul>
                      <li>Core PHP is a robust, open source platform that enables development of agile web applications involving multiple functionalities.</li>
                      <li>MySQL is the world’s second most widely used relational database management system and most widely used open-source RDBMS.</li>
                      <li>ASP .NET is a unified web development model that includes all the services required for you to build enterprise-class web applications with minimal coding.</li>
                      <li>User Experience and Website Designing is our prime objective and we are well versed in it. For developing beautiful webiste, mobile apps.</li>
                      <li>SQL Server, a relational database management system (RDBMS) developed by Microsoft, is a hybrid data platform that delivers breakthrough performance.</li>
                      <li>Ruby on Rails is an open source web framework for developing custom website and web applications. It is optimized for programmer’s performance.</li>
                    </ul>
                  </div>
                  <div className="col-md-6 text-center">
                    <img src="https://www.owebest.com/css/themes/corp/img/tech.png" alt="Technologies" style={{ width: "80%" }} />
                  </div>
                </div>
                <h3 style={{ color: "#e65100" }} className="mb-3">
                  Contact Information
                </h3>
                <ul>
                  <li>Head Office (India): 39, V.T Road, Jaipur, Rajasthan- INDIA</li>
                  <li>Brand Partner Office (USA): 7901 4th St N suite 300, St. Petersburg, FL 33702, USA</li>
                  <li>Dubai Office: 2310 Clover Bay, Burj Khalifa District, Dubai</li>
                  <li>Australia Office: 22-40 Sir John Young Crescent WOOLLOOMOOLOO NSW 2011 AUS</li>
                </ul>
                <p className="mt-4">
                  For any enquiry mail us at <a href="mailto:info@clipxpert.com">info@clipxpert.com</a>
                </p>
                <p className="mt-4">
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>{" "}
                  |{" "}
                  <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                    Terms of Service
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default AboutUs;
