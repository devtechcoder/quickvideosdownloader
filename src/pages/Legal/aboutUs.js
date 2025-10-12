import React from "react";
import Main from "../../components/layout/Main";

const AboutUs = () => {
  return (
    <Main>
      <div className="legal-container">
        <div className="container py-4 py-md-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="legal-header text-center">
                <h1 className="mb-3">About clipXpert</h1>
                <p className="text-muted">Your favorite tool for downloading online media.</p>
              </div>

              <div className="legal-content mt-4 mt-md-5">
                <p>
                  Welcome to <strong>clipXpert</strong>, your number one source for downloading videos from the internet. We're dedicated to giving you the very best tool, with a focus on speed,
                  reliability, and an excellent user experience.
                </p>
                <p>
                  Founded with the goal of making online content more accessible, clipXpert has come a long way from its beginnings. We believe that users should have the ability to save and enjoy
                  videos from their favorite platforms, whether for offline viewing, creative projects, or educational purposes.
                </p>

                <h3 className="mt-4">Our Mission</h3>
                <p>
                  Our mission is to provide a service that is simple, fast, and completely free for everyone. We strive to build a powerful online video downloader that supports a wide range of
                  platforms, including YouTube, Instagram, Facebook, TikTok, and many more.
                </p>

                <h3 className="mt-4">What We Do</h3>
                <p>
                  Our advanced technology extracts video links and provides you with high-quality download options in various formats, without the need for any software installation or registration.
                  We are a small but passionate team of developers and tech enthusiasts who love building useful tools for the internet community.
                </p>
                <p>We hope you enjoy our service as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default AboutUs;
