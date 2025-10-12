import React, { useState, useEffect } from "react";
import { Button, Row, Col, Divider, Typography, Card, Dropdown, Space } from "antd";
import { DownloadOutlined, DownOutlined, VideoCameraOutlined, AudioOutlined } from "@ant-design/icons";
import apiPath from "../../constants/apiPath";

const MediaDisplay = ({ mediaInfo, handleDownload }) => {
  // Hooks को हमेशा कंपोनेंट के टॉप-लेवल पर कॉल करें
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [downloading, setDownloading] = useState({ video: false, audio: false });

  // जब mediaInfo बदलता है तो state को अपडेट करने के लिए useEffect का उपयोग करें
  useEffect(() => {
    if (mediaInfo) {
      const { videos = [], audios = [] } = mediaInfo;
      // helper: default video select (highest quality if available)
      const getDefaultVideo = () => {
        if (videos.length === 0) return null;
        return videos.find((v) => v.quality?.includes("720") || v.quality?.includes("1080")) || videos[0];
      };
      setSelectedVideo(getDefaultVideo());
      setSelectedAudio(audios.length > 0 ? audios[0] : null);
      setDownloading({ video: false, audio: false }); // mediaInfo बदलने पर लोडिंग स्टेट रीसेट करें
    }
  }, [mediaInfo]); // यह इफ़ेक्ट तब चलेगा जब mediaInfo prop बदलेगा

  if (!mediaInfo) {
    return null;
  }

  const { source, title, thumbnail, videos = [], audios = [] } = mediaInfo;

  // Dropdown items for Video
  const videoItems = videos.map((v, i) => ({
    key: `video-${i}`,
    label: `${v.quality} (${v.format?.toUpperCase()}) ${v.size || ""}`,
    onClick: () => setSelectedVideo(v),
  }));

  // Dropdown items for Audio
  const audioItems = audios.map((a, i) => ({
    key: `audio-${i}`,
    label: `${a.quality || ""} (${a.format?.toUpperCase()}) ${a.size || ""}`,
    onClick: () => setSelectedAudio(a),
  }));

  // डाउनलोड को हैंडल करने के लिए रैपर फंक्शन
  const onDownloadClick = async (type, url, title, format) => {
    // संबंधित बटन के लिए लोडिंग स्टेट सेट करें
    setDownloading((prev) => ({ ...prev, [type]: true }));
    try {
      // मूल handleDownload फंक्शन को कॉल करें
      await handleDownload(url, title, format);
    } catch (error) {
      // अगर कोई एरर आती है तो उसे कंसोल में दिखाएं
      console.error("An error occurred during download:", error);
    } finally {
      // डाउनलोड पूरा होने या फेल होने पर लोडिंग स्टेट को रीसेट करें
      setDownloading((prev) => ({ ...prev, [type]: false }));
    }
  };

  return (
    <section className="results-section" style={{ padding: "40px 0", backgroundColor: "#f9fafb" }}>
      <div className="container">
        <Card>
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={8}>
              {videos.length > 0 && selectedVideo ? (
                <video
                  key={selectedVideo.url} // यूआरएल बदलने पर प्लेयर को री-रेंडर करने के लिए key
                  controls
                  poster={`${apiPath.baseURL}${apiPath.proxyImage}?url=${encodeURIComponent(thumbnail)}`}
                  style={{ width: "100%", borderRadius: "8px", background: "#000" }}
                  preload="metadata"
                >
                  <source src={selectedVideo.url} type={`video/${selectedVideo.format || "mp4"}`} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={`${apiPath.baseURL}${apiPath.proxyImage}?url=${encodeURIComponent(thumbnail)}`} alt={title} style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }} />
              )}
            </Col>
            <Col xs={24} md={16}>
              <Typography.Title level={4}>{title}</Typography.Title>
              <Typography.Text type="secondary">Platform: {source}</Typography.Text>

              <Divider>Download Options</Divider>
              <Space wrap align="start">
                {/* VIDEO DOWNLOAD BUTTONS */}
                {videos.length > 0 && (
                  <div className="download-button-group">
                    <Dropdown menu={{ items: videoItems, style: { maxHeight: 200, overflow: "auto" } }}>
                      <Button type="primary" icon={<VideoCameraOutlined />}>
                        {selectedVideo ? `Video: ${selectedVideo.quality}` : "Select Video"} <DownOutlined />
                      </Button>
                    </Dropdown>
                    {selectedVideo && (
                      <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        onClick={() => onDownloadClick("video", selectedVideo.url, title, selectedVideo.format)}
                        className="download-action-btn"
                        loading={downloading.video}
                        disabled={downloading.video}
                      >
                        {downloading.video ? "Downloading..." : "Download"}
                      </Button>
                    )}
                  </div>
                )}

                {/* AUDIO DOWNLOAD BUTTONS */}
                {audios.length > 0 && (
                  <div className="download-button-group">
                    <Dropdown menu={{ items: audioItems, style: { maxHeight: 200, overflow: "auto" } }}>
                      <Button type="primary" icon={<AudioOutlined />} className="audio-dropdown-btn">
                        {selectedAudio ? `Audio: ${selectedAudio.format?.toUpperCase()}` : "Select Audio"} <DownOutlined />
                      </Button>
                    </Dropdown>
                    {selectedAudio && (
                      <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        onClick={() => onDownloadClick("audio", selectedAudio.url, title, selectedAudio.format)}
                        className="download-action-btn"
                        loading={downloading.audio}
                        disabled={downloading.audio}
                      >
                        {downloading.audio ? "Downloading..." : "Download"}
                      </Button>
                    )}
                  </div>
                )}
              </Space>
            </Col>
          </Row>
        </Card>
      </div>
    </section>
  );
};

export default MediaDisplay;
