import React from "react";
import Main from "../../components/layout/Main";

const Contact = () => {
  return (
    <Main>
      <div className="legal-container contact-page">
        <div className="container py-4 py-md-5">
          <div className="legal-header text-center mb-5">
            <h1 className="mb-3">Contact Us</h1>
            <p className="text-muted">We'd love to hear from you. Reach out with any questions or feedback.</p>
          </div>

          <div className="row g-5 justify-content-center">
            <div className="col-lg-7">
              <div className="contact-form-wrapper">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input type="email" className="form-control" id="email" placeholder="your.email@example.com" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input type="text" className="form-control" id="subject" placeholder="How can we help?" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea className="form-control" id="message" rows="5" placeholder="Leave your message here..." required></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
