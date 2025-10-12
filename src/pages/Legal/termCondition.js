import React from "react";
import Main from "../../components/layout/Main";

const TermCondition = () => {
  return (
    <Main>
      <div className="legal-container">
        <div className="container py-4 py-md-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="legal-header text-center">
                <h1 className="mb-3">Terms & Conditions</h1>
                <p className="text-muted">Last Updated: {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</p>
              </div>

              <div className="legal-content mt-4 mt-md-5">
                <p>
                  Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the <strong>clipXpert</strong> website (the "Service") operated by us.
                </p>
                <p>
                  Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the
                  Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                </p>

                <h3 className="mt-4">1. Accounts</h3>
                <p>
                  When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms,
                  which may result in immediate termination of your account on our Service.
                </p>
                <p>
                  You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service
                  or a third-party service.
                </p>

                <h3 className="mt-4">2. Links To Other Web Sites</h3>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by clipXpert.</p>
                <p>
                  clipXpert has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and
                  agree that clipXpert shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on
                  any such content, goods or services available on or through any such web sites or services.
                </p>

                <h3 className="mt-4">3. Termination</h3>
                <p>
                  We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>

                <h3 className="mt-4">4. Governing Law</h3>
                <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default TermCondition;
