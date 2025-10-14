import React from "react";

const AboutSection = () => {
  return (
    <>
      <section className="about-section">
        {/* Wave SVG Background - slightly lower to reveal top layer */}
        {/* <svg className="about-section-wave-svg" viewBox="0 0 1440 320">
        <path
          fill="#fff6f6"
          fillOpacity="1"
          d="M0,160L60,165.3C120,171,240,181,360,186.7C480,192,600,192,720,186.7C840,181,960,171,1080,176C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg> */}
        <div className="container">
          <div className="row align-items-center about-section-content">
            <div className="col-md-7">
              <h1>About clipXpert</h1>
              <h2>The Ultimate Tool for Downloading Online Media</h2>
              <p>
                We believe in making online content accessible to everyone. clipXpert was created to provide a simple, fast, and reliable solution for downloading videos, audios, and images from your
                favorite platforms. Our core team of passionate developers is dedicated to building a tool that is powerful yet easy to use for everyone.
              </p>
              <p>
                We provide the best possible experience for our users, no matter where they are. We constantly update our service to support more platforms and improve performance. Our goal is to be
                the #1 choice for anyone looking to save online media for offline use, creative projects, or educational purposes.
              </p>
              <button className="about-section-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Try For Free
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
