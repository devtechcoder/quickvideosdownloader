import React from "react";
import { Collapse } from "antd";
import Main from "../../components/layout/Main";
import { Helmet } from "react-helmet-async";

const { Panel } = Collapse;

const sampleFaqs = [
  {
    id: "faq1",
    question: "Is clipXpert completely free to use?",
    answer: "Yes, clipXpert is 100% free. We do not charge any fees for downloading videos. Our service is supported by advertisements.",
  },
  {
    id: "faq2",
    question: "What video quality can I download?",
    answer: "You can download videos in various qualities, including SD, HD, Full HD (1080p), 2K, and even 4K. The available qualities depend on the original video uploaded to the platform.",
  },
  {
    id: "faq3",
    question: "Is it legal to download videos?",
    answer:
      "Downloading videos is generally intended for personal use only. You should not use downloaded content for commercial purposes without the creator's permission. Always respect the copyright of the content owners.",
  },
  {
    id: "faq4",
    question: "Do I need to install any software or extension?",
    answer: "No, you don't need to install anything. clipXpert is a web-based tool that works directly in your browser. Just paste the video URL and click download.",
  },
  {
    id: "faq5",
    question: "Which websites are supported?",
    answer: "We support a wide range of popular video platforms, including YouTube, Facebook, Instagram, TikTok, Twitter, and many more. We are constantly working to add support for more sites.",
  },
];

const Faq = () => {
  return (
    <Main>
      <Helmet>
        <title>Frequently Asked Questions - clipXpert</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about clipXpert. Learn about supported platforms, video quality, legality, and how to use our free video downloader."
        />
        <meta name="keywords" content="clipxpert faq, video downloader faq, frequently asked questions, clipxpert help" />
        <link rel="canonical" href="https://clipxpert.vercel.app/faq" />
      </Helmet>
      <div className="legal-container faq-page">
        <div className="container py-4 py-md-5">
          <div className="legal-header text-center mb-5">
            <h1 className="mb-3">Frequently Asked Questions</h1>
            <p className="text-muted">Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.</p>
          </div>

          <div className="faq-accordion-container">
            <Collapse accordion defaultActiveKey={["faq1"]} bordered={false} className="faq-accordion">
              {sampleFaqs.map((faq, index) => (
                <Panel header={faq.question} key={faq.id} className="faq-panel">
                  <p>{faq.answer}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Faq;
