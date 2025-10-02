import React from "react";
import { Button, Row, Col, Space, Divider, Typography, Card } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import apiPath from "../../constants/apiPath";

const MediaDisplay = ({ mediaInfo, handleDownload }) => {
  if (!mediaInfo) {
    return null;
  }

  const { source, title, thumbnail, videos, audios, images } = mediaInfo;

  const renderDownloadButtons = (items, type) => {
    if (!items || items.length === 0) return null;

    let buttonType = "primary";
    if (type === "Audio") buttonType = "default";
    if (type === "Image") buttonType = "dashed";

    return (
      <>
        <Divider>{type} Downloads</Divider>
        <Space wrap>
          {items.map((format, index) => (
            <Button key={`${type}-${index}`} type={buttonType} icon={<DownloadOutlined />} onClick={() => handleDownload(format.url, title, format.format)}>
              {type === "Image" ? `Image ${items.length > 1 ? index + 1 : ""}` : format.quality} ({format.format?.toUpperCase()}){format.size}
            </Button>
          ))}
        </Space>
      </>
    );
  };

  return (
    <section className="results-section" style={{ padding: "40px 0", backgroundColor: "#f9fafb" }}>
      <div className="container">
        <Card>
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={8}>
              <img src={`${apiPath.baseURL}${apiPath.proxyImage}?url=${encodeURIComponent(thumbnail)}`} alt={title} style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }} />
            </Col>
            <Col xs={24} md={16}>
              <Typography.Title level={4}>{title}</Typography.Title>
              <Typography.Text type="secondary">Platform: {source}</Typography.Text>
              {renderDownloadButtons(videos, "Video")}
              {renderDownloadButtons(audios, "Audio")}
              {renderDownloadButtons(images, "Image")}
            </Col>
          </Row>
        </Card>
      </div>
    </section>
  );
};

export default MediaDisplay;
