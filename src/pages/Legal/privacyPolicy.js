import React from "react";
import Main from "../../components/layout/Main";

const PrivacyPolicy = () => {
  return (
    <Main>
      <div className="legal-container">
        <div className="container py-4 py-md-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="legal-header text-center">
                <h1 className="mb-3">Privacy Policy</h1>
                <p className="text-muted">Last Updated: {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</p>
              </div>

              <div className="legal-content mt-4 mt-md-5">
                <p>
                  Welcome to <strong>clipXpert</strong>. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                  you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>

                <h3 className="mt-4">1. Information We Collect</h3>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul>
                  <li>
                    <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when
                    you register with the Site or when you choose to participate in various activities related to the Site.
                  </li>
                  <li>
                    <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your
                    access times, and the pages you have viewed directly before and after accessing the Site.
                  </li>
                </ul>

                <h3 className="mt-4">2. How We Use Your Information</h3>
                <p>
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the
                  Site to:
                </p>
                <ul>
                  <li>Create and manage your account.</li>
                  <li>Email you regarding your account or order.</li>
                  <li>Improve our website and offerings.</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                  <li>Notify you of updates to the Site.</li>
                </ul>

                <h3 className="mt-4">3. Disclosure of Your Information</h3>
                <p>
                  We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website
                  hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information
                  confidential.
                </p>

                <h3 className="mt-4">4. Security of Your Information</h3>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information
                  you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any
                  interception or other type of misuse.
                </p>

                <h3 className="mt-4">5. Changes to This Privacy Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify
                  you of any changes by posting the new Privacy Policy on this page.
                </p>

                <h3 className="mt-4">6. Contact Us</h3>
                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <p>
                  <strong>Email:</strong> support@clipXpert.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default PrivacyPolicy;
