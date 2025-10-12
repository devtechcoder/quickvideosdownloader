// import React, { useState } from "react";
// import { Button, Input, Select, Card, Row, Col, Space, Typography, Progress, Alert, Spin, message, Tabs } from "antd";
// import {
//   DownloadOutlined,
//   LinkOutlined,
//   PlayCircleOutlined,
//   PictureOutlined,
//   LoadingOutlined,
//   YoutubeOutlined,
//   InstagramOutlined,
//   FacebookOutlined,
//   TwitterOutlined,
//   TikTokOutlined,
//   PinterestOutlined,
// } from "@ant-design/icons";

// const { Title, Text } = Typography;
// const { Option } = Select;
// const { TabPane } = Tabs;

// export default function MultiPlatformDownloadForm() {
//   const [url, setUrl] = useState("");
//   const [platform, setPlatform] = useState("auto");
//   const [media, setMedia] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [downloadProgress, setDownloadProgress] = useState(0);

//   const platforms = [
//     { key: "youtube", name: "YouTube", icon: <YoutubeOutlined />, color: "#FF0000" },
//     { key: "instagram", name: "Instagram", icon: <InstagramOutlined />, color: "#E4405F" },
//     { key: "facebook", name: "Facebook", icon: <FacebookOutlined />, color: "#1877F2" },
//     { key: "twitter", name: "Twitter/X", icon: <TwitterOutlined />, color: "#1DA1F2" },
//     { key: "tiktok", name: "TikTok", icon: <TikTokOutlined />, color: "#000000" },
//     { key: "pinterest", name: "Pinterest", icon: <PinterestOutlined />, color: "#BD081C" },
//   ];

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (!url.trim()) {
//       message.error("Please enter a valid video URL");
//       return;
//     }

//     setError(null);
//     setMedia([]);
//     setLoading(true);
//     setDownloadProgress(0);

//     try {
//       // Simulate progress
//       const progressInterval = setInterval(() => {
//         setDownloadProgress((prev) => {
//           if (prev >= 90) {
//             clearInterval(progressInterval);
//             return prev;
//           }
//           return prev + 10;
//         });
//       }, 200);

//       // Detect platform from URL
//       const detectedPlatform = detectPlatform(url);
//       setPlatform(detectedPlatform);

//       const res = await fetch("http://localhost:5000/api/download", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           url,
//           type: detectedPlatform,
//           username: "quickvideosdownload",
//         }),
//       });
//       const data = await res.json();

//       clearInterval(progressInterval);
//       setDownloadProgress(100);

//       if (data.ok) {
//         const mediaList = Array.isArray(data.data) ? data.data : [data.mediaUrl];
//         setMedia(mediaList);
//         message.success(`Found ${mediaList.length} media file(s) from ${platforms.find((p) => p.key === detectedPlatform)?.name || "platform"}`);
//       } else {
//         setError(data.error || "Failed to fetch media");
//         message.error(data.error || "Failed to fetch media");
//       }
//     } catch (err) {
//       setError("Server error - Please try again");
//       message.error("Server error - Please try again");
//     } finally {
//       setLoading(false);
//       setDownloadProgress(0);
//     }
//   }

//   const detectPlatform = (url) => {
//     if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube";
//     if (url.includes("instagram.com")) return "instagram";
//     if (url.includes("facebook.com") || url.includes("fb.watch")) return "facebook";
//     if (url.includes("twitter.com") || url.includes("x.com")) return "twitter";
//     if (url.includes("tiktok.com")) return "tiktok";
//     if (url.includes("pinterest.com")) return "pinterest";
//     return "auto";
//   };

//   const handleDownload = async (fileUrl, index) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/proxy?url=${encodeURIComponent(fileUrl)}`);
//       const blob = await response.blob();
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = `video_${index + 1}.mp4`;
//       link.click();
//       message.success("Download started successfully!");
//     } catch (error) {
//       message.error("Download failed. Please try again.");
//     }
//   };

//   const getPlatformIcon = (platformKey) => {
//     const platform = platforms.find((p) => p.key === platformKey);
//     return platform ? platform.icon : <LinkOutlined />;
//   };

//   const getPlatformColor = (platformKey) => {
//     const platform = platforms.find((p) => p.key === platformKey);
//     return platform ? platform.color : "#4A90E2";
//   };

//   return (
//     <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
//       <Card
//         style={{
//           borderRadius: "16px",
//           boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
//           background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//           color: "white",
//           marginBottom: "24px",
//         }}
//       >
//         <div style={{ textAlign: "center", padding: "20px" }}>
//           <Title level={2} style={{ color: "white", marginBottom: "8px" }}>
//             🎥 QuickVideosDownload
//           </Title>
//           <Text style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px" }}>Download videos from YouTube, Instagram, Facebook, Twitter, TikTok & Pinterest</Text>
//         </div>
//       </Card>

//       <Card
//         style={{
//           borderRadius: "16px",
//           boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//           padding: "24px",
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           <Space direction="vertical" style={{ width: "100%" }} size="large">
//             <div>
//               <label style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>Paste Video URL</label>
//               <Input
//                 placeholder="https://www.youtube.com/watch?v=... or https://www.instagram.com/p/..."
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//                 size="large"
//                 prefix={<LinkOutlined />}
//                 style={{
//                   borderRadius: "12px",
//                   border: "2px solid #e0e0e0",
//                   padding: "12px 16px",
//                 }}
//               />
//             </div>

//             {loading && (
//               <div style={{ textAlign: "center", padding: "20px" }}>
//                 <Spin size="large" />
//                 <div style={{ marginTop: "16px" }}>
//                   <Progress percent={downloadProgress} status={downloadProgress === 100 ? "success" : "active"} strokeColor="#4A90E2" strokeWidth={8} />
//                   <Text style={{ display: "block", marginTop: "8px", color: "#666" }}>Processing your video... {downloadProgress}%</Text>
//                 </div>
//               </div>
//             )}

//             <Button
//               type="primary"
//               htmlType="submit"
//               loading={loading}
//               disabled={!url.trim()}
//               size="large"
//               style={{
//                 height: "50px",
//                 borderRadius: "12px",
//                 background: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
//                 border: "none",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 boxShadow: "0 4px 15px rgba(74, 144, 226, 0.3)",
//               }}
//               icon={<DownloadOutlined />}
//             >
//               {loading ? "Processing..." : "Download Video"}
//             </Button>
//           </Space>
//         </form>

//         {error && <Alert message="Download Failed" description={error} type="error" showIcon closable onClose={() => setError(null)} style={{ marginTop: "16px", borderRadius: "8px" }} />}
//       </Card>

//       {media.length > 0 && (
//         <Card
//           title={
//             <Space>
//               {getPlatformIcon(platform)}
//               <span>Download Options</span>
//             </Space>
//           }
//           style={{
//             marginTop: "24px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//           }}
//         >
//           <Row gutter={[16, 16]}>
//             {media.map((item, index) => (
//               <Col xs={24} sm={12} md={8} key={index}>
//                 <Card
//                   hoverable
//                   style={{
//                     borderRadius: "8px",
//                     overflow: "hidden",
//                     border: `2px solid ${getPlatformColor(platform)}20`,
//                   }}
//                   cover={
//                     <div
//                       style={{
//                         height: "120px",
//                         background: `linear-gradient(135deg, ${getPlatformColor(platform)}20 0%, ${getPlatformColor(platform)}10 100%)`,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: "48px",
//                         color: getPlatformColor(platform),
//                       }}
//                     >
//                       {getPlatformIcon(platform)}
//                     </div>
//                   }
//                 >
//                   <div style={{ textAlign: "center" }}>
//                     <Text strong>Video {index + 1}</Text>
//                     <br />
//                     <Button
//                       type="primary"
//                       onClick={() => handleDownload(item, index)}
//                       style={{
//                         marginTop: "12px",
//                         background: getPlatformColor(platform),
//                         border: "none",
//                         borderRadius: "6px",
//                       }}
//                       icon={<DownloadOutlined />}
//                     >
//                       Download
//                     </Button>
//                   </div>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Card>
//       )}

//       {/* Platform Support Section */}
//       <Card
//         size="small"
//         style={{
//           marginTop: "24px",
//           background: "linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%)",
//           border: "1px solid #b7eb8f",
//           borderRadius: "12px",
//         }}
//       >
//         <Text style={{ fontSize: "14px", color: "#389e0d" }}>
//           <strong>🌟 Supported Platforms:</strong> YouTube, Instagram, Facebook, Twitter/X, TikTok, Pinterest
//         </Text>
//       </Card>

//       {/* Features Section */}
//       <Row gutter={[16, 16]} style={{ marginTop: "32px" }}>
//         <Col xs={24} sm={8}>
//           <Card
//             style={{
//               textAlign: "center",
//               borderRadius: "12px",
//               background: "linear-gradient(135deg, #fff1f0 0%, #ffebe9 100%)",
//               border: "1px solid #ffccc7",
//             }}
//           >
//             <div style={{ fontSize: "32px", marginBottom: "12px" }}>⚡</div>
//             <Title level={5}>Lightning Fast</Title>
//             <Text type="secondary">Download in seconds with our optimized servers</Text>
//           </Card>
//         </Col>
//         <Col xs={24} sm={8}>
//           <Card
//             style={{
//               textAlign: "center",
//               borderRadius: "12px",
//               background: "linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%)",
//               border: "1px solid #b7eb8f",
//             }}
//           >
//             <div style={{ fontSize: "32px", marginBottom: "12px" }}>🎨</div>
//             <Title level={5}>High Quality</Title>
//             <Text type="secondary">Original quality downloads without watermarks</Text>
//           </Card>
//         </Col>
//         <Col xs={24} sm={8}>
//           <Card
//             style={{
//               textAlign: "center",
//               borderRadius: "12px",
//               background: "linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%)",
//               border: "1px solid #91d5ff",
//             }}
//           >
//             <div style={{ fontSize: "32px", marginBottom: "12px" }}>🔒</div>
//             <Title level={5}>Secure & Free</Title>
//             <Text type="secondary">No registration required, completely free</Text>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }
